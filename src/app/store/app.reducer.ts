import * as fromHome from '../components/home/store/home.reducer';
import {ActionReducerMap, createSelector} from '@ngrx/store';

export interface AppState {
    home: fromHome.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    home: fromHome.HomeReducer
};

export const stateHome = (state: AppState) => state.home;
export const selectorIngredientsList = createSelector(
    stateHome,
    (state: fromHome.State) => state.ingredientsList
);

export const selectorIngredientsSelected = createSelector(
    stateHome,
    (state: fromHome.State) => state.ingredientsSelected
);
