import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/models/user/UserProfile';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
})
export class UserprofileComponent implements OnInit, OnDestroy {

  environment = environment;

  username: string;

  private sub: any;

  currentUser: UserProfile;

  profileLoading: boolean = true;
  public doneLoading = false;

  constructor(private authService: AuthService, private route: ActivatedRoute, private strapiService: StrapiService) { }

  ngOnInit() {

    this.username = this.route.params['username'];

    // if userId in url params, search strapi for profile with that ID
    if(this.username) {

      this.strapiService.getUserProfileByUsername(this.username).subscribe((res: UserProfile) => {
        console.log(`got ${JSON.stringify(res)}`);
        this.currentUser = res;

        this.profileLoading = false;
      });
    }
    // else, search strapi for profile with current user's ID
    else {
      const currentUserId = this.authService.getCurrentUser().user.username;

      console.log(`Current user's username: ${currentUserId}`);

      this.strapiService.getUserProfileByUsername(currentUserId).subscribe((res: UserProfile) => {
        console.log(`got ${JSON.stringify(res)}`);

        this.currentUser = res;
        console.log(`current user: ${JSON.stringify(this.currentUser)}`);
        this.profileLoading = false;
      });

    }

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
