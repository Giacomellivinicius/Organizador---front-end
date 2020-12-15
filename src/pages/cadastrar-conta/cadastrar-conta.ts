import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastrar-conta',
  templateUrl: 'cadastrar-conta.html',
})
export class CadastrarContaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarContaPage');
  }

  salvarConta(){
    console.log("Formulário enviado!");
  }


}
