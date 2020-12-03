import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DrinksResolverService} from './components/home/home-resolver.service';

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
        path: 'favorites',
        loadChildren: () => import('./components/favorites/favorites.module').then(m => m.FavoritesModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
