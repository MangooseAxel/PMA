import {Actions, Effect, ofType} from '@ngrx/effects';
import * as HomeActions from './home.actions';
import {delay, map, switchMap, tap} from 'rxjs/operators';
import {Drink, drinksMockup, VodkaDrinksMockup} from '../../../models/drink.model';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';

@Injectable()
export class HomeEffects {
    @Effect()
    fetchPopularDrinks = this.actions$.pipe(
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

    @Effect()
    fetchFilteredDrinks = this.actions$.pipe(
        ofType(HomeActions.FETCH_FILTERED_DRINKS),
        switchMap(() => {
            return this.store.select('home').pipe(select('ingredientsSelected'));
        }),
        switchMap((selectedIngredients: string[]) => {
            // return of(VodkaDrinksMockup).pipe(delay(1000));
            return this.http.get('https://the-cocktail-db.p.rapidapi.com/filter.php',
                {
                    headers: {'x-rapidapi-key': '4b1817b69cmsh2745b035ee2d326p16494djsnddd5da10e2f9'},
                    params: {
                        ['i']: selectedIngredients.map(item => item.replace(' ', '_')).join(',')
                    }
                });
        }),
        map((data: { drinks: Drink[] | string }) => {
            return typeof data.drinks === 'string'
                ? false
                : data.drinks.map(drink => {
                    return {
                        ...drink
                    };
                });
        }),
        map((drinks: Drink[] | false) => {
            return drinks ? new HomeActions.SetDrinks(drinks) : new HomeActions.FetchPopularDrinks();
        })
    );


    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>
    ) {
    }
}
