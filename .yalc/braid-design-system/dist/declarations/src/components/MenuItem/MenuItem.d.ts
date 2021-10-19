import type { ReactNode } from 'react';
import type { UseMenuItemProps } from './useMenuItem';
export interface MenuItemProps extends Pick<UseMenuItemProps, 'tone' | 'onClick' | 'data'> {
    children: ReactNode;
}
export declare const MenuItem: ({ children, onClick, data, tone }: MenuItemProps) => JSX.Element;
