import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileChronicleComponent } from './profile-chronicle/profile-chronicle.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';
import { ProfileComponent } from './profile.component';

const appRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'chronicle', component: ProfileChronicleComponent },
      { path: 'info', component: ProfileInfoComponent },
      { path: 'photos', component: ProfilePhotosComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
