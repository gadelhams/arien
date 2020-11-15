import { Component, Input } from '@angular/core';
import { Races} from './model/races';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  selectRace(event){
    const selectedRace = event.currentTarget.value;
    console.log(selectedRace);
  }

  public races: Races[] = [];

  public constructor() {
    const human = new Races();
    human.str = 6;
    human.agi = 6;
    human.vig = 6;
    human.int = 6;
    human.ess = 6;

    const gnome = new Races();
    gnome.str = 9;
    gnome.agi = 9;
    gnome.vig = 9;
    gnome.int = 9;
    gnome.ess = 9;

    this.races.push();
  }
}
