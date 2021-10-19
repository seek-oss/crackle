import type { SVGProps as ReactSVGProps } from 'react';
import type { AllOrNone } from '../private/AllOrNone';
export declare type OptionalTitle = AllOrNone<{
    title: string;
    titleId: string;
}>;
export declare type SVGProps = ReactSVGProps<SVGSVGElement> & OptionalTitle;
