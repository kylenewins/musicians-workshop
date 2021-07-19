import { Component, ElementRef } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicians-workshop';
  constructor(
    private _elementRef: ElementRef,
    private _router: Router
    ) {}

  ngAfterViewInit() {
    this._elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'gray';
  }

  getRoute(){
    var routeArr = this._router.url.split('/')
    var final = routeArr[1].charAt(0).toUpperCase() + routeArr[1].slice(1)
    if(final == ""){
      return "Home"
    } else {
      return final
    }
  }
}
