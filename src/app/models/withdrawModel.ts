import { Account } from "./account/account";

export class WithdrawModel{
    constructor(
        public account:Account,
        public amount:number)
    {}
}