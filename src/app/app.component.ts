import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Plugins} from '@capacitor/core';

const {SplashScreen} = Plugins;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'mail'
        },
        {
            title: 'Favorite',
            url: '/favorite',
            icon: 'heart'
        }
    ];

    constructor(
        private platform: Platform,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            SplashScreen.show({
                showDuration: 2000,
                autoHide: true
            });
        });
    }

    ngOnInit() {
        const path = window.location.pathname.split('home/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }
}
