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
var Refresh = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M16 5.333c-5.867 0-10.667 4.8-10.667 10.667S10.133 26.667 16 26.667c4.933 0 9.067-3.467 10.667-8H24C22.4 21.734 19.467 24 16 24c-4.4 0-8-3.6-8-8s3.6-8 8-8c2.267 0 4.133.933 5.333 2.667l-4 4h9.333V5.334l-2.667 2.667c-2.4-1.333-5.067-2.667-8-2.667z" }))); };
exports.default = react_1.default.memo(Refresh);
//# sourceMappingURL=Refresh.js.map