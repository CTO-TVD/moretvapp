var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
define(["require", "exports", "react", "underscore", "react-transition-group", "../../../base/public", "src/src-de-telekom/public", "../../../service/keyeventmanager/public", "./inputfieldoptions", "../../../framework/public", "src/src-de-telekom-style/public"], function (require, exports, React, _, react_transition_group_1, public_1, public_2, public_3, inputfieldoptions_1, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVInputFieldComponent = void 0;
    var TVInputFieldComponent = (function (_super) {
        __extends(TVInputFieldComponent, _super);
        function TVInputFieldComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.options = new inputfieldoptions_1.TVInputFieldOptions();
            _this.stars = false;
            _this.supportCharacterRotation = true;
            _this.supportT9Input = true;
            _this.numberCounter = 0;
            _this.lastT9Input = 0;
            _this.timeOutPromiseExecKey = 0;
            _this.timeOutPromiseFlash = 0;
            _this.cursorPosition = 0;
            _this.keyboardLayouts = {
                standard: [],
                email: [],
                search: [],
                password: [],
                numeric: []
            };
            _this.toUpperCase = {
                exec: function () { _this.activateCharacterSet(0); },
                label: "ABC",
                class: "uppers"
            };
            _this.toNumber = {
                exec: function () { _this.activateCharacterSet(1); },
                label: "&123",
                class: "numbers"
            };
            _this.toNumber3 = {
                exec: function () { _this.activateCharacterSet(2); },
                label: "&123",
                class: "numbers"
            };
            _this.toLowerCase = {
                exec: function () { _this.activateCharacterSet(1); },
                label: "abc",
                class: "lowers"
            };
            _this.toSpecial = {
                exec: function () { _this.activateCharacterSet(3); },
                label: "&#;",
                class: "symbols"
            };
            _this.execBackspace = {
                exec: function () { _this.executeBackspace(); },
                class: "icon backspace",
                label: ""
            };
            _this.execSpace = {
                exec: function () { _this.executeSendBlank(); },
                class: "icon space",
                specialCharacter: " ",
                label: ""
            };
            _this.indicateMaxlength = true;
            _this.initKeyboardLayouts();
            _this.updateStars();
            _this.selectedLayout = _this.keyboardLayouts[_this.props.layout];
            _this.stars = _this.props.layout === "password";
            if (!_this.selectedLayout || _this.selectedLayout.length === 0) {
                _this.selectedLayout = _this.keyboardLayouts.standard;
            }
            _this.state = {
                isInputFocussed: false,
                isKeyboardFocussed: false,
                leftCharacters: "",
                rightCharacters: "",
                currentCharacterSetIndex: _this.setCharacterSetIndex(_this.props.layout),
                currentCharacterSet: _this.selectedLayout[0],
                passwordLeftCharacters: "",
                passwordRightCharacters: "",
                flash: false
            };
            return _this;
        }
        TVInputFieldComponent_1 = TVInputFieldComponent;
        TVInputFieldComponent.prototype.setCharacterSetIndex = function (layout) {
            return layout === "numeric" ? 1 : 0;
        };
        TVInputFieldComponent.prototype.setFocus = function (hasFocus) {
            if (hasFocus && !this.props.hideFocus) {
                this.setState({
                    isInputFocussed: false,
                    isKeyboardFocussed: true
                });
            }
            else {
                this.setState({
                    isInputFocussed: false,
                    isKeyboardFocussed: false
                });
            }
        };
        TVInputFieldComponent.prototype.destroy = function () {
            clearTimeout(this.timeOutPromiseExecKey);
            clearTimeout(this.timeOutPromiseFlash);
            this.timeOutPromiseExecKey = 0;
            this.timeOutPromiseFlash = 0;
        };
        TVInputFieldComponent.prototype.setNewValue = function (queryText) {
            var _this = this;
            if (queryText == "") {
                this.setState({
                    rightCharacters: "",
                    leftCharacters: ""
                });
                this.cursorPosition = queryText.length;
                this.updateStars();
                return;
            }
            this.setState(function (prevState) {
                var fullText = prevState.leftCharacters + prevState.rightCharacters;
                if (fullText != queryText.replace(/ /g, "\u00A0")) {
                    _this.cursorPosition = queryText.length;
                    return {
                        rightCharacters: "",
                        leftCharacters: queryText.replace(/ /g, "\u00A0")
                    };
                }
                return null;
            });
            setTimeout(function () {
                _this.updateStars();
            }, 1000);
        };
        TVInputFieldComponent.prototype.activateCharacterSet = function (index) {
            if (this.state.currentCharacterSetIndex === index) {
                return;
            }
            this.setState({
                currentCharacterSetIndex: index,
                currentCharacterSet: this.selectedLayout[index]
            });
        };
        TVInputFieldComponent.prototype.selectFirstCharacter = function () {
            this.setState({
                selectedCharacterIndex: undefined
            });
            if (this.props.layout === "numeric") {
                var firstIndex = 0;
                this.selectCharacterByIndex(firstIndex);
            }
            else {
                var firstIndex = 1;
                this.selectCharacterByIndex(firstIndex);
            }
        };
        TVInputFieldComponent.prototype.getValue = function () {
            var combined = this.state.leftCharacters + this.state.rightCharacters;
            return combined.replace(/\u00A0/g, " ");
        };
        TVInputFieldComponent.prototype.modifyBoundValue = function () {
            if (this.props.onInputData)
                this.props.onInputData(this.getValue());
        };
        TVInputFieldComponent.prototype.autoSelectKeyboard = function (searchCharacter) {
            var keyboardIndex = this.findKeyboardForCharacter(searchCharacter);
            if (keyboardIndex != undefined) {
                this.activateCharacterSet(keyboardIndex);
                return true;
            }
            return false;
        };
        TVInputFieldComponent.prototype.findKeyboardForCharacter = function (searchCharacter) {
            var sets = this.selectedLayout;
            for (var i = 0, l = sets.length; i < l; i++) {
                var currentSet = sets[i];
                if (this.getCharacterIndexByLetter(currentSet, searchCharacter) !== -1) {
                    return i;
                }
            }
            return undefined;
        };
        TVInputFieldComponent.prototype.selectCharacterByIndex = function (index) {
            var _this = this;
            this.setState(function (prevState) {
                if (prevState.currentCharacterSet == undefined) {
                    throw new Error("Select a character list first!");
                }
                var characterToSelect = prevState.currentCharacterSet[index];
                if (characterToSelect == undefined) {
                    if (!_this.supportCharacterRotation) {
                        return null;
                    }
                    var listLength = prevState.currentCharacterSet.length;
                    if (index < 0) {
                        characterToSelect = prevState.currentCharacterSet[listLength - 1];
                    }
                    else if (index === listLength) {
                        characterToSelect = prevState.currentCharacterSet[0];
                    }
                    else {
                        return null;
                    }
                }
                var newState = _this.selectCharacter(prevState, characterToSelect);
                if (_this.props.onKeySelectionChanged)
                    _this.props.onKeySelectionChanged();
                return newState;
            });
        };
        TVInputFieldComponent.prototype.selectCharacter = function (state, item) {
            if (!item)
                return null;
            var index = (item === null || item === void 0 ? void 0 : item.specialCharacter)
                ? this.getCharacterIndexByLetter(state.currentCharacterSet, item.specialCharacter)
                : this.getCharacterIndex(state.currentCharacterSet, item);
            if (index === -1) {
                throw new Error("Character '" + item + "' is not in the current character list!");
            }
            var oldIndex = state.selectedCharacterIndex;
            if (index === oldIndex) {
                return null;
            }
            return {
                selectedCharacterIndex: index
            };
        };
        TVInputFieldComponent.prototype.getCharacterIndex = function (list, search) {
            var index = list.indexOf(search);
            return index;
        };
        TVInputFieldComponent.prototype.getCharacterIndexByLetter = function (list, search) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].label || list[i].specialCharacter) {
                    if (list[i].label === search || (list[i].specialCharacter && list[i].specialCharacter === search)) {
                        return i;
                    }
                }
            }
            return -1;
        };
        TVInputFieldComponent.prototype.createCharacterSet = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var resultSet = [];
            if (args.length > 1) {
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                    var entry = args_1[_a];
                    if (entry instanceof Array) {
                        var keys1 = _.map(entry, function (key) { return ({ label: key, class: "", exec: undefined }); });
                        resultSet.push.apply(resultSet, keys1);
                    }
                    else if (typeof entry === "string") {
                        var keys2 = _.map(entry.split(""), function (key) { return ({ label: key, class: "", exec: undefined }); });
                        resultSet.push.apply(resultSet, keys2);
                    }
                    else if (typeof entry === "object") {
                        resultSet.push(entry);
                    }
                    else {
                        throw new Error("Invalid character set member: " + entry);
                    }
                }
            }
            return resultSet;
        };
        TVInputFieldComponent.prototype.initKeyboardLayouts = function () {
            this.keyboardLayouts.standard = [];
            this.keyboardLayouts.search = [];
            this.keyboardLayouts.password = [];
            this.keyboardLayouts.numeric = [];
            this.keyboardLayouts.numeric.push(this.createCharacterSet(TVInputFieldComponent_1.SETS.numbers, this.execBackspace));
            this.keyboardLayouts.numeric.push(this.createCharacterSet(TVInputFieldComponent_1.SETS.numbers, this.execBackspace));
            this.keyboardLayouts.standard.push(this.createCharacterSet(this.toNumber, TVInputFieldComponent_1.SETS.upper, this.execSpace, this.execBackspace));
            this.keyboardLayouts.standard.push(this.createCharacterSet(this.toUpperCase, TVInputFieldComponent_1.SETS.numbers, TVInputFieldComponent_1.SETS.upperUmlauts, TVInputFieldComponent_1.SETS.special, this.execSpace, this.execBackspace));
            this.keyboardLayouts.search.push(this.createCharacterSet(this.toNumber, TVInputFieldComponent_1.SETS.upper, this.execSpace, this.execBackspace));
            this.keyboardLayouts.search.push(this.createCharacterSet(this.toUpperCase, TVInputFieldComponent_1.SETS.numbers, TVInputFieldComponent_1.SETS.upperUmlauts, TVInputFieldComponent_1.SETS.special, this.execSpace, this.execBackspace));
            this.keyboardLayouts.password.push(this.createCharacterSet(this.toLowerCase, TVInputFieldComponent_1.SETS.upper, this.execSpace, this.execBackspace));
            this.keyboardLayouts.password.push(this.createCharacterSet(this.toNumber3, TVInputFieldComponent_1.SETS.lower, this.execSpace, this.execBackspace));
            this.keyboardLayouts.password.push(this.createCharacterSet(this.toSpecial, TVInputFieldComponent_1.SETS.numbers, TVInputFieldComponent_1.SETS.upperUmlauts, TVInputFieldComponent_1.SETS.lowerUmlauts, this.execSpace, this.execBackspace));
            this.keyboardLayouts.password.push(this.createCharacterSet(this.toUpperCase, TVInputFieldComponent_1.SETS.specialfull, this.execSpace, this.execBackspace));
        };
        TVInputFieldComponent.prototype.executeKey = function () {
            var _this = this;
            var index = this.state.selectedCharacterIndex;
            if (index == undefined) {
                return;
            }
            this.numberCounter = 0;
            var character = this.state.currentCharacterSet[index];
            if (!character) {
                return;
            }
            if (character.exec) {
                this.timeOutPromiseExecKey = setTimeout(function () {
                    if (character.exec)
                        character.exec.call(_this);
                }, this.options.keyBoardExecTimeout);
            }
            else {
                if (!this.sendCharacter(character.label, this.props.autoCase)) {
                    return;
                }
            }
            if (this.props.maxlength != undefined && this.getValue().length >= this.props.maxlength && character == this.execSpace) {
                return;
            }
            this.flashCharacterByIndex(index);
        };
        TVInputFieldComponent.prototype.flashCharacterByIndex = function (index) {
            if (this.state.currentCharacterSet == undefined) {
                throw new Error("Select a character list first!");
            }
            this.setState({ flash: true });
        };
        TVInputFieldComponent.prototype.flashCharacter = function (character) {
            var index = this.getCharacterIndexByLetter(this.state.currentCharacterSet, character);
            this.flashCharacterByIndex(index);
        };
        TVInputFieldComponent.prototype.executeSendBlank = function () {
            return this.sendCharacter(" ");
        };
        TVInputFieldComponent.prototype.executeBackspace = function () {
            if (this.cursorPosition === 0) {
                return false;
            }
            this.indicateMaxlength = true;
            this.setState(function (prevState) { return ({
                leftCharacters: prevState.leftCharacters.slice(0, -1)
            }); });
            this.updateStars();
            this.cursorPosition--;
            this.modifyBoundValue();
            return true;
        };
        TVInputFieldComponent.prototype.sendCharacter = function (character, autoCase, autoKeyboard) {
            if (autoCase === void 0) { autoCase = false; }
            if (autoKeyboard === void 0) { autoKeyboard = false; }
            if (this.props.maxlength != undefined && this.getValue().length >= this.props.maxlength) {
                if (!(autoKeyboard && this.getValue().length == this.props.maxlength)) {
                    if (this.props.onMaxLength && this.indicateMaxlength) {
                        this.indicateMaxlength = false;
                        this.props.onMaxLength();
                    }
                    return false;
                }
            }
            var index = this.getCharacterIndexByLetter(this.state.currentCharacterSet, character);
            if (index === -1) {
                if (!autoKeyboard) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Unsupported character (A) '" + character + "'!", TVInputFieldComponent_1.ID)); });
                    return false;
                }
                if (!this.autoSelectKeyboard(character)) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Unsupported character (B) '" + character + "'!", TVInputFieldComponent_1.ID)); });
                    return false;
                }
                index = this.getCharacterIndexByLetter(this.state.currentCharacterSet, character);
            }
            if (autoCase) {
                var leftString = this.state.leftCharacters;
                if (leftString.length === 0 || leftString[leftString.length - 1] === "\u00A0"
                    || leftString[leftString.length - 1] === " "
                    || (this.numberCounter > 0 && leftString[leftString.length - 1] === " ")
                    || (this.numberCounter > 0 && leftString[leftString.length - 1] === "\u00A0")) {
                    if (character !== "ß") {
                        character = character.toUpperCase();
                    }
                }
                else {
                    character = character.toLowerCase();
                }
            }
            var newState = this.selectCharacter(this.state, this.state.currentCharacterSet[index]);
            this.setState(newState);
            this.appendCharacter(character);
            return true;
        };
        TVInputFieldComponent.prototype.sendNumber = function (no) {
            if (!this.supportT9Input) {
                var character = no.toString();
                var retval = this.sendCharacter(character, false, true);
                this.flashCharacter(character);
                return retval;
            }
            var lastTime = this.lastT9Input;
            var now = new Date().getTime();
            var isNew = no !== this.lastNumber || (now - this.options.keyboardT9Timeout) > lastTime;
            if (this.props.maxlength != undefined && this.getValue().length >= this.props.maxlength) {
                if (isNew) {
                    if (this.props.onMaxLength && this.indicateMaxlength) {
                        this.indicateMaxlength = false;
                        this.props.onMaxLength();
                    }
                    return false;
                }
            }
            if (isNew) {
                this.numberCounter = 0;
            }
            else {
                this.numberCounter++;
            }
            this.lastT9Input = now;
            this.lastNumber = no;
            var characterSet = TVInputFieldComponent_1.T9KEYMAP[no];
            var characterLength = characterSet.length;
            var isValid = false;
            var tryCounter = 0;
            var t9Char;
            do {
                t9Char = characterSet[this.numberCounter % characterLength];
                if (this.findKeyboardForCharacter(t9Char.toLowerCase()) != undefined) {
                    isValid = true;
                }
                else if (this.findKeyboardForCharacter(t9Char.toUpperCase()) != undefined) {
                    isValid = true;
                }
                else {
                    this.numberCounter++;
                }
            } while (!isValid && (tryCounter++) < characterLength);
            if (!isValid) {
                return false;
            }
            if (!isNew) {
                this.executeBackspace();
            }
            return this.sendCharacter(t9Char, true, true);
        };
        TVInputFieldComponent.prototype.appendCharacter = function (character) {
            var _this = this;
            if (character === " ") {
                character = "\u00A0";
            }
            this.setState(function (prevState) { return ({
                leftCharacters: prevState.leftCharacters + character,
                passwordLeftCharacters: prevState.passwordLeftCharacters + character
            }); });
            this.cursorPosition = this.cursorPosition + character.length;
            setTimeout(function () {
                _this.updateStars();
            }, 1000);
            this.modifyBoundValue();
        };
        TVInputFieldComponent.prototype.updateStars = function () {
            if (this.stars) {
                this.setState(function (prevState) { return ({
                    passwordLeftCharacters: Array(prevState.leftCharacters.length + 1).join("•"),
                    passwordRightCharacters: Array(prevState.rightCharacters.length + 1).join("•")
                }); });
            }
        };
        TVInputFieldComponent.prototype.navigateLeft = function () {
            if (this.state.isKeyboardFocussed) {
                var oldIndex = this.state.selectedCharacterIndex;
                if (oldIndex == undefined) {
                    return;
                }
                this.selectCharacterByIndex(oldIndex - 1);
            }
            else if (this.state.leftCharacters.length > 0) {
                this.cursorPosition--;
                var moveBy_1 = -1;
                this.setState(function (prevState) { return ({
                    rightCharacters: prevState.leftCharacters.slice(moveBy_1) + prevState.rightCharacters,
                    leftCharacters: prevState.leftCharacters.slice(0, moveBy_1)
                }); });
                this.updateStars();
            }
        };
        TVInputFieldComponent.prototype.navigateRight = function () {
            if (this.state.isKeyboardFocussed) {
                var oldIndex = this.state.selectedCharacterIndex;
                if (oldIndex == undefined) {
                    return;
                }
                this.selectCharacterByIndex(oldIndex + 1);
            }
            else if (this.state.rightCharacters[0] != undefined) {
                this.cursorPosition++;
                var moveBy_2 = 1;
                this.setState(function (prevState) { return ({
                    leftCharacters: prevState.leftCharacters + prevState.rightCharacters.slice(0, moveBy_2),
                    rightCharacters: prevState.rightCharacters.slice(moveBy_2)
                }); });
                this.updateStars();
            }
        };
        TVInputFieldComponent.prototype.focusField = function () {
            if (this.state.isKeyboardFocussed === false) {
                return false;
            }
            this.setState({
                isInputFocussed: true,
                isKeyboardFocussed: false
            });
            return true;
        };
        TVInputFieldComponent.prototype.focusKeyboard = function () {
            if (this.state.isKeyboardFocussed === true) {
                return false;
            }
            this.setState({
                isInputFocussed: false,
                isKeyboardFocussed: true
            });
            return true;
        };
        TVInputFieldComponent.prototype.onKey = function (args) {
            var _this = this;
            switch (args.virtualKey) {
                case public_3.TVKeyCodeConfig.DOWN_KEY:
                    return this.focusKeyboard();
                case public_3.TVKeyCodeConfig.UP_KEY:
                    return this.focusField();
                case public_3.TVKeyCodeConfig.LEFT_KEY:
                    this.navigateLeft();
                    return true;
                case public_3.TVKeyCodeConfig.RIGHT_KEY:
                    this.navigateRight();
                    return true;
                case public_3.TVKeyCodeConfig.OK_KEY:
                    if (this.state.isKeyboardFocussed) {
                        this.executeKey();
                    }
                    return true;
                case public_3.TVKeyCodeConfig.DELETE_KEY:
                    return this.executeBackspace();
                case public_3.TVKeyCodeConfig.ZERO_KEY:
                    return this.sendNumber("0");
                case public_3.TVKeyCodeConfig.ONE_KEY:
                    return this.sendNumber("1");
                case public_3.TVKeyCodeConfig.TWO_KEY:
                    return this.sendNumber("2");
                case public_3.TVKeyCodeConfig.THREE_KEY:
                    return this.sendNumber("3");
                case public_3.TVKeyCodeConfig.FOUR_KEY:
                    return this.sendNumber("4");
                case public_3.TVKeyCodeConfig.FIVE_KEY:
                    return this.sendNumber("5");
                case public_3.TVKeyCodeConfig.SIX_KEY:
                    return this.sendNumber("6");
                case public_3.TVKeyCodeConfig.SEVEN_KEY:
                    return this.sendNumber("7");
                case public_3.TVKeyCodeConfig.EIGHT_KEY:
                    return this.sendNumber("8");
                case public_3.TVKeyCodeConfig.NINE_KEY:
                    return this.sendNumber("9");
                case public_3.TVKeyCodeConfig.COMPANION_KEY:
                    setTimeout(function () {
                        if (public_2.Guard.isString(args.char))
                            _this.sendCharacter(args.char, true, true);
                    });
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("onKey - COMPANION_KEY: " + JSON.stringify(args), TVInputFieldComponent_1.ID)); });
                    return false;
                default:
                    return false;
            }
        };
        TVInputFieldComponent.prototype.componentDidUpdate = function (prevProps) {
            var currentCharacterSetIndex = this.setCharacterSetIndex(this.props.layout);
            this.selectedLayout = this.keyboardLayouts[this.props.layout];
            if (this.props.reset !== prevProps.reset) {
                if (this.props.inputtext != undefined) {
                    this.setNewValue(this.props.inputtext);
                }
                this.activateCharacterSet(0);
                this.selectFirstCharacter();
            }
            if (this.props.layout !== prevProps.layout) {
                this.setState({
                    currentCharacterSetIndex: currentCharacterSetIndex,
                    currentCharacterSet: this.selectedLayout[currentCharacterSetIndex]
                });
                this.selectFirstCharacter();
            }
        };
        TVInputFieldComponent.prototype.componentDidMount = function () {
            this.selectFirstCharacter();
            if (this.props.inputtext != undefined) {
                this.setNewValue(this.props.inputtext);
            }
        };
        TVInputFieldComponent.prototype.renderCharacter = function (item, index) {
            var content = typeof item === "object" ? item.label || "&#160;" : item || "&#160;";
            var className = (index == this.state.selectedCharacterIndex ? "selected " : "")
                + (item.class ? item.class : item.exec ? "special" : "");
            return React.createElement("span", { key: index, className: className, dangerouslySetInnerHTML: { __html: content } });
        };
        TVInputFieldComponent.prototype.render = function () {
            var _this = this;
            var _a;
            return React.createElement(public_4.NavigationElement, { className: this.ID, id: "inputfield", onFocusIn: function () { return _this.setFocus(true); }, onFocusOut: function () { return _this.setFocus(false); } },
                React.createElement(public_4.NavigationKey, { keyFilter: "*", onKey: function (key) { return _this.onKey(key); } }),
                React.createElement("div", { className: "input-field" + (this.state.isInputFocussed ? " focused" : ""), "data-type": this.props.type },
                    this.state.leftCharacters == "" && this.state.rightCharacters == "" &&
                        React.createElement("div", { className: "placeholder" }, this.props.placeholderText),
                    this.stars ? this.state.passwordLeftCharacters : this.state.leftCharacters,
                    React.createElement("div", { className: "interactive-cursor" }),
                    this.stars ? this.state.passwordRightCharacters : this.state.rightCharacters),
                React.createElement("div", { className: "character-selector" + (this.state.isKeyboardFocussed ? " focused" : "") },
                    React.createElement(react_transition_group_1.CSSTransition, { timeout: 100, classNames: public_5.Css.globalStyleClasses.presserTransition, in: this.state.flash, onEntered: function () { return _this.setState({ flash: false }); } },
                        React.createElement("div", { className: "character-list" }, (_a = this.state.currentCharacterSet) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return _this.renderCharacter(item, index); })))));
        };
        var TVInputFieldComponent_1;
        TVInputFieldComponent.SETS = {
            upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
            lower: "abcdefghijklmnopqrstuvwxyz".split(""),
            numbers: "1234567890".split(""),
            special: "ß&?-:,.'@_".split(""),
            specialfull: "!?.:,;§$%&/()=+*€#-_<>@".split(""),
            email: "abcdefghijklmnopqrstuvwxyz.@-_".split(""),
            upperUmlauts: "ÄÖÜ".split(""),
            lowerUmlauts: "äöü".split("")
        };
        TVInputFieldComponent.T9KEYMAP = [
            [" ", "0"],
            ["1", "@"],
            ["A", "B", "C", "2", "Ä"],
            ["D", "E", "F", "3"],
            ["G", "H", "I", "4"],
            ["J", "K", "L", "5"],
            ["M", "N", "O", "6", "Ö"],
            ["P", "Q", "R", "S", "7", "ß"],
            ["T", "U", "V", "8", "Ü"],
            ["W", "X", "Y", "Z", "9"]
        ];
        TVInputFieldComponent = TVInputFieldComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "inputfield-component",
                styles: [
                    public_5.selector("&")
                        .props({
                        position: "absolute",
                        display: "flex",
                        WebkitBoxOrient: "vertical",
                        WebkitBoxDirection: "normal",
                        flexDirection: "column",
                        top: 156,
                        left: 150
                    })
                        .sub(public_5.selector(".input-field")
                        .props({
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        minWidth: 1652,
                        color: public_5.Css.colors.A_CO_1,
                        backgroundColor: "transparent",
                        borderBottom: public_5.Css.scale(3) + "px solid " + public_5.Css.colors.A_CO_6
                    })
                        .extend(public_5.Css.fonts2.a_fo_h6_mixin)
                        .props({
                        lineHeight: 72,
                        height: 72,
                        paddingLeft: 59,
                        paddingRight: 48
                    }))
                        .sub(public_5.selector(".placeholder")
                        .props({
                        position: "absolute",
                        display: "inline",
                        color: public_5.Css.colors.A_CO_6
                    }))
                        .sub(public_5.selector(".interactive-cursor")
                        .props({
                        position: "absolute",
                        width: 2,
                        display: "inline-block",
                        verticalAlign: "bottom",
                        background: public_5.Css.colors.A_CO_6,
                        marginTop: 12,
                        height: 48,
                        animation: public_5.Css.globalStyleClasses.blinkTransition + " 800ms linear infinite"
                    }))
                        .sub(public_5.selector(".input-field.focused")
                        .props({
                        background: public_5.Css.colors.global_focus_background,
                        borderColor: "transparent",
                        borderRadius: 4
                    }))
                        .sub(public_5.selector(".focused .interactive-cursor")
                        .props({
                        background: public_5.Css.colors.A_CO_1
                    }))
                        .sub(public_5.selector(".character-selector")
                        .props({
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        padding: public_5.Css.scale(24) + "px " + public_5.Css.scale(48) + "px"
                    }))
                        .sub(public_5.selector(".character-list")
                        .props({
                        marginLeft: -5
                    }))
                        .sub(public_5.selector(".character-list > span")
                        .props({
                        textAlign: "center",
                        display: "inline-block",
                        color: public_5.Css.colors.A_CO_1,
                        minWidth: 46,
                        padding: public_5.Css.scale(8) + "px " + public_5.Css.scale(12) + "px " + public_5.Css.scale(8) + "px " + public_5.Css.scale(14) + "px"
                    })
                        .extend(public_5.Css.fonts2.font_b2_2)
                        .props({
                        color: public_5.Css.colors.A_CO_1,
                        marginLeft: 2,
                        marginRight: 2,
                        borderRadius: public_5.Css.dimensions.borderRadius
                    }))
                        .sub(public_5.selector(".focused .character-list > .selected")
                        .props({
                        background: public_5.Css.colors.global_focus_background,
                        transform: "scale(1.5)"
                    }))
                        .sub(public_5.selector(".character-list > span.uppers")
                        .props({
                        marginRight: 10
                    }))
                        .sub(public_5.selector(".character-list > span.lowers")
                        .props({
                        marginRight: 10
                    }))
                        .sub(public_5.selector(".character-list > span.numbers")
                        .props({
                        marginRight: 10
                    }))
                        .sub(public_5.selector(".character-list > span.symbols")
                        .props({
                        marginRight: 12
                    }))
                        .sub(public_5.selector(".character-list > span.backspace")
                        .props({
                        marginLeft: 16,
                        minWidth: 56,
                        position: "relative"
                    }))
                        .sub(public_5.selector(".character-list > span.backspace::after")
                        .extend(public_5.Css.sprites.A_IC_023_36x36_mixin)
                        .props({
                        top: 6,
                        left: 9,
                        content: "''",
                        display: "inline-block",
                        position: "absolute"
                    }))
                        .sub(public_5.selector(".character-list > span.space")
                        .props({
                        marginLeft: 8,
                        minWidth: 56,
                        position: "relative"
                    }))
                        .sub(public_5.selector(".character-list > span.space::after")
                        .extend(public_5.Css.sprites.A_IC_125_36x12_mixin)
                        .props({
                        top: 22,
                        left: 10,
                        content: "''",
                        display: "inline-block",
                        position: "absolute"
                    }))
                        .sub(public_5.selector(".input-field[data-type=search]::before")
                        .props({
                        content: "''"
                    })
                        .extend(public_5.Css.sprites.A_IC_001_36x36_mixin)
                        .props({
                        display: "inline-block",
                        position: "absolute",
                        top: 18,
                        left: 0
                    }))
                        .sub(public_5.selector(".focused .character-list.presser-enter > .selected")
                        .props({
                        animation: public_5.Css.globalStyleClasses.presserTransition + " 100ms linear"
                    }))
                ]
            })
        ], TVInputFieldComponent);
        return TVInputFieldComponent;
    }(public_1.ReactBaseComponent));
    exports.TVInputFieldComponent = TVInputFieldComponent;
});
//# sourceMappingURL=inputfield.component.js.map