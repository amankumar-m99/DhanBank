import { Account } from "./account";

export class Card{
    constructor(
        public id:number,
        public cardNumber:string,
        public pin:string,
        public cvv:string,
        public expiryMonth:number,
        public expiryYear:number,
        public inValidAttempts:number,
        public isBlocked:boolean,
        public isActive:boolean,
        public isDeleted:boolean,
        public account:Account
    ){}
}