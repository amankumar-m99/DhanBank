import { Account } from "../models/account/account";
import { Card } from "../models/card/card";

export class StaticData{
    public static assetsDirPath="../../assets/";
    public static scannedCardNumber="";
    public static card:Card;
    public static account:Account;
    public static info:string;
}