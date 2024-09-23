import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

      techonologies = "Angular and Typescript";

      AnotherTechnologies = "HTML , CSS and Javascript";


      receivedData = "";


      receivedEvent(details:any){
        console.log("received....Thank YOu!!!" , details);
        this.receivedData = details;
      }

  
}
