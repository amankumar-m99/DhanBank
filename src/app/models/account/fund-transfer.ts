export class FundTransferForm{
    constructor(
        public senderAccountNumber:string,
        public receiverAccountNumber:string,
        public amount:string
    ){}
}