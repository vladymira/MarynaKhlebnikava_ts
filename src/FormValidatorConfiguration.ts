import { ValidatorFunction } from "./ValidatorFunction";

// field - значит, что свойство с любым именем, заранее неизвестным
export type FormValidatorConfiguration<T extends object> = {
    [Property in keyof T]?: ValidatorFunction<T[Property]>[]
}