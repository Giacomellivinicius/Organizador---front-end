import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { EmpresaDTO } from "../../models/empresas.dto";

@Injectable()
export class EmpresaService{

    constructor(public http:HttpClient){

    }

    findAll(): Observable<EmpresaDTO[]> {
        return this.http.get<EmpresaDTO[]>(`${API_CONFIG.baseUrl}/empresas`);
    }

}