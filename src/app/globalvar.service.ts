import { Injectable } from '@angular/core';

@Injectable()

export class GlobalvarService {
  private object : obj;
  private myarray: any[] = new Array<object>();
  private count = 0
  constructor() {}
  add(jdl : string, isi : string, tgl :Date){
    let temp : obj = {
      id : this.count,
      judul : jdl,
      isi : isi,
      date : tgl,
      fav : false
    }
      this.myarray.push(temp)
      this.count = this.count +1;
   //   console.log(temp)
  }
  getobj(index:number){
   // console.log(this.myarray[index])
    return this.myarray[index]
  }
  changefav(index:number){
      this.myarray[index].fav = true
  }
  getall(){
    return this.myarray
  }
}
export class obj{
  id : number
  judul:string;
  isi:string;
  date : Date;
  fav:Boolean;
}