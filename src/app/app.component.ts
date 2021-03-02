import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router : Router,private global : GlobalvarService){}
  judulnote : string = ""
  isinote : string = ""
  tanggalnote : Date
  index : string
  submit(){
      this.global.add(this.judulnote,this.isinote,this.tanggalnote);
  }
  pindah2(){
    this.router.navigate(["/halaman2/"+this.index]);
  }
   pindah3(){
     this.router.navigate(["/halaman3/"]);
  }
}
