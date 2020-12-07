import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FavoriteComponent} from './favorite.component';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from '../list/list.component';
import {FavoriteResolver} from './favorite.resolver';

@NgModule({
    declarations: [
        FavoriteComponent,
        ListComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: FavoriteComponent,
                resolve: [FavoriteResolver]
            }
        ]),
    ]
})
export class FavoriteModule {
}
