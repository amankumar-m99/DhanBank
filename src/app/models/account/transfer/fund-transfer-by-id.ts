export class FundTransferById{
    constructor(
        public senderAccountId:number,
        public receiverAccountId:number,
        public amount:string
    ){}
}