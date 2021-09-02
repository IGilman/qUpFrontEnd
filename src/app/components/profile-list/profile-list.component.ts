import { Component, OnInit } from '@angular/core';
import { QupService } from 'src/app/services/qup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  gamesList: any;

  constructor(private service: QupService) { }

  ngOnInit(): void {

  }

  findProfiles(form: NgForm) {
    console.log(form.value.game)
    this.service.getProfilesByGame(form.value.game).subscribe(response => {
      this.gamesList = response;
    })
  }

}
