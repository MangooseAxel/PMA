import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {HomeEffects} from './components/home/store/home.effects';
import {HttpClientModule} from '@angular/common/http';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {Keyboard} from '@ionic-native/keyboard/ngx';
import {DrinkComponent} from './components/drink/drink.component';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
    declarations: [AppComponent, DrinkComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([HomeEffects]),
        StoreDevtoolsModule.instrument({logOnly: environment.production}),
        StoreRouterConnectingModule.forRoot(),
        IonicStorageModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        Keyboard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
