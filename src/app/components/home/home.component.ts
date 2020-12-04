import {Component, OnInit} from '@angular/core';
import {Drink} from '../../models/drink.model';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import {map} from 'rxjs/operators';
import {IngredientsList} from '../../models/ingredients.mockup';
import {IonicSelectableComponent} from 'ionic-selectable';
import {ModalController} from '@ionic/angular';
import {FilterModalPage} from './filter-modal/filter-modal.page';

@Component({
    selector: 'app-folder',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    drinks: Drink[];
    subscription: Subscription;

    // closed: boolean = true;

    portChange(event: {
        component: IonicSelectableComponent,
        value: any
    }) {
        console.log('port:', event.value);
    }

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


    constructor(
        private store: Store<fromApp.AppState>,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
        this.subscription = this.store
            .select('home')
            .pipe(map(homeState => homeState.drinks))
            .subscribe((drinks: Drink[]) => {
                this.drinks = drinks;
            });
    }

}
