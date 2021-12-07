import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './components/panier/panier.component';
import { MenuComponent } from './components/menu/menu.component';
import { RgpdComponent } from './components/rgpd/rgpd.component';

const routes: Routes = [
  { path: 'panier', component: PanierComponent },
  { path: '', component: MenuComponent},
  { path: 'rgpd', component: RgpdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
