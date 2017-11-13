import { Response } from '@angular/http';
import { Observable } from 'rxjs';

export class ErrorMsg {
    static handleError(error: Response | any) {
        let errorMsg: string;
        if(error instanceof Response){
            errorMsg = `Erro ${error.status} ao acessar a url ${error.url} - ${error.statusText}.`;
        }else {
            errorMsg = error.toString();
        }
        console.log(errorMsg);
        return Observable.throw(errorMsg);
    }
}