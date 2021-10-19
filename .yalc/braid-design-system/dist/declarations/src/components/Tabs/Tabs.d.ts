import type { ResponsiveSpace } from '../../css/atoms/atoms';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { TabListContextValues } from './TabListContext';
export interface TabsProps {
    children: ReactNodeNoStrings;
    label: string;
    align?: 'left' | 'center';
    gutter?: ResponsiveSpace;
    reserveHitArea?: boolean;
    data?: DataAttributeMap;
    divider?: TabListContextValues['divider'];
}
export declare const Tabs: (props: TabsProps) => JSX.Element;
