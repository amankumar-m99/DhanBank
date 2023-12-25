import { Account } from "./account";

export class Card{
    constructor(
        public cardNumber:string,
        public pin:string,
        public inValidAttempts:string,
        public account:Account
    ){}
}