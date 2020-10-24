import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {
    isCollapsed = false;
    subMenu: { [name: string]: boolean } = {
        sub1: true,
        sub2: false,
        sub3: false,
        sub4: false,
        sub5: false,
    }

    constructor() { }

    ngOnInit(): void {
    }

    /**
     * @description 控制菜单打开关闭
     * @param {string} value
     */
    openChange(value: string): void {
        for (const key in this.subMenu) {
            if (key !== value) {
                this.subMenu[key] = false;
            }else{
                this.subMenu[key] = true;
            }
        }
    }

}
