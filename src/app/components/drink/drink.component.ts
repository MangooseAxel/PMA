import {Component, OnInit} from '@angular/core';
import {Drink} from '../../models/drink.model';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Component({
    selector: 'app-drink',
    templateUrl: './drink.component.html',
    styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit {
    drink: Drink;

    onLike() {
        console.log('like');
    }


    ngOnInit() {
    }

    constructor(
        private route: ActivatedRoute,
        private store: Store<fromApp.AppState>
    ) {
    }
}
