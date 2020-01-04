import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'subjects',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'subjects',
    loadChildren: () => import('./pages/subjects-browse/subjects-browse.module').then( m => m.SubjectsBrowsePageModule)
  },
  {
    path: 'subjects/:subjectTitle',
    loadChildren: () => import('./pages/subject-page/subject-page.module').then( m => m.SubjectPagePageModule)
  },
  {
    path: 'works/:id',
    loadChildren: () => import('./pages/work-page/work-page.module').then( m => m.WorkPagePageModule)
  },
  {
    path: 'authors/:id',
    loadChildren: () => import('./pages/author/author.module').then( m => m.AuthorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
