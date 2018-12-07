import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompétencePage } from './compétence';

@NgModule({
  declarations: [
    CompétencePage,
  ],
  imports: [
    IonicPageModule.forChild(CompétencePage),
  ],
})
export class CompétencePageModule {}
