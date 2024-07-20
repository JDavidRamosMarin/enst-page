import { NgModule } from '@angular/core';

// PrimeNg
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';




@NgModule({
  declarations: [],
  exports: [
    ImageModule,
    MenuModule,
    MenubarModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
