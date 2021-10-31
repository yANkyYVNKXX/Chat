import { valuesLogin } from "./Components/Main/Main";

export function maxLength30(value:string) {
    let error;
    if (value.length > 30) {
      error = 'Максимальная длина поля 30 символов';
    }
    return error;
  }