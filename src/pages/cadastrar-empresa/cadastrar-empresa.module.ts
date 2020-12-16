import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarEmpresaPage } from './cadastrar-empresa';

@NgModule({
  declarations: [
    CadastrarEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarEmpresaPage),
  ],
})
export class CadastrarEmpresaPageModule {}
