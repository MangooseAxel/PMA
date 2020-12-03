import {Action} from '@ngrx/store';
import {Drink} from '../../../models/drink.model';

export const FETCH_POPULAR_DRINKS = 'FETCH_DRINKS';
export const SET_DRINKS = 'SET_DRINKS';
export const SORT_INGREDIENTS = 'SORT_INGREDIENTS';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const FILTER_DRINKS = 'FILTER_DRINKS';

export class FetchPopularDrinks implements Action {
    readonly type = FETCH_POPULAR_DRINKS;
}

export class FilterDrinks implements Action {
    readonly type = FILTER_DRINKS;

    constructor(public payload: string[]) {
    }
}

export class SetDrinks implements Action {
    readonly type = SET_DRINKS;

    constructor(public payload: Drink[]) {
    }
}

export class SortIngredients implements Action {
    readonly type = SORT_INGREDIENTS;

    constructor(public payload: string) {
    }
}

export class UpdateFilter implements Action {
    readonly type = UPDATE_FILTER;

    constructor(public payload: string) {
    }
}

export type HomeActions =
    | FetchPopularDrinks
    | FilterDrinks
    | SetDrinks
    | SortIngredients
    | UpdateFilter;
