var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import * as Icons from './icons';
var Icon = function (_a) {
    var name = _a.name, props = __rest(_a, ["name"]);
    var IconComponent = Icons[name];
    if (!IconComponent) {
        throw Error(name + " is not a valid icon!");
    }
    return <IconComponent {...props}/>;
};
Icon.defaultProps = {
    fill: 'rgba(0, 0, 0, 0.54)',
    viewBox: '0 0 24 24',
    height: 24,
    width: 24,
};
export default React.memo(Icon);
//# sourceMappingURL=Icon.js.map