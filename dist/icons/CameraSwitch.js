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
var CameraSwitch = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M24.179 16a8 8 0 00-13.025-6.225S9.34 7.82 9.333 7.82a10.625 10.625 0 016.846-2.487c5.891 0 10.667 4.776 10.667 10.667h5.02l-6.6 6.6-6.6-6.6h5.513zm-16.18 0a8 8 0 0013.026 6.225s1.814 1.955 1.821 1.955A10.625 10.625 0 0116 26.667c-5.891 0-10.661-4.776-10.661-10.667H0l6.6-6.667L13.2 16H8z" }))); };
exports.default = react_1.default.memo(CameraSwitch);
//# sourceMappingURL=CameraSwitch.js.map