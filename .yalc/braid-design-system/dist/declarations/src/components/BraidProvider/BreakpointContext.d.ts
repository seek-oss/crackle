import React, { ReactNode } from 'react';
export declare const breakpointContext: React.Context<"mobile" | "tablet" | "desktop" | "wide" | null>;
interface BreakpointProviderProps {
    children: ReactNode;
}
export declare function BreakpointProvider({ children }: BreakpointProviderProps): JSX.Element;
export {};
