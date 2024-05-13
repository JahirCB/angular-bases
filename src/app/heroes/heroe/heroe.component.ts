import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name: String = 'ironman';
  public age: number = 45;

  getcapitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'SpiderMan'

  }

  changeAge():void{
    this.age = 23
  }

  reset():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
