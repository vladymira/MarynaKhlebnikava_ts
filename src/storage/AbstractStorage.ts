// <Value, Id> - эти типы будут исп-ся в классе
// Id extends number | string - extends в generic ограничивает спектр принимаемых значений 
// abstract методы обязательны к реализации в классах-наследниках

import { Migration } from "./Migration";

// readonly действует только в ts
export abstract class AbstractStorage<Value extends { id: Id }, Id extends number | string, Init = void> {
    readonly #ready: Promise<Init>;
   
    //dbName: string, storeName: string, migrations: Migration[]
    constructor() {
        this.#ready = this.init();       
    }

    get ready(): Promise<Init> {
        return this.#ready
    }

    init(): Promise<Init> {
        return Promise.resolve() as Promise<Init>;
    }

    abstract get(id: Id): Promise<Value | null>;

    abstract getAll(): Promise<Value[]>;

    // Omit вырезает id
    //  &  добавляет { id?: Id }
    // т.е. этими двумя командами мы помечаем св-во Value как опциональное
    abstract write(data: Omit<Value, 'id'> & { id?: Id }, id?: Id): Promise<Id>;

    abstract delete(id: Id): Promise<void>;



}