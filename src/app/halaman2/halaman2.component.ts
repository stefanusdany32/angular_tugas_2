import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.component.html',
  styleUrls: ['./halaman2.component.css']
})
export class Halaman2Component implements OnInit {

  constructor(private route:ActivatedRoute, private global : GlobalvarService, private router: Router) { }
  judul = ""
  isi =""
  date :Date
  fav : Boolean
  kata = "aaaaaa"
  temp1 : any
  index : string
  ngOnInit() {
    
    this.index = this.route.snapshot.paramMap.get('index')
    let indexx : number = parseInt(this.index)
    let temp = this.global.getobj(indexx)
   this.temp1 = temp
   console.log(this.temp1)
   
  }
  favorite(){
    let indexx : number = parseInt(this.index)
     let temp = this.global.getobj(indexx)
     this.global.changefav(temp.id)
  }
  pindah3(){
     this.router.navigate(["/halaman3/"]);
  }
}