import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContaDTO } from '../../models/contas.dto';
import { EmpresaDTO } from '../../models/empresas.dto';
import { ContaService } from '../../services/domain/contas.service';
import { EmpresaService } from '../../services/domain/empresas.service';

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {

  items: EmpresaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public empresaService : EmpresaService,
    public alertController : AlertController) {
  }

  ionViewDidLoad() {
    this.empresaService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {
        console.log(error);
      });
    
  }




}
