export class FundTransferByNumber{
    constructor(
        public senderAccountNumber:string,
        public receiverAccountNumber:string,
        public amount:string
    ){}
}