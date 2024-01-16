import { ATMCardDetails } from "../../card/atm-card-details";

export class AccountAdd{
    constructor(
        public accountHolderName:string,
        public openingBalance:number,
        public isCardRequested:boolean=false,
        public atmCardDetails:ATMCardDetails
    ){}
}