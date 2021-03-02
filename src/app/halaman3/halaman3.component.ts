import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman3',
  templateUrl: './halaman3.component.html',
  styleUrls: ['./halaman3.component.css']
})
export class Halaman3Component implements OnInit {

  constructor(private global : GlobalvarService ) { }
  temp1: any
  ngOnInit() {
  this.temp1 = this.global.getall();
  }

}