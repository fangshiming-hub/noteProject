import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//共享组件
import { HeadComponent } from './components/head/head.component';

// nz模块
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

// 共享组件
let shareComponents = [
    HeadComponent
];

// nz模块
let nzModule = [
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    NzRateModule,
    NzEmptyModule
]

@NgModule({
    declarations: [
        ...shareComponents
    ],
    imports: [
        CommonModule,
        ...nzModule
    ],
    exports: [
        ...shareComponents,
        ...nzModule
    ]
})
export class ShareModule { }
