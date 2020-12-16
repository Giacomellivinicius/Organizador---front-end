import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaService } from '../../services/domain/empresas.service';



@IonicPage()
@Component({
  selector: 'page-cadastrar-empresa',
  templateUrl: 'cadastrar-empresa.html',
})
export class CadastrarEmpresaPage {

  formGroup: FormGroup;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public empresaService: EmpresaService
    ) {

      this.formGroup = this.formBuilder.group({
        nome:['',[]],
        prioridade:['',[]]
      });
  }

  ionViewDidLoad() {
   
  }

  salvarEmpresa(){
    this.empresaService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {});
  }

  showInsertOk(){
    let empresaNome = this.formGroup.value['nome'];
    console.log(empresaNome);
    let alert = this.alertCtrl.create({
      title:'Cadastro realizado!',
      message:`Empresa ${empresaNome} cadastrada com sucesso!`,
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


}
