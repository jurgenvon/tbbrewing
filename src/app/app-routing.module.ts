import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProdukterComponent } from './pages/produkter/produkter.component';
import { OmComponent } from './pages/om/om.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';

const routes: Routes = [
  { path: '', redirectTo: '/hem', pathMatch: 'full' },
  { path: 'hem', component: MainComponent },
  { path: 'produkter', component: ProdukterComponent },
  { path: 'om', component: OmComponent },
  { path: 'kontakt', component: KontaktComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
