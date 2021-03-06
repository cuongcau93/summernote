import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { SummernoteComponent } from "./components/summernote/summernote.component";
import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';
import { ModalComponent } from "./components/modalBootstrap/modal.component";
import { MeetingTypeComponent } from "./components/meetingType/meetingType.component";

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        SummernoteComponent,
        Ng2Summernote,
        ModalComponent,
        HomeComponent,
        MeetingTypeComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'summer-note', component: SummernoteComponent },
            { path: 'modal', component: ModalComponent },
            { path: 'meetingType', component: MeetingTypeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
