import {FormGroup} from '@angular/forms';
export function passwordChecker(controlName:string, CompareControlName:string){
    return (formgroup:FormGroup) => {
        const password = formgroup.controls[controlName];
        const confirmpassword = formgroup.controls[CompareControlName];

        if(password.value !== confirmpassword.value){
            confirmpassword.setErrors({mustmatch:true})
        }
        else{
            confirmpassword.setErrors(null);
        }
    }
}