import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContaService } from '../../services/domain/contas.service';



@IonicPage()
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html',
})
export class InicialPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public contaService: ContaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicialPage');
  }

}
