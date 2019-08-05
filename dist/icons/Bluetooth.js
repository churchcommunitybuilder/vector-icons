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
var Bluetooth = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M9.333 0H12a9.333 9.333 0 019.333 9.333v8A9.333 9.333 0 0112 26.666H9.333A9.333 9.333 0 010 17.333v-8A9.333 9.333 0 019.333 0zm6.751 17.522l-4.34-4.219 4.343-4.267a.666.666 0 00.043-.904l-4.952-5.894c-.4-.476-1.177-.193-1.177.429v8.941L5.799 7.523a.667.667 0 10-.93.956l4.968 4.83-4.97 4.883a.667.667 0 10.935.951l4.199-4.126v8.984c0 .625.783.906 1.181.424l4.952-6a.666.666 0 00-.049-.902zm-4.751 4.623v-7.382l3.38 3.286-3.38 4.095zm3.379-13.628l-3.379 3.32v-7.34l3.379 4.021z" }))); };
exports.default = react_1.default.memo(Bluetooth);
//# sourceMappingURL=Bluetooth.js.map