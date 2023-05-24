import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' }, // Redirect to the 'home' route
  { path: 'home', component: HomeComponent },
  
  // Import here child route module
  { path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule) },


  { path: 'not-found', component: PageNotFoundComponent },
  // Wildcard route (404 page or redirection) it should last of array
  { path: '**', redirectTo: 'not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
