import {Actions, Effect, ofType} from '@ngrx/effects';
import * as HomeActions from './home.actions';
import {combineAll, concatAll, concatMap, delay, first, map, switchMap, take, tap} from 'rxjs/operators';
import {
    Drink,
    DaiquiriMockup,
    drinksMockup,
    VodkaDrinksMockup,
    DaiquiriToModifyMockup,
    Ingredient,
    Belmont
} from '../../../models/drink.model';
import {concat, forkJoin, of, combineLatest, merge} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {Storage} from '@ionic/storage';

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
            return this.store.select('home').pipe(
                first(),
                select('ingredientsSelected'));
        }),
        switchMap((selectedIngredients: string[]) => {
            return of(VodkaDrinksMockup).pipe(delay(1000));
            // return this.http.get('https://the-cocktail-db.p.rapidapi.com/filter.php',
            //     {
            //         headers: {'x-rapidapi-key': '4b1817b69cmsh2745b035ee2d326p16494djsnddd5da10e2f9'},
            //         params: {
            //             ['i']: selectedIngredients.map(item => item.replace(' ', '_')).join(',')
            //         }
            //     });
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

    @Effect()
    fetchDrinks = this.actions$.pipe(
        ofType(HomeActions.FETCH_DRINKS),
        switchMap(() => {
            return this.store.select('home').pipe(
                first(),
                select('searchDrink'));
        }),
        switchMap((searchTxt: string) => {
            console.log('effect on FETCH_DRINKS');
            return of(DaiquiriToModifyMockup).pipe(delay(1000));
            // return this.http.get('https://the-cocktail-db.p.rapidapi.com/search.php',
            //     {
            //         headers: {'x-rapidapi-key': '4b1817b69cmsh2745b035ee2d326p16494djsnddd5da10e2f9'},
            //         params: {
            //             ['s']: searchTxt.trim()
            //         }
            //     });
        }),
        map((data: { drinks: Drink[] | string }) => {
            return typeof data.drinks === 'string'
                ? false
                : data.drinks.map(drink => {
                    const strIngredients: Ingredient[] = [];
                    let index = 0;
                    Object.entries(drink).map(property => {
                        if (property[0].includes('strIngredient')) {
                            if (property[1] !== undefined && property[1] !== null && property[1].length > 0) {
                                strIngredients.push({name: property[1].toString().trim(), measure: null});
                            }
                            index = 0;
                        }
                        if (property[0].includes('strMeasure') && index < strIngredients.length) {
                            if (property[1] !== undefined && property[1] !== null && property[1].length > 0) {
                                strIngredients[index].measure = String(property[1].toString().trim());
                                index++;
                            }
                        }
                    });
                    return {
                        idDrink: drink.idDrink,
                        strDrink: drink.strDrink,
                        strTags: drink.strTags,
                        strCategory: drink.strCategory,
                        strAlcoholic: drink.strAlcoholic,
                        strGlass: drink.strGlass,
                        strInstructions: drink.strInstructions,
                        strDrinkThumb: drink.strDrinkThumb,
                        strIngredients: [...strIngredients],
                        strCreativeCommonsConfirmed: drink.strCreativeCommonsConfirmed,
                        dateModified: drink.dateModified
                    };
                });
        }),
        map((drinks: Drink[] | false) => {
            return drinks ? new HomeActions.SetDrinks(drinks) : new HomeActions.FetchPopularDrinks();
        })
    );

    @Effect()
    fetchDrink = this.actions$.pipe(
        ofType(HomeActions.FETCH_DRINK),
        switchMap(() => {
            return this.store.select('home').pipe(
                first(),
                select('openedDrink'));
        }),
        switchMap((drink: Drink) => {
            // return of(Belmont).pipe(delay(1000));
            return this.http.get('https://the-cocktail-db.p.rapidapi.com/lookup.php',
                {
                    headers: {'x-rapidapi-key': '4b1817b69cmsh2745b035ee2d326p16494djsnddd5da10e2f9'},
                    params: {
                        ['i']: drink.idDrink.trim()
                    }
                });
        }),
        map((data: { drinks: Drink[] | string }) => {
            return typeof data.drinks === 'string'
                ? false
                : data.drinks.map(drink => {
                    const strIngredients: Ingredient[] = [];
                    let index = 0;
                    Object.entries(drink).map(property => {
                        if (property[0].includes('strIngredient')) {
                            if (property[1] !== undefined && property[1] !== null && property[1].length > 0) {
                                strIngredients.push({name: property[1].toString().trim(), measure: null});
                            }
                            index = 0;
                        }
                        if (property[0].includes('strMeasure') && index < strIngredients.length) {
                            if (property[1] !== undefined && property[1] !== null && property[1].length > 0) {
                                strIngredients[index].measure = String(property[1].toString().trim());
                                index++;
                            }
                        }
                    });
                    return {
                        idDrink: drink.idDrink,
                        strDrink: drink.strDrink,
                        strTags: drink.strTags,
                        strCategory: drink.strCategory,
                        strAlcoholic: drink.strAlcoholic,
                        strGlass: drink.strGlass,
                        strInstructions: drink.strInstructions,
                        strDrinkThumb: drink.strDrinkThumb,
                        strIngredients: [...strIngredients],
                        strCreativeCommonsConfirmed: drink.strCreativeCommonsConfirmed,
                        dateModified: drink.dateModified
                    };
                });
        }),
        map((drinks: Drink[] | false) => {
            return drinks ? new HomeActions.UpdateDrinks(drinks[0]) : new HomeActions.FetchPopularDrinks();
        })
    );

    @Effect()
    updateFavoriteDrinks = this.actions$.pipe(
        ofType(HomeActions.UPDATE_FAVORITE),
        switchMap(() => {
            return this.store.select('home').pipe(
                first(),
                map(state => {
                    return state.favoriteDrinks.length > 0
                        ? !!state.favoriteDrinks.find(x => x.idDrink === state.openedDrink.idDrink)
                            ? [...state.favoriteDrinks
                                .filter(drink => drink.idDrink !== state.openedDrink.idDrink)]
                            : [...state.favoriteDrinks, state.openedDrink]
                        : [state.openedDrink];
                })
            );
        }),
        map(drinks => {
            this.storage.set('favoriteDrinks', JSON.stringify(drinks));
            return new HomeActions.SetFavoriteDrinks(drinks);
        })
    );

    @Effect()
    fetchFavoriteDrinks = this.actions$.pipe(
        ofType(HomeActions.FETCH_FAVORITE_DRINKS),
        switchMap(() => {
            return this.storage.get('favoriteDrinks').then(drinks => {
                return JSON.parse(drinks);
            });
        }),
        map((drinks: Drink[]) => {
            return new HomeActions.SetFavoriteDrinks(drinks === null ? [] : drinks);
        })
    );


    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>,
        private storage: Storage
    ) {
    }
}
