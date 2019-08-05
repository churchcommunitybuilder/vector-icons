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
var MoreVertical = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M16 10.667c1.467 0 2.667-1.2 2.667-2.667S17.467 5.333 16 5.333c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667zm0 2.666c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667c1.467 0 2.667-1.2 2.667-2.667s-1.2-2.667-2.667-2.667zm0 8c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667c1.467 0 2.667-1.2 2.667-2.667s-1.2-2.667-2.667-2.667z" }))); };
exports.default = react_1.default.memo(MoreVertical);
//# sourceMappingURL=MoreVertical.js.map