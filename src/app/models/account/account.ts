export class Account{
    constructor(
        public id:number=0,
        public accountNumber:string="N/A",
        public accountHolderName:string="N/A",
        public ifscCode:string="N/A",
        public balance:number=0,
        public dateOfOpening:string="N/A",
        public active:boolean=false,
        public deleted:boolean=true,
    ){}
}