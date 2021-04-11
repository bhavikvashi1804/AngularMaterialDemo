import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const MaterialComponents = [MatButtonModule];

@NgModule({
  imports: [MaterialComponents, MatButtonToggleModule],
  exports: [MaterialComponents, MatButtonToggleModule],
})
export class MaterialModule {}
