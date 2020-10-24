import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-excel',
    templateUrl: './excel.component.html',
    styleUrls: ['./excel.component.less']
})
export class ExcelComponent implements OnInit {
    isCollapsed = false;
    constructor() { }

    ngOnInit(): void {
    }

}
