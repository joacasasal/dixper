import { Component, OnInit } from '@angular/core';

/**
 * Vista principal.
 */
@Component({
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  public showDetails: number = 2;

  constructor(
  ) { }

  ngOnInit() {
  }
}
