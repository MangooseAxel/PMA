import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HomeComponent} from './home.component';
import {IonicSelectableModule} from 'ionic-selectable';
import {RouterModule} from '@angular/router';
import {HomeResolver} from './home.resolver';
import {FilterModalPage} from './filter-modal/filter-modal.page';
import {ListComponent} from '../list/list.component';

@NgModule({
    declarations: [
        HomeComponent,
        FilterModalPage,
        ListComponent
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
        IonicSelectableModule
    ],
    exports: [
        ListComponent
    ]
})
export class HomeModule {
}
