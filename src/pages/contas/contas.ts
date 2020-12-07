import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContaService } from '../../services/domain/contas.service';

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public contaService : ContaService) {
  }

  ionViewDidLoad() {
    this.contaService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    
  }



}
