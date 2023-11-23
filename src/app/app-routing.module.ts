import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'dettaglio', component: DettaglioComponent },
  { path: '**', component: ErrorPageComponent}, //Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
