export class AccountAdd{
    constructor(
        public accountHolderName:string,
        public openingBalance:number,
        public isCardRequested:boolean=false,
        public immediateActive:boolean=true,
        public validityPeriod:number=8
    ){}
}