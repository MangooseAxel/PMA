import {Actions, Effect, ofType} from '@ngrx/effects';
import * as HomeActions from './home.actions';
import {delay, map, switchMap, tap} from 'rxjs/operators';
import {Drink, drinksMockup} from '../../../models/drink.model';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class HomeEffects {
    @Effect()
    fetchDrinks = this.actions$.pipe(
        ofType(HomeActions.FETCH_POPULAR_DRINKS),
        switchMap(() => {
            return of(drinksMockup).pipe(delay(1000));
        }),
        map((drinks: Drink[]) => {
            return drinks.map(drink => {
                return {
                    ...drink
                };
            });
        }),
        map((drinks: Drink[]) => {
            return new HomeActions.SetDrinks(drinks);
        })
    );


    constructor(private actions$: Actions) {
    }
}
