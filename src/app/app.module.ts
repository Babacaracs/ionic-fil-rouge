import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CompétencePage } from '../pages/compétence/compétence';
import { PortofolioPage } from '../pages/portofolio/portofolio';
import { AnnuairePage } from '../pages/annuaire/annuaire';
import { CeeddoPage } from '../pages/ceeddo/ceeddo';
import {MemePage}  from '../pages/meme/meme';
import {ExplorerPage}  from '../pages/explorer/explorer';
import {ColloborateurPage} from '../pages/colloborateur/colloborateur';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CompétencePage,
    PortofolioPage,
    AnnuairePage,
    CeeddoPage,
    MemePage,
    ExplorerPage,
    ColloborateurPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CompétencePage,
    PortofolioPage,
    AnnuairePage,
    CeeddoPage,
    MemePage,
    ExplorerPage,
    ColloborateurPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
