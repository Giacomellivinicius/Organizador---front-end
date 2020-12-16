import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaDTO } from '../../models/empresas.dto';
import { ContaService } from '../../services/domain/contas.service';
import { EmpresaService } from '../../services/domain/empresas.service';


@IonicPage()
@Component({
  selector: 'page-cadastrar-conta',
  templateUrl: 'cadastrar-conta.html',
})
export class CadastrarContaPage {

  formGroup : FormGroup;
  empresas:EmpresaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public contaService: ContaService,
    public empresaService: EmpresaService,
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
    this.empresaService.findAll()
      .subscribe(response => {
        this.empresas = response;
      },
      error=>{});
  }

  ionViewWillEnter(){
    this.empresaService.findAll()
    .subscribe(response => {
      this.empresas = response;
    },
    error=>{});
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
    this.navCtrl.push('CadastrarEmpresaPage');
  }

  

  pagarConta(){
    console.log("Pagar Conta");
  }

}
