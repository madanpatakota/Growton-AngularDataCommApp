import { Component, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent {

  @Input("iTech") inputTech:any;

  @Input("iETech") inputExtraTech:any;



  //studentNames = "Student-A and Student-B";


  @Output('studentClick') studentEmitter = new EventEmitter<any>();

  //emit | take | inject your data 


  evtSubmit(){
     console.log("Button clicked !!! and From Comp-a sending....");
     this.studentEmitter.emit("Student-A and Student-B");
  }

  // 

  


  // var abc:any = "";



}
