import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ToolRoutingModule } from './tool-routing.module';
import { ToolComponent } from './tool.component';

import { ShareModule } from "../../share/share.module";

@NgModule({
  declarations: [ToolComponent],
  imports: [
    CommonModule,
    ToolRoutingModule,
    FormsModule,
    ShareModule
  ],
})
export class ToolModule { }
