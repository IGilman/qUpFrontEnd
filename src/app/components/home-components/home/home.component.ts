import { Component, OnInit } from '@angular/core';
import { QupService } from 'src/app/services/qup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  supportedGames: any[];

  constructor(private service: QupService) { }

  ngOnInit(): void {
    this.service.getSupportedGames().subscribe(response => {
      this.supportedGames = response;
      console.log(response)
    });
  }

}
