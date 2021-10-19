import type { UseIconProps } from '../../../hooks/useIcon';
export declare type IconThumbProps = UseIconProps & {
    direction?: 'up' | 'down';
};
export declare const IconThumb: ({ direction, ...props }: IconThumbProps) => JSX.Element;
