import { OptionalResponsiveValue } from '../css/atoms/sprinkles.css';
export declare const resolveResponsiveProp: <Keys extends string | number>(value: OptionalResponsiveValue<Keys>, mobileAtoms: Record<Keys, string>, tabletAtoms: Record<Keys, string>, desktopAtoms: Record<Keys, string>, wideAtoms: Record<Keys, string>) => string;
