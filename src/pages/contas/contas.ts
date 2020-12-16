import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public contaService:ContaService ) {
  }

  ionViewDidLoad() {
    let empresa_id = this.navParams.get('empresa_id');
    this.contaService.findByEmpresa(empresa_id)
      .subscribe(response=>{
        this.items = response['contas'];
      },
      error =>{});

  };

  showComprovante(conta_id : string){
    this.navCtrl.push('ComprovantePage',{conta_id : conta_id});
  }



  
}
