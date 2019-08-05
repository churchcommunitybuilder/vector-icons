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
var People = function (props) { return (react_1.default.createElement(react_native_svg_1.default, __assign({}, props, { viewBox: "0 0 32 32" }),
    react_1.default.createElement(react_native_svg_1.Path, { d: "M16.69 14.378c-.118.692-.447 1.532-.818 2.032 0 0-.272.39-.811 1.057l.006.8 5.058 2.475c.667.327 1.208 1.182 1.208 1.937v2.642c0 .743-.6 1.346-1.342 1.346H4.009a1.337 1.337 0 01-1.342-1.346v-2.642c0-.743.534-1.607 1.208-1.937l5.058-2.475.005-.8a21.822 21.822 0 01-.811-1.057c-.369-.5-.699-1.337-.818-2.032-.386-.351-.643-.986-.643-1.712 0-.602.177-1.142.458-1.509l-.058-1.158C7.199 7.066 8.933 5.332 12 5.332c3.111 0 4.8 1.733 4.933 4.667l-.058 1.158c.281.367.458.907.458 1.509 0 .726-.258 1.361-.643 1.712zm5.615 12.289c.228-.392.359-.847.361-1.333l5.333-.001v-2.269a.952.952 0 00-.643-.865l-5.171-1.601a.881.881 0 01-.597-.861l.098-1.41a.735.735 0 01.703-.664s1.743.069 3.209-.465c-1.333-3.6-1.267-6.533-1.267-6.533s-.467-4-4.333-4c-.982 0-1.745.258-2.337.643a5.564 5.564 0 00-.673-1.142c.29-.184.618-.337.975-.455a5.435 5.435 0 013.899-.034c.76.223 1.401.617 1.88 1.165 1.22 1.136 1.919 2.763 1.919 4.465.172 2.125.777 5.373 1.583 5.831a.43.43 0 01.059.709c-.055.045-1.307 1.085-4.307 1.152l-.067.467 5.12 1.493c.712.208 1.28.976 1.28 1.719v2.642c0 .755-.601 1.346-1.342 1.346h-5.686zM4 25.337l16-.003v-2.521c0-.375-.269-.808-.601-.966l-5.666-2.712-.005-2.133c1.738-1.8 1.738-3.27 1.738-3.27s.533-.399.533-1.063c0-.665-.533-1.067-.533-1.067s1.2-4.933-3.467-4.933-3.466 4.933-3.466 4.933-.531.4-.531 1.067c0 .667.531 1.067.531 1.067s-.001 1.467 1.735 3.267c.007.007-.003 2.133-.003 2.133l-5.666 2.712c-.332.159-.598.583-.595.967 0 0 .024 2.524-.005 2.524z" }))); };
exports.default = react_1.default.memo(People);
//# sourceMappingURL=People.js.map