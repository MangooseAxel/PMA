import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Drink} from '../../models/drink.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
    @Input() drinks$: Observable<Drink[]>;

    constructor() {
    }

    ngOnInit() {
    }

}
