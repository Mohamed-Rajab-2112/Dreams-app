import { Injectable } from '@angular/core';

export class NightDreamsService {

  private dreamsAndNightmares = [
    {
      name: 'Good Dream',
      tag: 'Good',
      description: 'I have my own lemo'
    }, {
      name: 'I travelled',
      tag: 'travel',
      description: 'I live at Austria'
    }
  ];

  constructor() { }

  getDreamsAndNightMares() {
    return this.dreamsAndNightmares;
  }

saveDreamOrNightmare(dreamOrNightmare) {
this.dreamsAndNightmares.push(dreamOrNightmare);
}

}
