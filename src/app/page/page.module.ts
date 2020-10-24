import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// 布局组件
import { DefaultComponent }  from '../layout/default/default.component'
import { FullComponent } from '../layout/full/full.component';
import { NomenuComponent } from '../layout/nomenu/nomenu.component';
import { NotfoundComponent } from '../layout/notfound/notfound.component'

import { ShareModule } from "../share/share.module";

// 当前目录组件模块
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';


@NgModule({
    declarations: [
        PageComponent,
        DefaultComponent,
        FullComponent,
        NomenuComponent,
        NotfoundComponent,
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        FormsModule,
        ShareModule
    ],
    exports: [
        PageComponent,
    ]
})
export class PageModule { }
