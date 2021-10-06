interface CharacterLimitProps {
    characterLimit: number;
    value: string | number | ReadonlyArray<string>;
}
export declare const getCharacterLimitStatus: ({ characterLimit, value, }: CharacterLimitProps) => JSX.Element | null;
export {};
