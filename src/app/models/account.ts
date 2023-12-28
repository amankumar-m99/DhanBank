export class Account{
    constructor(
        public id:number,
        public accountNumber:string,
        public accountHolderName:string,
        public ifscCode:string,
        public balance:number,
        public dateOfOpening:string,
        public isActive:boolean,
        public isDeleted:boolean,
    ){}
}