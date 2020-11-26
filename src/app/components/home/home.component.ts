import {Component, OnInit} from '@angular/core';
import {Drink, drinks} from '../../models/drink.model';

@Component({
    selector: 'app-folder',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    drinks: Drink[] = drinks;
    closed: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

}
