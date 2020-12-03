import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import * as HomeActions from '../../home/store/home.actions';
import {Observable} from 'rxjs';
import {State} from '../store/home.reducer';
import {selectorIngredientsList, selectorIngredientsSelected} from '../../../store/app.reducer';

@Component({
    selector: 'app-filter-modal',
    templateUrl: './filter-modal.page.html',
    styleUrls: ['./filter-modal.page.css'],
})
export class FilterModalPage implements OnInit {
    ingredients$: Observable<string[]>;
    selectedIngredients$: Observable<string[]>;
    form: FormGroup;

    constructor(
        public viewCtrl: ModalController,
        private store: Store<fromApp.AppState>,
    ) {
        this.form = new FormGroup({
            search: new FormControl()
        });
    }

    ngOnInit() {
        this.ingredients$ = this.store.pipe(select(selectorIngredientsList));
        this.selectedIngredients$ = this.store.pipe(select(selectorIngredientsSelected));
        this.store.select('home').pipe(select('searchIngredient')).subscribe(search => {
            this.form.get('search').patchValue(search);
        });
        this.form.valueChanges.subscribe(data => {
            this.store.dispatch(new HomeActions.SortIngredients(data.search));
        });
    }

    onCheck(event) {
        event.target.parentElement.remove();
        this.store.dispatch(new HomeActions.UpdateFilter(event.target.value));
        this.store.dispatch(new HomeActions.SortIngredients(this.form.get('search').value));
    }

    onAcceptFilter() {
        this.selectedIngredients$.subscribe(data => {
            data.length > 0
                ? this.store.dispatch(new HomeActions.FilterDrinks(data))
                : this.store.dispatch(new HomeActions.FetchPopularDrinks());
        });
        this.viewCtrl.dismiss({
            dismissed: true
        });
    }


    dismiss() {
        this.viewCtrl.dismiss({
            ingredients: this.selectedIngredients$.subscribe(),
            dismissed: true
        });
    }

}
