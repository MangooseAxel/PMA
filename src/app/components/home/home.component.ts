import {Component, OnInit} from '@angular/core';
import {Drink} from '../../models/drink.model';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import {ModalController} from '@ionic/angular';
import {FilterModalPage} from './filter-modal/filter-modal.page';
import {FormControl, FormGroup} from '@angular/forms';
import * as HomeActions from './store/home.actions';

@Component({
    selector: 'app-folder',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    drinks$: Observable<Drink[]>;
    subscription: Subscription;
    searchBar: FormGroup;

    async openModal() {
        const modal = await this.modalController.create({
            component: FilterModalPage,
            swipeToClose: true,
        });

        modal.onDidDismiss().then(data => {
            console.log(data);
        });
        return await modal.present();
    }

    onSubmit() {
        this.store.dispatch(new HomeActions.FetchDrinks());
        this.store.dispatch(new HomeActions.CleanFilter());
    }

    constructor(
        private store: Store<fromApp.AppState>,
        public modalController: ModalController
    ) {
        this.searchBar = new FormGroup({
            search: new FormControl()
        });
    }

    ngOnInit() {
        this.drinks$ = this.store.select('home').pipe(select('drinks'));

        this.searchBar.valueChanges.subscribe(input => {
            this.store.dispatch(new HomeActions.UpdateSearch(input.search));
        });
    }

}
