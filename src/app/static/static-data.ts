import { Account } from "../models/account/account";
import { AccountDepositByNumber } from "../models/account/deposit/account-deposit-by-number";
import { FundTransferByNumber } from "../models/account/transfer/fund-transfer-by-number";
import { AccountWithdrawByNumber } from "../models/account/withdraw/account-withdraw-by-number";
import { Card } from "../models/card/card";

export class StaticData{
    public static assetsDirPath="../../assets/";
    public static baseURL="http://192.168.1.4:8080";
    public static scannedCardNumber="";
    public static card:Card;
    public static account:Account;
    public static info:string;
    public static accountWithdraw:AccountWithdrawByNumber;
    public static accountDeposit:AccountDepositByNumber;
    public static fundTransferForm:FundTransferByNumber;
    public static validityPeriodOptions:number[] = [1,2,5,8,10];
}