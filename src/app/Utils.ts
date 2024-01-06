export class Utils {
  public static isStringEmpty(value: string): boolean {
    if (value == null || value.length == 0) {
      return true;
    }
    return false;
  }

  public static isStringNumeric(value: string): boolean {
    return /^\d+$/.test(value);
  }

  public static getNumericValue(value:string):number{
    if(Utils.isStringNumeric(value)){
      return parseInt(value);
    }
    return 0;
  }

  
}
