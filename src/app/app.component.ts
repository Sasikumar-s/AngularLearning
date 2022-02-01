import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Application';
  name : string="";
    

  myobj={
    name : "Sasikumar",
    email : "sasikumar@gmail.com"
  };

  myArr =["Sasikumar","Makesh","Aravind","JP"];
  age:number=0;
  namelist:Array<string>=[]
  addElement(){
    this.namelist.push(this.name);
  }

  votername:string="";
  voterage:number=0;
  voterlist:Array<{votername:string,voterage:number}>=[];
  addVoter(){
    this.voterlist.push({votername:this.votername,voterage:this.voterage});
    this.votername="";
    this.voterage=0;
  }
}
