import * as React from 'react';
import { SvgProps } from 'react-native-svg';
import * as Icons from './icons';
export declare type IconName = keyof typeof Icons;
export interface IconProps extends SvgProps {
    name: IconName;
}
declare const _default: React.NamedExoticComponent<IconProps>;
export default _default;
