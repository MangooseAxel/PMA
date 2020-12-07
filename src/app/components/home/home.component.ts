import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Drink} from '../../models/drink.model';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import {map} from 'rxjs/operators';
import {ModalController} from '@ionic/angular';
import {FilterModalPage} from './filter-modal/filter-modal.page';
import {FormControl, FormGroup} from '@angular/forms';
import * as HomeActions from './store/home.actions';
import {Keyboard} from '@ionic-native/keyboard/ngx';

@Component({
    selector: 'app-folder',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    drinks$: Observable<Drink[]>;
    subscription: Subscription;
    searchBar: FormGroup;
    hideKeyboard;
    @ViewChild('search') search: ElementRef;

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

    onSubmit(event) {
        this.store.dispatch(new HomeActions.FetchDrinks());
        this.store.dispatch(new HomeActions.CleanFilter());
        // this.keyboard.hide();
        // alert('enter');
        event.target.blur();
        event.nativeElement.blur();
        this.search.nativeElement.active();
        this.hideKeyboard = true;
    }

    onEnter(event) {
        alert('enter');
        event.nativeElement.blur();
    }

    constructor(
        private store: Store<fromApp.AppState>,
        public modalController: ModalController,
        private keyboard: Keyboard
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
