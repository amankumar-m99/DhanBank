import { Account } from "../account/account";

export class Card{
    constructor(
        public account:Account,
        public id:number=0,
        public cardNumber:string="N/A",
        public pin:string="N/A",
        public cvv:string="N/A",
        public expiryMonth:number=0,
        public expiryYear:number=0,
        public inValidAttempts:number=3,
        public isBlocked:boolean=true,
        public isActive:boolean=false,
        public isDeleted:boolean=true
    ){}
}