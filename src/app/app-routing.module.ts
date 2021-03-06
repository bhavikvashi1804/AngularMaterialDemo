import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { ExpansionDemoComponent } from './expansion-demo/expansion-demo.component';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { IconsComponent } from './icons/icons.component';
import { ListDemoComponent } from './list-demo/list-demo.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { NavDemoComponent } from './nav-demo/nav-demo.component';
import { SlideNavDemoComponent } from './slide-nav-demo/slide-nav-demo.component';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
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
  { path: 'material-list', component: ListDemoComponent },
  { path: 'material-grid', component: GridDemoComponent },
  { path: 'material-expan', component: ExpansionDemoComponent },
  { path: 'material-card', component: CardDemoComponent },
  { path: 'material-tabs', component: TabsDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
