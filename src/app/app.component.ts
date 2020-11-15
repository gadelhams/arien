import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public raceName: '';
  public str: 0;
  public agi: 0;
  public vig: 0;
  public int: 0;
  public ess: 0;

  public selectedRace: any;

  // public mensagem: string = '';

  public races: any [];

  public constructor() {}

  ngOnInit(): void {
    this.races = [];

    const human = {
      raceName: 'Human',
      str: 6,
      agi: 6,
      vig: 6,
      int: 6,
      ess: 6,
    };

    const gnome = {
      raceName: 'Gnome',
      str: 4,
      agi: 7,
      vig: 6,
      int: 9,
      ess: 6,
    };

    const beorn = {
      raceName: 'Beorn',
      str: 8,
      agi: 4,
      vig: 8,
      int: 7,
      ess: 6,
    };

    const minotaur = {
      raceName: 'Minotaur',
      str: 9,
      agi: 4,
      vig: 9,
      int: 6,
      ess: 4,
    };

    const draconian = {
      raceName: 'Draconian',
      str: 8,
      agi: 5,
      vig: 8,
      int: 6,
      ess: 5,
    };

    const dwarfAnvil = {
      raceName: 'Anvil Dwarf',
      str: 7,
      agi: 5,
      vig: 8,
      int: 7,
      ess: 5,
    };

    const dwarfHammer = {
      raceName: 'Hammer Dwarf',
      str: 8,
      agi: 5,
      vig: 9,
      int: 6,
      ess: 4,
    };

    const elfWinged = {
      raceName: 'Winged Elf',
      str: 5,
      agi: 8,
      vig: 5,
      int: 7,
      ess: 7,
    };

    const elfFlame = {
      raceName: 'Flame Elf',
      str: 6,
      agi: 7,
      vig: 6,
      int: 7,
      ess: 6,
    };

    const elfForest = {
      raceName: 'Forest Elf',
      str: 6,
      agi: 7,
      vig: 6,
      int: 6,
      ess: 7,
    };

    const elfDark = {
      raceName: 'Dark Elf',
      str: 5,
      agi: 7,
      vig: 6,
      int: 7,
      ess: 7,
    };

    const elfGolden = {
      raceName: 'Golden Elf',
      str: 5,
      agi: 7,
      vig: 6,
      int: 7,
      ess: 7,
    };

    const elfSilver = {
      raceName: 'Silver Elf',
      str: 5,
      agi: 7,
      vig: 6,
      int: 8,
      ess: 6,
    };

    const elfHalf = {
      raceName: 'Half Elf',
      str: 6,
      agi: 7,
      vig: 6,
      int: 6,
      ess: 6,
    };

    const garou = {
      raceName: 'Garou',
      str: 7,
      agi: 7,
      vig: 6,
      int: 5,
      ess: 6,
    };

    const gibborim = {
      raceName: 'Gibborim',
      str: 10,
      agi: 4,
      vig: 9,
      int: 4,
      ess: 5,
    };

    const gibborakk = {
      raceName: 'Gibborakk',
      str: 10,
      agi: 4,
      vig: 9,
      int: 4,
      ess: 5,
    };

    const koboldCanis = {
      raceName: 'Kobold Canis',
      str: 4,
      agi: 10,
      vig: 6,
      int: 5,
      ess: 7,
    };

    const rhorosPanteri = {
      raceName: 'Rhoros Panteri',
      str: 7,
      agi: 7,
      vig: 6,
      int: 5,
      ess: 6,
    };

    const rhorosFelini = {
      raceName: 'Rhoros Felini',
      str: 7,
      agi: 7,
      vig: 6,
      int: 5,
      ess: 6,
    };

    const ursar = {
      raceName: 'Ursar',
      str: 7,
      agi: 5,
      vig: 7,
      int: 5,
      ess: 8,
    };

    const orcHalf = {
      raceName: 'Half Orc',
      str: 8,
      agi: 5,
      vig: 7,
      int: 5,
      ess: 6,
    };

    this.races.push(human, gnome, beorn, minotaur,
      draconian, elfWinged, elfFlame, elfForest,
      elfDark, elfSilver, elfGolden, dwarfHammer,
      dwarfAnvil, garou, elfHalf, koboldCanis,
      ursar, gibborim, gibborakk, rhorosPanteri,
      rhorosFelini, orcHalf);
    console.log(this.races);
    console.log(this.selectedRace);
    }

  public arredondaValor(a: number, b: number, ): number {
    return Math.floor((a + b) / 4);
  }
  public resiCalc(a: number, b: number, ): number {
    return Math.floor(((a * 2) + b) / 3);
  }

}
