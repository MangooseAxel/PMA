import {Component, OnInit} from '@angular/core';
import {Drink} from '../../models/drink.model';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as HomeActions from '../home/store/home.actions';
import {first, map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-drink',
    templateUrl: './drink.component.html',
    styleUrls: ['./drink.component.css'],
})
export class DrinkComponent implements OnInit {
    drink: Drink;

    onLike() {
        console.log('like');
    }


    ngOnInit() {
        // this.store.select('home').pipe(
        //     select('drinks')).pipe(
        //     first(),
        //     map((drinks: Drink[]) => {
        //         return drinks.filter(property => property.idDrink === this.route.snapshot.paramMap.get('id'))[0];
        //     })
        // ).subscribe(drink => {
        //     this.drink = drink;
        //     console.log(this.drink);
        //     if (Object.keys(this.drink).length < 4) {
        //         this.store.dispatch(new HomeActions.);
        //     }
        // });
        this.store.dispatch(new HomeActions.OpenDrink(this.route.snapshot.paramMap.get('id')));
        this.store.select('home').pipe(
            select('openedDrink'),
            map((drink: Drink) => {
                if (Object.keys(drink).length < 4) {
                    this.store.dispatch(new HomeActions.FetchDrink(drink.idDrink));
                }
                return drink;
            })
        ).subscribe((drink: Drink) => {
            this.drink = drink;
        });
    }

    constructor(
        private route: ActivatedRoute,
        private store: Store<fromApp.AppState>
    ) {
    }
}
