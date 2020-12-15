import { Component } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastrar-conta',
  templateUrl: 'cadastrar-conta.html',
})
export class CadastrarContaPage {

  formGroup : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required]],
        valor:['',[Validators.required]],
        empresa: [null,[Validators.required]],
        tipoCusto: ['2',[Validators.required]],
        dataVencimento: [null,[Validators.required]],
        estadoPagamento: ['2',[]],
        vigencia: [null,[]]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarContaPage');
  }

  salvarConta(){
    console.log("Formulário enviado!");
  }


}
