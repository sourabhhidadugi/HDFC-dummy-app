import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  username = new FormControl('');
  password = new FormControl('');

  handleLogin() {
    let name = this.username.value;
    let pass = this.password.value;
    this._router.navigate(['success', name, pass]);
  }
}
