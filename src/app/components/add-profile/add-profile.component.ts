import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QupService } from 'src/app/services/qup.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  // qupModel: Qup = {
  //   username: '',
  //   game: '',
  //   kd: 0,
  //   playStyle: '',
  //   discord: false
  // };

  constructor(private service: QupService, private router: Router) { }

  ngOnInit(): void {
  }

  addProfile(form: NgForm): void {
    let newProfile = form.value;
    this.service.addProfile(newProfile).subscribe(() => {
      console.log("THIS THIS POST?")
      console.log(newProfile)
      this.router.navigate(["/qup"],)
      console.log("THIS THIS POST?")
    })
  }

  goToGamerList() {
    this.router.navigate(["/gamerslist"])
  }

}
