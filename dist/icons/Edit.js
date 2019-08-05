"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_svg_1 = __importStar(require("react-native-svg"));
var Edit = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M4 23v5h5l14.747-14.747-5-5L4 23zM27.613 9.387c.52-.52.52-1.36 0-1.88l-3.12-3.12c-.52-.52-1.36-.52-1.88 0l-2.44 2.44 5 5 2.44-2.44z" }))); };
exports.default = react_1.default.memo(Edit);
//# sourceMappingURL=Edit.js.map