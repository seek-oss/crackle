import type { DeepPartial } from 'utility-types';
import type { BraidTokens } from '../tokenType';
interface MakeTokensOptions {
    name: string;
    displayName: string;
    brand: string;
    brandAccent: string;
    brandAccentActive: string;
    brandAccentHover: string;
    brandAccentSoft: string;
    brandAccentSoftActive: string;
    brandAccentSoftHover: string;
    tokenOverrides?: DeepPartial<BraidTokens>;
}
export declare const makeTokens: ({ name, displayName, brand, brandAccent, brandAccentActive, brandAccentHover, brandAccentSoft, brandAccentSoftActive, brandAccentSoftHover, tokenOverrides, }: MakeTokensOptions) => BraidTokens;
export {};
