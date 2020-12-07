import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContaDTO } from '../../models/contas.dto';
import { ContaService } from '../../services/domain/contas.service';

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {

  items: ContaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public contaService : ContaService,
    public alertController : AlertController) {
  }

  ionViewDidLoad() {
    this.contaService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {
        console.log(error);
      });
    
  }




}
