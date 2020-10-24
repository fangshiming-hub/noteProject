import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 导入layout组件
import { DefaultComponent } from '../layout/default/default.component';
import { FullComponent } from '../layout/full/full.component';
import { NomenuComponent } from '../layout/nomenu/nomenu.component';
import { NotfoundComponent } from '../layout/notfound/notfound.component'

const routes: Routes = [
    {
        path: 'default',
        component: DefaultComponent,
        children: [
            {
                path: "practice",
                loadChildren: () => import('./practice/practice.module').then(m => m.PracticeModule)
            },
            {
                path: "tool",
                loadChildren: () => import('./tool/tool.module').then(m => m.ToolModule)
            },
            { 
                path: 'note', 
                loadChildren: () => import('./note/note.module').then(m => m.NoteModule) 
            },
            {
                path: '',
                redirectTo: "practice",
                pathMatch: 'full'
            },
        ]
    },
    {
        path: 'full',
        component: FullComponent
    },
    {
        path: 'app',
        component: NomenuComponent
    },
    {
        path: 'notFound',
        component:NotfoundComponent
    },
    {
        path: '',
        redirectTo: 'default',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo:'notFound',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
