import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarContaPage } from './cadastrar-conta';

@NgModule({
  declarations: [
    CadastrarContaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarContaPage),
  ],
})
export class CadastrarContaPageModule {}
