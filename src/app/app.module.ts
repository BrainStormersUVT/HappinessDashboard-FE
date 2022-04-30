import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PollpageComponent } from './pollpage/pollpage.component';
import { VotespageComponent } from './votespage/votespage.component';
import { CreatepollpageComponent } from './createpollpage/createpollpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import {MatSliderModule} from "@angular/material/slider";

const routes: Routes = [{path: 'home', component: HomepageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'poll', component: PollpageComponent},
  {path:'votes', component:VotespageComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PollpageComponent,
    VotespageComponent,
    CreatepollpageComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
