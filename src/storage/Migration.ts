export interface Migration {
    (transaction: IDBTransaction): void | Promise<void>;
}

// пример создания пустого массива
export type Migrations = [Migration, ...Migration[]];
