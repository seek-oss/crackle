import type { DividerProps } from '../Divider/Divider';
import type { Space } from '../../css/atoms/atoms';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { RequiredResponsiveValue } from '../../css/atoms/sprinkles.css';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export interface TilesProps {
    children: ReactNodeNoStrings;
    space: RequiredResponsiveValue<Space>;
    columns: RequiredResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>;
    dividers?: boolean | DividerProps['weight'];
    data?: DataAttributeMap;
}
export declare const Tiles: ({ children, space, columns, dividers, data, }: TilesProps) => JSX.Element;
