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
var ScanBarcode = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M14 8c.368 0 .667.298.667.667v14.667a.667.667 0 11-1.334 0V8.667c0-.368.298-.667.667-.667zm12 0c.368 0 .667.298.667.667v14.667a.667.667 0 11-1.334 0V8.667c0-.368.298-.667.667-.667zM11.333 8c.368 0 .667.298.667.667v14.667a.667.667 0 11-1.334 0V8.667c0-.368.298-.667.667-.667zm12 0c.368 0 .667.298.667.667v14.667a.667.667 0 11-1.334 0V8.667c0-.368.298-.667.667-.667zM6.667 8C7.403 8 8 8.597 8 9.333v13.333a1.333 1.333 0 01-2.666 0V9.333C5.334 8.597 5.931 8 6.667 8zm12 0C19.403 8 20 8.597 20 9.333v13.333a1.333 1.333 0 01-2.666 0V9.333c0-.736.597-1.333 1.333-1.333zM3.333 26H8a.667.667 0 110 1.334H2.667A.667.667 0 012 26.667v-5.333a.667.667 0 111.334 0v4.667zm25.334 0v-4.667a.667.667 0 111.334 0v5.333a.667.667 0 01-.667.667h-5.333a.667.667 0 110-1.334h4.667zM3.333 6v4.667a.667.667 0 11-1.334 0V5.334c0-.368.298-.667.667-.667h5.333a.667.667 0 110 1.334H3.332zm25.334 0H24a.667.667 0 110-1.334h5.333c.368 0 .667.298.667.667v5.333a.667.667 0 11-1.334 0V5.999z" }))); };
exports.default = react_1.default.memo(ScanBarcode);
//# sourceMappingURL=ScanBarcode.js.map