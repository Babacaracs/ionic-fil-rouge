import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CompétencePage } from '../pages/compétence/compétence';
import { PortofolioPage } from '../pages/portofolio/portofolio';
import { HtmlAstPath, HtmlParser, HtmlTagDefinition } from '@angular/compiler';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string,image: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

   
   

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  gotohome1()
  {
    this.nav.setRoot(HomePage);
  }
  gotocompetence1()
  {
    this.nav.setRoot(CompétencePage);
  }
  gotoportfolio1()
  {
    this.nav.setRoot(PortofolioPage);
  }
}
