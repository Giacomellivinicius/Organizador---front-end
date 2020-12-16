import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { ContaDTO } from "../../models/contas.dto";

@Injectable()
export class ContaService{

    constructor(public http: HttpClient){

    }

    findByEmpresa(empresa_id : string) {
        return this.http.get(`${API_CONFIG.baseUrl}/empresas/${empresa_id}`);
    }

    insert(obj : ContaDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/contas`,
            obj,
            {
                observe: 'response',
                responseType : 'text'
            }
        );
    }

}