import { Component, OnInit } from '@angular/core';

import {faCog} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    
  ) {}

  private brandPath = "../../assets/brand-imgs/"
  public brand_imgs = [
    {path: this.brandPath + "fender.jpeg"},
    {path: this.brandPath + "prs-logo.png"},
    {path: this.brandPath + "danelectro.jpeg"},
    {path: this.brandPath + "gibson.jpeg"},
    {path: this.brandPath + "dangelico.png"},
    {path: this.brandPath + "ibanez.png"},
  ]

  faCog = faCog
  
  ngOnInit(this): void {

  }

}
