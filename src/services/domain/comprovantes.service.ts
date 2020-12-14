import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { ComprovanteDTO } from "../../models/comprovante.dto";

@Injectable()
export class ComprovanteService{

    constructor(public http: HttpClient){

    }

    findByConta(conta_id : string) {
        return this.http.get<ComprovanteDTO>(`${API_CONFIG.baseUrl}/comprovantes/${conta_id}`);
    }

    

}