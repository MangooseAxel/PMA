import {Injectable} from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {map, switchMap, tap, first} from 'rxjs/operators';
import {of} from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import * as HomeActions from '../home/store/home.actions';
import {Drink} from '../../models/drink.model';

@Injectable({providedIn: 'root'})
export class HomeResolver implements Resolve<Drink[]> {
    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('home').pipe(
            first(),
            map(homeState => {
                return homeState.drinks;
            }),
            switchMap(drinks => {
                if (drinks.length === 0) {
                    this.store.dispatch(new HomeActions.FetchPopularDrinks());
                    this.store.dispatch(new HomeActions.FetchFavoriteDrinks());
                    return this.actions$.pipe(
                        ofType(HomeActions.SET_DRINKS && HomeActions.SET_FAVORITE_DRINKS),
                        first(),
                    );
                } else {
                    return of(drinks);
                }
            })
        );
    }
}
