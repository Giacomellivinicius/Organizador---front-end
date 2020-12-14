import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class ContaService{

    constructor(public http: HttpClient){

    }

    findByEmpresa(empresa_id : string) {
        return this.http.get(`${API_CONFIG.baseUrl}/empresas/${empresa_id}`);
    }

    

}