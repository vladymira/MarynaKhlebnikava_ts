import { ValidatorResult } from "./ValidatorResult";

export interface ValidatorFunction<Value> {
    //   (value: unknown): null| {[validatorName: string] : true}

    (value: Value): null | ValidatorResult
}

export const nonEmptyArray: ValidatorFunction<unknown[]> = (value) => {
    return value.length ? null : { nonEmptyArray: true };
}


export const requiredText: ValidatorFunction<string> = (value) => {
    return value.trim().length ? null : { requiredText: true };
}