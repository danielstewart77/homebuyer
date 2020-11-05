import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompareComponent } from './compare/compare.component';
import { FaqComponent } from './faq/faq.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'compare',
    component: CompareComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**', 
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
