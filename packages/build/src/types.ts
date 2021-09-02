export type ValueType<T> = T extends Promise<infer U> ? U : T;
export type GetArrayType<T> = T extends Array<infer U> ? U : never;
