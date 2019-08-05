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
var Home = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M26.669 10.669l2.687 1.699a.668.668 0 11-.71 1.129l.003.002-1.977-1.237-.003-.623v13.695c0 .736-.597 1.333-1.333 1.333H6.669a1.341 1.341 0 01-1.333-1.336V10.667L16.003 4l10.667 6.669zm-6.666 14.664h5.333V11.466l-9.333-5.867-9.333 5.867v13.867h5.333V20c.008-2.684 2.527-4 4-4s3.993 1.335 4 4v5.333zm-6.667 1.334h5.333V20c.021-1.992-1.931-2.667-2.667-2.667s-2.615.68-2.667 2.667v6.667zm-8-16l-.007 1.596-1.976 1.236a.667.667 0 01-.709-1.13l.003-.002 2.689-1.701z" }))); };
exports.default = react_1.default.memo(Home);
//# sourceMappingURL=Home.js.map