import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: 'typo-graphy', component: TypographyComponent },
  { path: 'material-button', component: ButtonsComponent },
  { path: 'material-icons', component: IconsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
