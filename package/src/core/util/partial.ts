export type Partial<T> = {
    [P in keyof T]?: T[P];
    }
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
    }
