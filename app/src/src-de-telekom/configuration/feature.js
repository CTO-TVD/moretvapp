var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "underscore", "../Enums", "./feature.interface", "./feature.rights", "./feature.items", "./feature.source", "../util/log/public", "../typing/public"], function (require, exports, _, Enums_1, feature_interface_1, feature_rights_1, feature_items_1, feature_source_1, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Feature = void 0;
    var FeatureAssignmentSet = (function () {
        function FeatureAssignmentSet() {
            this.assignmentSet = {};
        }
        FeatureAssignmentSet.prototype.add = function (item, rights) {
            var allRights = __spreadArrays((this.assignmentSet[item] || []), (rights || []));
            if (allRights.indexOf(feature_rights_1.FeatureRights.none) !== -1) {
                this.assignmentSet[item] = [feature_rights_1.FeatureRights.none];
            }
            else {
                this.assignmentSet[item] = _.unique(allRights);
            }
        };
        FeatureAssignmentSet.prototype.get = function (item) {
            return this.assignmentSet[item];
        };
        return FeatureAssignmentSet;
    }());
    var Feature = (function () {
        function Feature() {
            this.setup();
        }
        Feature_1 = Feature;
        Feature.prototype.setup = function () {
            this.tree = null;
            this.itemRights = Object.create(null);
            this.values = Object.create(null);
            this.buildFeatureTree();
        };
        Feature.prototype.loadStructure = function (structure, useAssignments) {
            if (structure) {
                this.setup();
                if (Array.isArray(structure.assignmentSource))
                    this.processAssignmentSource(structure.assignmentSource, structure.assignment);
                var rightsSet = {};
                if (public_2.Guard.isPureObject(structure.definition))
                    this.processDefinitions(structure.definition, rightsSet);
                var assignmentRightsSet = new FeatureAssignmentSet();
                var assignmentValuesSet = {};
                if (public_2.Guard.isPureObject(structure.assignment))
                    this.processAssignments(structure.assignment, assignmentRightsSet, assignmentValuesSet, rightsSet, useAssignments);
                this.setRights(this.tree, assignmentRightsSet);
                this.setValues(assignmentValuesSet);
            }
        };
        Feature.prototype.buildFeatureTree = function () {
            for (var _i = 0, _a = feature_items_1.FeatureItemStructure.structure; _i < _a.length; _i++) {
                var item = _a[_i];
                var treeItemRight = {
                    itemId: item.item,
                    itemName: feature_items_1.FeatureItems[item.item],
                    parentId: item.parent,
                    children: [],
                    rights: []
                };
                if (treeItemRight.parentId == feature_items_1.FeatureItems.root) {
                    this.tree = treeItemRight;
                }
                else {
                    if (!this.itemRights[treeItemRight.parentId]) {
                        throw new feature_interface_1.FeatureError("Cannot find parent item for item '" + feature_items_1.FeatureItems[treeItemRight.itemId] + " (" + treeItemRight.itemId + ")'. Please consider the order of the items.");
                    }
                    this.itemRights[treeItemRight.parentId].children.push(treeItemRight);
                }
                if (this.itemRights[treeItemRight.itemId]) {
                    throw new feature_interface_1.FeatureError("The item '" + feature_items_1.FeatureItems[treeItemRight.itemId] + " (" + treeItemRight.itemId + ")' was already registered.");
                }
                this.itemRights[treeItemRight.itemId] = treeItemRight;
            }
            for (var _b = 0, _c = Enums_1.Enums.getValues(feature_items_1.FeatureItems); _b < _c.length; _b++) {
                var value = _c[_b];
                if (value != 0 && !this.itemRights[value]) {
                    throw new feature_interface_1.FeatureError("The item '" + feature_items_1.FeatureItems[value] + " (" + value + ")' is not part of the feature item tree.");
                }
            }
        };
        Feature.prototype.processAssignmentSource = function (sources, assignment) {
            for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
                var source = sources_1[_i];
                if (source.type == feature_source_1.FeatureSourceUrl.type) {
                    feature_source_1.FeatureSourceUrl.process(source, assignment);
                }
            }
        };
        Feature.prototype.processDefinitions = function (definition, rightsSet) {
            if (definition.rights) {
                if (public_2.Guard.isPureObject(definition.rights)) {
                    for (var right in definition.rights) {
                        if (feature_rights_1.FeatureRights[right] !== undefined) {
                            throw new feature_interface_1.FeatureError("Rights name '" + right + "' cannot be used.");
                        }
                        if (Array.isArray(definition.rights[right])) {
                            rightsSet[right] = [];
                            for (var _i = 0, _a = definition.rights[right]; _i < _a.length; _i++) {
                                var basicRight = _a[_i];
                                if (feature_rights_1.FeatureRights[basicRight] == undefined) {
                                    throw new feature_interface_1.FeatureError("Basic right '" + basicRight + "' cannot be used.");
                                }
                                rightsSet[right].push(feature_rights_1.FeatureRights[basicRight]);
                            }
                        }
                        else {
                            throw new feature_interface_1.FeatureError("Custom rights must be defined with a array of rights.");
                        }
                    }
                }
                else {
                    throw new feature_interface_1.FeatureError("Custom rights definition must be defined with a object.");
                }
            }
        };
        Feature.prototype.processAssignments = function (assignments, assignmentRightsSet, assignmentValuesSet, rightsSet, useAssignments) {
            var _loop_1 = function (assignment) {
                if (useAssignments.indexOf(assignment) == -1)
                    return "continue";
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Start processing assignment '" + assignment + "'", Feature_1.TAG)); });
                var assignmentDefinition = assignments[assignment];
                if (!public_2.Guard.isPureObject(assignmentDefinition))
                    throw new feature_interface_1.FeatureError("Assignment items must be of type object. Assignment '" + assignment + "'");
                if (public_2.Guard.isPureObject(assignmentDefinition.rights))
                    this_1.processRights(assignmentDefinition.rights, assignmentRightsSet, rightsSet);
                if (public_2.Guard.isPureObject(assignmentDefinition.values))
                    this_1.processValues(assignmentDefinition.values, assignmentValuesSet);
                if (public_2.Guard.isPureObject(assignmentDefinition.assignment))
                    this_1.processAssignments(assignmentDefinition.assignment, assignmentRightsSet, assignmentValuesSet, rightsSet, useAssignments);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("End processing assignment '" + assignment + "'", Feature_1.TAG)); });
            };
            var this_1 = this;
            for (var assignment in assignments) {
                _loop_1(assignment);
            }
        };
        Feature.prototype.processRights = function (rights, assignmentRightsSet, rightsSet) {
            for (var item in rights) {
                var itemValue = feature_items_1.FeatureItems[item];
                if (!itemValue) {
                    throw new feature_interface_1.FeatureError("Rights cannot be assigned to item '" + item + "'. Item cannot be found.");
                }
                if (!this.itemRights[itemValue]) {
                    throw new feature_interface_1.FeatureError("Rights cannot be assigned to item '" + item + "'. Item is not part of the internal tree.");
                }
                if (Array.isArray(rights[item])) {
                    var assignmentRights = [];
                    for (var _i = 0, _a = rights[item]; _i < _a.length; _i++) {
                        var right = _a[_i];
                        if (rightsSet[right] !== undefined) {
                            assignmentRights.push.apply(assignmentRights, rightsSet[right]);
                        }
                        else if (feature_rights_1.FeatureRights[right] !== undefined) {
                            assignmentRights.push(feature_rights_1.FeatureRights[right]);
                        }
                        else {
                            throw new feature_interface_1.FeatureError("Rights name '" + right + "' cannot be used.");
                        }
                    }
                    assignmentRightsSet.add(itemValue, assignmentRights);
                }
                else {
                    throw new feature_interface_1.FeatureError("Assignment rights must be defined with a array of rights.");
                }
            }
        };
        Feature.prototype.processValues = function (values, assignmentValuesSet) {
            if (public_2.Guard.isPureObject(values)) {
                for (var valueName in values) {
                    if (public_2.Guard.isPureObject(values[valueName])) {
                        assignmentValuesSet[valueName] = __spreadArrays((assignmentValuesSet[valueName] || []), [values[valueName]]);
                    }
                    else {
                        throw new feature_interface_1.FeatureError("Assignment values must be defined with a object type. Key: '" + valueName + "'");
                    }
                }
            }
            else {
                throw new feature_interface_1.FeatureError("Assignment values must be defined with a object type.");
            }
        };
        Feature.prototype.setValues = function (assignmentValues) {
            for (var valueName in assignmentValues) {
                this.values[valueName] = _
                    .sortBy(assignmentValues[valueName], function (item) { return -(item.prio || 0); })
                    .map(function (item) { return item.value; });
            }
        };
        Feature.prototype.setRights = function (treeItem, assignmentSet) {
            if (assignmentSet.get(treeItem.itemId)) {
                treeItem.rights = assignmentSet.get(treeItem.itemId);
            }
            else {
                treeItem.rights = this.itemRights[treeItem.parentId] !== undefined ? this.itemRights[treeItem.parentId].rights : [];
            }
            for (var _i = 0, _a = treeItem.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.setRights(child, assignmentSet);
            }
        };
        Feature.prototype.toString = function () {
            return JSON.stringify({ tree: this.tree, values: this.values });
        };
        Feature.getInstance = function () {
            if (!Feature_1.instance) {
                Feature_1.instance = new Feature_1();
            }
            return Feature_1.instance;
        };
        Feature.has = function (item, right) {
            return Feature_1.getInstance().itemRights[item].rights.indexOf(right) !== -1;
        };
        Feature.getValue = function (key) {
            return Feature_1.getInstance().values[key] || [];
        };
        Feature.getValuePartnerMapId = function () {
            return Feature_1.getValue("partnerMapId")[0];
        };
        Feature.getValueAppMapId = function () {
            return Feature_1.getValue("appMapId")[0];
        };
        var Feature_1;
        Feature = Feature_1 = __decorate([
            public_1.logTag()
        ], Feature);
        return Feature;
    }());
    exports.Feature = Feature;
});
//# sourceMappingURL=feature.js.map