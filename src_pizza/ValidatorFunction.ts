import { ValidatorResult } from "./ValidatorResult";

export interface ValidatorFunction<Value> {
    //   (value: unknown): null| {[validatorName: string] : true}

    (value: Value): null | ValidatorResult;
}

