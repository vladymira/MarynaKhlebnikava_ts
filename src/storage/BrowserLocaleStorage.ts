import { AbstractStorage } from "./AbstractStorage";

export class BrowserLocalStorage<Value extends { id: Id; }, Id extends string | number> extends AbstractStorage<Value, Id>{
    readonly #storageKey: string;
    readonly #idGenerator: () => Id;

    constructor(storageKey: string, idGenerator: () => Id) {
        super();
        this.#storageKey = storageKey;
        this.#idGenerator = idGenerator;
    }

    //можно переписать в терминах async/await (см.ниже)
    get(id: Id): Promise<Value | null> {
        return this.ready.then(() => {
            const data = this.#extractDataFromStorage();

            return data[id] ?? null;
        })
    }


    async getAll(): Promise<Value[]> {
        await this.ready;
        const data = this.#extractDataFromStorage();

        return Object.values(data);
    }

    async write(value: Omit<Value, 'id'> & { id?: Id }, id?: Id): Promise<Id> {
        await this.ready;
        const data = this.#extractDataFromStorage();
        const defineId = value.id ?? id ?? this.#idGenerator();

        this.#saveDataToStorage({

            ...data,
            [defineId]: {
                ...value,
                id: defineId
            }
        })

        return defineId;
    }

    async delete(id: Id): Promise<void> {
        await this.ready;
        const data = this.#extractDataFromStorage();
    }

    #extractDataFromStorage(): Record<Id, Value> {
        const storageKey = localStorage.getItem(this.#storageKey);
        return storageKey ? JSON.parse(storageKey) : {};
    }

    #saveDataToStorage(data: Record<Id, Value>): void {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(this.#storageKey, jsonData)
    }
}