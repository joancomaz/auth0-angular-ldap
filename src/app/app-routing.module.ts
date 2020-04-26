import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { ProtectedComponent } from './pages/protected/protected.component';
import { AuthGuard } from './services/auth.guard';

const ROUTES: Routes = [
  { path: 'public-page-1', component: Page1Component },
  { path: 'public-page-2', component: Page2Component },
  { path: 'protected-page', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'public-page-1' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
