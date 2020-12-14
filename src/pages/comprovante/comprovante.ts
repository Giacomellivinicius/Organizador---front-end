import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComprovanteDTO } from '../../models/comprovante.dto';
import { ComprovanteService } from '../../services/domain/comprovantes.service';


@IonicPage()
@Component({
  selector: 'page-comprovante',
  templateUrl: 'comprovante.html',
})
export class ComprovantePage {

  item : ComprovanteDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public comprovanteService : ComprovanteService) {
  }

  ionViewDidLoad() {
    this.item = {
      id:"1",
      dataPagamento: "30/11/2020",
      valorPago: "19.99",
    }

    /*
    let conta_id = this.navParams.get('conta_id');
    this.comprovanteService.findByConta(conta_id)
      .subscribe(response => {
        this.item = response;
      }, error => {} );*/

  }

}
