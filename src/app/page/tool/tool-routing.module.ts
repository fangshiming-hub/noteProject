import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolComponent } from './tool.component';


const routes: Routes = [
    {
        path: '',
        component: ToolComponent,
        children: []
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolRoutingModule { }
