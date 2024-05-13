import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera App';
  public counter: number = 10;

  increaseBy() : void{
    this.counter += 1;
  }
}
