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
var Warning = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M19.348 6.394l9.186 15.833c1.855 3.197.367 5.773-3.311 5.773H6.772c-3.671 0-5.161-2.585-3.311-5.773l9.187-15.833c1.855-3.197 4.849-3.188 6.699 0zm-1.154.669c-1.338-2.306-3.053-2.308-4.392 0L4.615 22.896c-1.334 2.298-.488 3.77 2.157 3.77h18.451c2.653 0 3.495-1.465 2.157-3.771L18.194 7.062zm-3.195 4.27a1 1 0 012 0v7.333a1 1 0 01-2 0v-7.333zm1 12.667a1 1 0 110-2 1 1 0 010 2z" }))); };
exports.default = react_1.default.memo(Warning);
//# sourceMappingURL=Warning.js.map