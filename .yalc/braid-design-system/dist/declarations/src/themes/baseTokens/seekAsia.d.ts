import type { BraidTokens } from '../tokenType';
import type { DeepPartial } from 'utility-types';
interface MakeTokensOptions {
    name: string;
    displayName: string;
    bodyBackground: string;
    brand: string;
    brandAccent: string;
    formAccent: string;
    tokenOverrides?: DeepPartial<BraidTokens>;
}
export declare const makeTokens: ({ name, displayName, bodyBackground, brand, brandAccent, formAccent, tokenOverrides, }: MakeTokensOptions) => BraidTokens;
export {};
