import {ActionReducerMap} from '@ngrx/store';

import * as fromHome from '../components/home/homeStore/home.reducer';

export interface AppState {
    home: fromHome.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    home: fromHome.homeReducer
};
