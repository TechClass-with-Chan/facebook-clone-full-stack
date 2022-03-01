import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileChronicleComponent } from './profile-chronicle/profile-chronicle.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  declarations: [
    ProfileChronicleComponent,
    ProfileInfoComponent,
    ProfilePhotosComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, SharedComponentsModule],
})
export class ProfileModule {}
