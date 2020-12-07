import {Component, OnInit} from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Drink} from '../../models/drink.model';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
    drinks$: Observable<Drink[]>;

    constructor(private store: Store<fromApp.AppState>) {
    }

    ngOnInit() {
        this.drinks$ = this.store.select('home').pipe(select('favoriteDrinks'));
        // this.store.select('home').pipe(select('favoriteDrinks')).subscribe(console.log);
    }

}
