import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {switchMap, map} from 'rxjs/operators';

import * as HomeActions from './home.actions';
import {Drink, drinks} from '../../../models/drink.model';
import * as fromApp from '../../../store/app.reducer';
import {of} from 'rxjs';

@Injectable()
export class HomeEffects {
    @Effect()
    fetchDrinks = this.actions$.pipe(
        ofType(HomeActions.FETCH_DRINKS),
        switchMap(() => {
            // return this.http.get<Drink[]>(
            //     'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json'
            // );
            return of(drinks);
        }),
        map((drinks: Drink[]) => {
            return drinks.map(drink => {
                return {
                    ...drink
                };
            });
        }),
        map(drinks => {
            return new HomeActions.SetDrinks(drinks);
        })
    );

    constructor(
        private actions$: Actions
    ) {
    }
}
