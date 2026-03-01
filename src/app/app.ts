import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('LicitaNow');

  constructor(private router: Router) { }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    });
  }
}
