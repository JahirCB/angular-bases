import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: String[] = ['Spiderman', 'Ironman', 'Hulk']
  public deletedHero?: String;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
