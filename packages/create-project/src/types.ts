export type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

export type Status = 'selected' | 'copying' | 'installing' | 'complete';
