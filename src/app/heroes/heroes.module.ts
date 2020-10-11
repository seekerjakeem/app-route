import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];
export class HeroesModule { }
