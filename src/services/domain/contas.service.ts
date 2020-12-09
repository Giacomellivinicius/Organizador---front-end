import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { ContaDTO } from "../../models/contas.dto";

@Injectable()
export class ContaService{

    constructor(public http: HttpClient){

    }

    findAll() : Observable<ContaDTO[]> {
        return this.http.get<ContaDTO[]>(`${API_CONFIG.baseUrl}/contas`);
    }

    

}