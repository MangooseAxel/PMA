import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HomeComponent} from './home.component';
import {IonicSelectableModule} from 'ionic-selectable';
import {RouterModule} from '@angular/router';
import {HomeResolver} from './home.resolver';
import {FilterModalPage} from './filter-modal/filter-modal.page';
import {SharedModule} from '../../shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        FilterModalPage
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: HomeComponent,
                resolve: [HomeResolver]
            }
        ]),
        IonicSelectableModule,
        SharedModule
    ],
    exports: []
})
export class HomeModule {
}
