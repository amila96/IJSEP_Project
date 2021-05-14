import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { LogInFormComponent } from './component/log-in-form/log-in-form.component';
import { HeaderComponent } from './component/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './component/footer/footer.component';
import { DefaultPageComponent } from './component/dash-board/pages/default-page/default-page.component';
import { RegisterHotelPageComponent } from './component/dash-board/pages/register-hotel-page/register-hotel-page.component';
import { CardsComponent } from './component/dash-board/pages/default-page/items/cards/cards.component';
import { ConfigureRoomPageComponent } from './component/dash-board/pages/configure-room-page/configure-room-page.component';
import { ManageRoomPageComponent } from './component/dash-board/pages/manage-room-page/manage-room-page.component';
import { ManageReservationComponent } from './component/dash-board/pages/manage-reservation/manage-reservation.component';
import { ReviewsPageComponent } from './component/dash-board/pages/reviews-page/reviews-page.component';
import { SignOutPageComponent } from './component/dash-board/pages/sign-out-page/sign-out-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    LogInFormComponent,
    HeaderComponent,
    FooterComponent,
    DefaultPageComponent,
    RegisterHotelPageComponent,
    CardsComponent,
    ConfigureRoomPageComponent,
    ManageRoomPageComponent,
    ManageReservationComponent,
    ReviewsPageComponent,
    SignOutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
