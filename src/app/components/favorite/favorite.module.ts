import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FavoriteComponent} from './favorite.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared.module';

@NgModule({
    declarations: [
        FavoriteComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: FavoriteComponent
            }
        ]),
    ]
})
export class FavoriteModule {
}
