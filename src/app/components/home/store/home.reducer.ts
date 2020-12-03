import {Drink} from '../../../models/drink.model';
import * as HomeActions from '../store/home.actions';
import {IngredientsList} from '../../../models/ingredients.mockup';

export interface State {
    drinks: Drink[];
    searchIngredient: string;
    ingredientsList: string[];
    ingredientsSelected: string[];
}

const initialState: State = {
    drinks: [],
    searchIngredient: '',
    ingredientsList: IngredientsList,
    ingredientsSelected: []
};

export function HomeReducer(
    state = initialState,
    action: HomeActions.HomeActions
) {
    switch (action.type) {
        case HomeActions.SET_DRINKS:
            return {
                ...state,
                drinks: [...action.payload]
            };
        case HomeActions.SORT_INGREDIENTS:
            return {
                ...state,
                searchIngredient: String(action.payload),
                ingredientsList: getIngredientsList(state, action.payload)
            };
        case HomeActions.UPDATE_FILTER:
            return {
                ...state,
                ingredientsSelected: getIngredientsSelected(state, action.payload)
                // ingredientsList: getIngredientsList(state, state.searchIngredient)
            };
        case HomeActions.FILTER_DRINKS:
            return {
                ...state,
                drinks: getFilteredDrinks(state, action.payload)
            };
        default:
            return state;
    }
}

function getIngredientsList(state: State, searchTxt: string) {
    let filtered = searchTxt.length > 0
        ? [...IngredientsList.filter(item =>
            item.toLowerCase().includes(searchTxt.toLowerCase())
            && !state.ingredientsSelected.map(ingredient => ingredient.toLowerCase()).includes(item.toLowerCase()))
        ]
        : [...IngredientsList.filter(item => !state.ingredientsSelected.includes(item))];
    console.log('selected: ' + state.ingredientsSelected);
    console.log(filtered);
    return filtered;
}

function getIngredientsSelected(state: State, payload: string) {
    return state.ingredientsSelected.map(item => item.toLowerCase()).includes(payload.toLowerCase())
        ? [...state.ingredientsSelected.filter(item => payload !== item)]
        : [...state.ingredientsSelected, payload];
}

function getFilteredDrinks(state: State, payload: string[]) {
    return state.drinks.filter(
        drink => {
            let counter = 0;
            drink.strIngredients.map(ingredient => {
                if (payload.map(item => item.toLowerCase()).includes(ingredient.name.toLowerCase())) {
                    counter++;
                }
            });
            return counter === payload.length;
        });
}
