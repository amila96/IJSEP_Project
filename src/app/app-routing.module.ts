import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashBoardComponent} from './component/dash-board/dash-board.component';
import {LogInFormComponent} from './component/log-in-form/log-in-form.component';
import {DefaultPageComponent} from './component/dash-board/pages/default-page/default-page.component';
import {RegisterHotelPageComponent} from './component/dash-board/pages/register-hotel-page/register-hotel-page.component';
import {ConfigureRoomPageComponent} from './component/dash-board/pages/configure-room-page/configure-room-page.component';
import {ManageReservationComponent} from './component/dash-board/pages/manage-reservation/manage-reservation.component';
import {ReviewsPageComponent} from './component/dash-board/pages/reviews-page/reviews-page.component';
import {SignOutPageComponent} from './component/dash-board/pages/sign-out-page/sign-out-page.component';

const routes: Routes = [
  {path:'', component:LogInFormComponent },
  {path:'DashBord', component:DashBoardComponent, children:[
    {path: '',component:DefaultPageComponent},
    {path: 'registerHotel',component:RegisterHotelPageComponent},
    {path: 'configureRoom',component:ConfigureRoomPageComponent},
    {path: 'manageReservation',component:ManageReservationComponent},
    {path: 'reviews',component:ReviewsPageComponent},
    {path: 'signOut',component:SignOutPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
