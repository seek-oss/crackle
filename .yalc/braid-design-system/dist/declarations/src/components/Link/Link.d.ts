import type { ClassValue } from 'clsx';
import React from 'react';
import type { LinkComponentProps } from '../BraidProvider/BraidProvider';
export declare type LinkProps = Omit<LinkComponentProps, 'className'> & {
    className?: ClassValue;
};
export declare const Link: React.ForwardRefExoticComponent<Omit<LinkComponentProps, "className"> & {
    className?: ClassValue;
} & React.RefAttributes<HTMLAnchorElement>>;
