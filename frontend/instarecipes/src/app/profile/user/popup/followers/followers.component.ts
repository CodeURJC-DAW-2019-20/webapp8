import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Interfaces/user.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'popup-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  @Input()
  followers_users: User[];

  avatars: any[] = [];

  constructor(private recipesService: RecipesService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.followers_users.length > 0){
      this.get_followers_images();
    }
  }

  get_followers_images(){
    this.followers_users.forEach(user => {
      this.recipesService.getRecipeAvatar(user.id).subscribe(
        data => {
          var urlCreator = window.URL;
          this.avatars.push(this.domSanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(data)));
        }
      );
    });
  }

}