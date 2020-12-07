import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DrinkComponent} from './components/drink/drink.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'favorite',
        loadChildren: () => import('./components/favorite/favorite.module').then(m => m.FavoriteModule)
    },
    {
        path: 'drink/:id',
        component: DrinkComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
