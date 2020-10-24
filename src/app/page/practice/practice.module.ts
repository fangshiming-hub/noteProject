import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 路由模块导入
import { PracticeRoutingModule } from './practice-routing.module';

// 组件导入
import { ExcelComponent } from './excel/excel.component';
import { ListComponent } from './list/list.component';
import { PracticeComponent } from './practice.component';

import { ShareModule } from "../../share/share.module";


@NgModule({
    declarations: [
        ExcelComponent, 
        ListComponent, 
        PracticeComponent
    ],
    imports: [
        CommonModule,
        PracticeRoutingModule,
        ShareModule
    ],
    exports: []
})
export class PracticeModule { }
