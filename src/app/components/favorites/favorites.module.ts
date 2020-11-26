import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FavoritesComponent} from './favorites.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
    {
        path: '',
        component: FavoritesComponent
    }
];

@NgModule({
    declarations: [FavoritesComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ]
})
export class FavoritesModule {
}
