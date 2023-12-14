import { WithId } from "../models/WithId";
import { AbstractStorage } from "./AbstractStorage";
import { Migration } from "./Migration";

export class DbStorage<Value extends { id: Id; }, Id extends string | number>  extends AbstractStorage<Value, Id, IDBDatabase>{

    readonly #dbName: string;
    readonly #storeName: string;
    readonly #migrations: Migration[];

    constructor(dbName: string, storeName: string, migrations: Migration[]){
       super();
       this.#dbName = dbName;
       this.#storeName = storeName;
       this.#migrations = migrations;

    }

    init(): Promise<IDBDatabase> {
        return super.init()
        .then(
            ()=> {
                return new Promise<IDBDatabase>((resolve, reject) => {
                   const request =  indexedDB.open(this.#dbName, this.#migrations.length);

                   request.onerror = ()=>reject(request.error);
                   request.onsuccess = ()=>reject(request.result);

                   
                })
                }
        );
    }

    get(id: Id): Promise<Value | null> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<Value[]> {
        throw new Error("Method not implemented.");
    }
    write(data: Omit<Value, "id"> & { id?: any; }, id?: any): Promise<Id> {
        throw new Error("Method not implemented.");
    }
    delete(id: Id): Promise<void> {
        throw new Error("Method not implemented.");
    }    

}