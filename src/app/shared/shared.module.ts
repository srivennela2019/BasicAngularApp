import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from "../misc/panel/panel.component";
@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PanelComponent  
  ]
})
export class SharedModule { }
