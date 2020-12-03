import {Drink} from '../../../models/drink.model';
import * as HomeActions from './home.actions';

export interface State {
    drinks: Drink[];
}

const initialState: State = {
    drinks: []
};

export function homeReducer(
    state = initialState,
    action: HomeActions.HomeActions
) {
    switch (action.type) {
        default:
            return state;
    }
}
