import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarioComponent } from './mario/mario.component';
import { ZeldaComponent } from './zelda/zelda.component';
import { StreetfComponent } from './streetf/streetf.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'mario', component: MarioComponent},
  {path: 'zelda', component: ZeldaComponent},
  {path: 'streetf', component: StreetfComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
