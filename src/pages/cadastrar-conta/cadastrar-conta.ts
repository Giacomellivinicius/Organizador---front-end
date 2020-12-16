import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContaService } from '../../services/domain/contas.service';


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
    public formBuilder: FormBuilder,
    public contaService: ContaService,
    public alertCtrl: AlertController) {

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
    this.contaService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {});
  }

  showInsertOk(){
    let alert = this.alertCtrl.create({
      title:'Cadastro realizado!',
      message:'Conta cadastrada com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  cadastrarEmpresa(){
    console.log("CadastrarEmpresa");
  }

  pagarConta(){
    console.log("Pagar Conta");
  }

}
