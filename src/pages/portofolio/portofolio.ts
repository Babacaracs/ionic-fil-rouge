import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnnuairePage } from '../annuaire/annuaire';
import { MemePage } from '../meme/meme';
import {ExplorerPage } from '../explorer/explorer';
import { CeeddoPage } from '../ceeddo/ceeddo';

/**
 * Generated class for the PortofolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portofolio',
  templateUrl: 'portofolio.html',
})
export class PortofolioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortofolioPage');
  }
  gotoannuaire()
  {
    this.navCtrl.push(AnnuairePage);
  }
  gotomeme()
  {
    this.navCtrl.push(MemePage);
  }
  gotoexplorer()
  {
    this.navCtrl.push(ExplorerPage);
  }
  gotoceeddo()
  {
    this.navCtrl.push(CeeddoPage);
  }
}
