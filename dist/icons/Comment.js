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
var Comment = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M12.238 24.866c1.183.304 2.448.468 3.762.468 6.627 0 12-4.179 12-9.333s-5.373-9.333-12-9.333-12 4.179-12 9.333c0 3.241 2.123 6.096 5.347 7.769.082.224.47 1.497-.414 3.564 2.408-.829 3.159-2.159 3.305-2.468zm.552 1.489c-.808 1.038-2.772 2.552-7.456 2.978 2.808-1.872 2.988-3.744 2.845-4.694-3.34-1.938-5.512-5.086-5.512-8.64 0-5.891 5.97-10.667 13.333-10.667s13.333 4.776 13.333 10.667S23.363 26.666 16 26.666c-1.107 0-2.182-.108-3.21-.311z" }))); };
exports.default = react_1.default.memo(Comment);
//# sourceMappingURL=Comment.js.map