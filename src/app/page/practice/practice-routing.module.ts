import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 组件导入
import { ExcelComponent } from './excel/excel.component';
import { ListComponent } from './list/list.component';
import { PracticeComponent } from './practice.component';

const routes: Routes = [
    {
        path: '',
        component: PracticeComponent,
        children: [
            {
                path: 'excel',
                component: ExcelComponent
            },
            {
                path: "list",
                component: ListComponent
            },
            {
                path: '',
                redirectTo: 'excel',
                pathMatch: 'full'
            },
        ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
