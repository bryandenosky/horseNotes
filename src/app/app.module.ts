import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { Server } from './backend/server';
import { DATABASE } from "./backend/database";
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HorsesComponent } from './horses/horses.component';
import { HorsesEdit } from './horses/edit/edit.component';
import { HorsesEmpty } from './horses/empty/empty.component';
import { HorseProfile } from './horses/profile/profile.component';
import { HorsesView } from './horses/view/view.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(DATABASE),
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    HorsesComponent,
    HorsesEdit,
    HorsesEmpty,
    HorseProfile,
    HorsesView
  ],
	providers: [ Server ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}