import { Account } from "./account";

export class Card{
    constructor(
        public cardNumber:string,
        public pin:string,
        public account:Account
    ){}
}