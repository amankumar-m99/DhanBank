export class AccountAdd{
    constructor(
        public accountHolderName:string,
        public openingBalance:number,
        public isCardRequested:boolean
    ){}
}