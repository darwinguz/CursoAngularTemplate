import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PortafolioComponent} from './pages/portafolio/portafolio.component';
import {AboutComponent} from './pages/about/about.component';
import {ItemComponent} from './pages/item/item.component';
import {HomeComponent} from './pages/home/home.component';
import {NoEncontradoComponent} from './pages/no-encontrado/no-encontrado.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRouting} from "./app.routing";
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    HomeComponent,
    NoEncontradoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,//tambien es un modulo
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
