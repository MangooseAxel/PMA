import {Action} from '@ngrx/store';
import {Drink} from '../../../models/drink.model';

export const FETCH_DRINKS = '[Drinks] Fetch Drinks';
export const SET_DRINKS = '[Drinks] Set Drinks';

export class FetchDrinks implements Action {
    readonly type = FETCH_DRINKS;
}

export class SetDrinks implements Action {
    readonly type = SET_DRINKS;

    constructor(public payload: Drink[]) {
    }
}

export type HomeActions =
    | FetchDrinks;
