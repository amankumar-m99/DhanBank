import { Account } from "../models/account/account";
import { AccountDeposit } from "../models/account/accountDeposit";
import { AccountWithdraw } from "../models/account/accountWithdraw";
import { Card } from "../models/card/card";

export class StaticData{
    public static assetsDirPath="../../assets/";
    public static baseURL="http://localhost:8080";
    public static scannedCardNumber="";
    public static card:Card;
    public static account:Account;
    public static info:string;
    public static accountWithdraw:AccountWithdraw;
    public static accountDeposit:AccountDeposit;
}