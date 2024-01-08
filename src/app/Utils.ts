import { FormGroup } from "@angular/forms";

export class Utils {
  public static isStringEmpty(value: string): boolean {
    if (value == null || value.trim().length == 0) {
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

  public static markAllFieldAsTouched(formGroup: FormGroup):void{
    Object.keys(formGroup.controls).forEach((key: string)=>{
      const abstractControl = formGroup.get(key);
      // const abstractControl:AbstractControl<any, any> = formGroup.get(key);
      if (abstractControl instanceof FormGroup) {
        Utils.markAllFieldAsTouched(abstractControl);
      } else {
        abstractControl?.markAsTouched();
      }
    });
  }

}
