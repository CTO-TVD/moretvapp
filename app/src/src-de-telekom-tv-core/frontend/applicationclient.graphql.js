var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GraphQL = void 0;
    var GraphQLQueryError = (function (_super) {
        __extends(GraphQLQueryError, _super);
        function GraphQLQueryError(message) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x60F;
            return _this;
        }
        return GraphQLQueryError;
    }(public_1.BaseError));
    var GraphQL = (function () {
        function GraphQL() {
        }
        GraphQL_1 = GraphQL;
        GraphQL.getVariableString = function (variable) {
            if (variable.enum) {
                return "$" + variable.name + ": " + variable.enum + (!variable.optional && "!");
            }
            var variableType = "" + (variable.isArray ? "[" + variable.type + (!variable.optional && "!") + "]!" : "" + variable.type + (!variable.optional && "!"));
            return "$" + variable.name + ": " + variableType;
        };
        GraphQL.getArgumentString = function (argument, variables, enums) {
            var variable;
            if (argument.variable) {
                variable = variables.filter(function (variable) { return variable.name == argument.variable; })[0];
                if (!variable) {
                    throw new GraphQLQueryError("argument " + argument.name + " refers to variable " + argument.variable + " which could not be found in variables " + variables.map(function (variable) { return variable.name; }).join("|"));
                }
                return argument.name + ": $" + argument.variable;
            }
            if (argument.enum) {
                var baseErrorMessage = "Validate argument failed: Argument " + argument.name + " is declared as Enum but";
                if (!argument.value) {
                    throw new GraphQLQueryError(baseErrorMessage + " enum value is not set.");
                }
                return argument.name + ": " + GraphQL_1.checkEnumValue(baseErrorMessage, argument.enum, String(argument.value), enums);
            }
            return argument.name + ": " + (public_1.Guard.isString(argument.value) ? "\"" + argument.value + "\"" : argument.value);
        };
        GraphQL.getArgumentsString = function (args, variables, enums) {
            return "(" + args.map(function (argument) { return GraphQL_1.getArgumentString(argument, variables, enums); }).join(", ") + ")";
        };
        GraphQL.operationToString = function (operation, wellFormed) {
            if (wellFormed === void 0) { wellFormed = true; }
            var lines = [];
            lines.push(operation.type + " " + operation.name + "(" + operation.variables.map(function (variable) { return GraphQL_1.getVariableString(variable); }).join(", ") + ") {");
            GraphQL_1.addTypeToQueryString(lines, operation.responseType, operation.variables, 1, operation.enums);
            lines.push("}");
            if (wellFormed) {
                return lines.join("\n");
            }
            var trimmedLines = lines.map(function (line) { return line.trim(); });
            return trimmedLines.join("");
        };
        GraphQL.checkValue = function (variable, value, enums) {
            var baseErrorMessage = "Validate query failed: The variable " + variable.name + " is declared as " + variable.type + " but";
            if ((variable.type == "String" && !public_1.Guard.isString(value)) ||
                (variable.type == "Float" && !public_1.Guard.isNumber(value)) ||
                (variable.type == "Int" && !public_1.Guard.isNumber(value))) {
                throw new GraphQLQueryError(baseErrorMessage + " it's value is other type.");
            }
            if (variable.type == "Enum") {
                if (!variable.enum) {
                    throw new GraphQLQueryError(baseErrorMessage + " enum name is not set.");
                }
                GraphQL_1.checkEnumValue(baseErrorMessage, variable.enum, String(value), enums);
            }
        };
        GraphQL.checkEnumValue = function (baseErrorMessage, enumName, enumValue, enums) {
            if (!enums) {
                throw new GraphQLQueryError(baseErrorMessage + " no enums are defined on operation.");
            }
            var enumeration = enums.filter(function (en) { return en.name == enumName; })[0];
            if (!enumeration) {
                throw new GraphQLQueryError(baseErrorMessage + " enum name " + enumName + " was not found in enums " + enums.map(function (en) { return en.name; }).join("|"));
            }
            if (enumeration.values.indexOf(enumValue) < 0) {
                throw new GraphQLQueryError(baseErrorMessage + " enum value " + enumValue + " was not found in " + enumeration.values.join("|"));
            }
            return enumValue;
        };
        GraphQL.checkVariableValues = function (operation, variableValues) {
            operation.variables.forEach(function (variable) {
                var value = variableValues[variable.name];
                if (public_1.Guard.isDefined(value)) {
                    if (variable.isArray) {
                        if (!Array.isArray(value)) {
                            throw new GraphQLQueryError("Validate query failed: The variable " + variable.name + " is declared as " + variable.type + " but it's value is other type.");
                        }
                        value.forEach(function (value) { return GraphQL_1.checkValue(variable, value); });
                    }
                    else {
                        GraphQL_1.checkValue(variable, value, operation.enums);
                    }
                }
                else if (!variable.optional) {
                    throw new GraphQLQueryError("Validate query failed: The variable " + variable.name + " is required but has no value.");
                }
            });
        };
        GraphQL.getIndentString = function (indentLevel) {
            var indentString = "";
            for (var index = 0; index < indentLevel; index++) {
                indentString += GraphQL_1.tabString;
            }
            return indentString;
        };
        GraphQL.addTypeToQueryString = function (lines, type, variables, indentLevel, enums) {
            var indentString = GraphQL_1.getIndentString(indentLevel);
            lines.push("" + indentString + type.name + (type.arguments ? GraphQL_1.getArgumentsString(type.arguments, variables, enums) : "") + " {");
            if (type.fields) {
                GraphQL_1.addFieldsToQueryString(lines, variables, type.fields, indentLevel, enums);
            }
            else if (type.fragments) {
                type.fragments.forEach(function (fragment) { return GraphQL_1.addFragment(lines, fragment, variables, indentLevel + 1, enums); });
            }
            else {
                throw new GraphQLQueryError("Validate query failed: The Type " + type.name + " has neither fields nor fragemnts defined.");
            }
            lines.push(indentString + "}");
        };
        GraphQL.addFragment = function (lines, fragment, variables, indentLevel, enums) {
            var indentString = GraphQL_1.getIndentString(indentLevel);
            if (fragment.isInline) {
                lines.push(indentString + "... on " + fragment.onTypeName + " {");
            }
            else {
                throw new GraphQLQueryError("NON inline fragmments are not supported YET.");
            }
            GraphQL_1.addFieldsToQueryString(lines, variables, fragment.fields, indentLevel, enums);
            lines.push(indentString + "}");
        };
        GraphQL.addFieldsToQueryString = function (lines, variables, fields, indentLevel, enums) {
            var indentString = GraphQL_1.getIndentString(indentLevel);
            fields.forEach(function (field, index) {
                if (public_1.Guard.isString(field.definition)) {
                    lines.push("" + indentString + GraphQL_1.tabString + field.definition + (index < fields.length - 1 ? "," : ""));
                }
                else {
                    GraphQL_1.addTypeToQueryString(lines, field.definition, variables, indentLevel + 1, enums);
                }
            });
        };
        var GraphQL_1;
        GraphQL.tabString = "  ";
        GraphQL = GraphQL_1 = __decorate([
            public_1.logTag()
        ], GraphQL);
        return GraphQL;
    }());
    exports.GraphQL = GraphQL;
});
//# sourceMappingURL=applicationclient.graphql.js.map