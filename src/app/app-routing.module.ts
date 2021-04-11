import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: 'typo-graphy', component: TypographyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
