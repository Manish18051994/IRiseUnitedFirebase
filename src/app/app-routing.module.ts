import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelPartnersComponent } from './components/channel-partners/channel-partners.component';
import { HomeComponent } from './components/home/home.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { ReferComponent } from './components/refer/refer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'channelpartners',
    component: ChannelPartnersComponent
  },
  {
    path: 'refer',
    component: ReferComponent
  },
  {
    path: 'inquiry',
    component: InquiryComponent
  },
  {
    path: '**',
    pathMatch: 'full', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
