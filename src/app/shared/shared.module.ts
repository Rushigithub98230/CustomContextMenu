import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ContextMenuService } from './services/context-menu.service';



@NgModule({
  declarations: [ContextMenuComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[ContextMenuComponent],
  providers:[ContextMenuService]
})
export class SharedModule { }
