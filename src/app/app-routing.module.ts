import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { NavDemoComponent } from './nav-demo/nav-demo.component';
import { SlideNavDemoComponent } from './slide-nav-demo/slide-nav-demo.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: 'typo-graphy', component: TypographyComponent },
  { path: 'material-button', component: ButtonsComponent },
  { path: 'material-icons', component: IconsComponent },
  { path: 'material-badge', component: BadgesComponent },
  { path: 'material-progress', component: LoadingComponent },
  { path: 'material-navbar', component: NavDemoComponent },
  { path: 'material-sidenav', component: SlideNavDemoComponent },
  { path: 'material-menu', component: MenuDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
