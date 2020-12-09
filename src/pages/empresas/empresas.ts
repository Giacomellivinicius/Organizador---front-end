import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaDTO } from '../../models/empresas.dto';
import { EmpresaService } from '../../services/domain/empresas.service';


@IonicPage()
@Component({
  selector: 'page-empresas',
  templateUrl: 'empresas.html',
})
export class EmpresasPage {

  items: EmpresaDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public empresasService: EmpresaService ) {
  }

  ionViewDidLoad() {
    this.empresasService.findAll()
      .subscribe(response=>{
        this.items = response;
      },
      error => {
        console.log(error);
      });
  }

}
