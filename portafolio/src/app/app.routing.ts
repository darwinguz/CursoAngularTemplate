import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PortafolioComponent} from "./pages/portafolio/portafolio.component";
import {AboutComponent} from "./pages/about/about.component";
import {ItemComponent} from "./pages/item/item.component";
import {HomeComponent} from "./pages/home/home.component";
import {NoEncontradoComponent} from "./pages/no-encontrado/no-encontrado.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  {
    path: 'no-encontrado',
    component: NoEncontradoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'no-encontrado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    APP_ROUTES,
    {
      useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRouting {

}
