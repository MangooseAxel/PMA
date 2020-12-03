import {Injectable} from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {take, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {Drink} from '../../models/drink.model';
import * as fromApp from '../../store/app.reducer';
import * as HomeActions from '../../components/home/homeStore/home.actions';

@Injectable({providedIn: 'root'})
export class DrinksResolverService implements Resolve<Drink[]> {
    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('home').pipe(
            take(1),
            map(homeState => {
                return homeState.drinks;
            }),
            switchMap(drinks => {
                if (drinks.length === 0) {
                    this.store.dispatch(new HomeActions.FetchDrinks());
                    return this.actions$.pipe(
                        ofType(HomeActions.SET_DRINKS),
                        take(1)
                    );
                } else {
                    return of(drinks);
                }
            })
        );
    }
}
