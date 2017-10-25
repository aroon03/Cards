import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CardData {
  constructor(private storage: Storage) {
  };
  remainderOptions:object = [
    {
      "value": 0,
      "description": "None"
    },
    {
      "value": 1,
      "description": "A Day Before"
    },
    {
      "value": 7,
      "description": "A Week Before"
    },
    {
      "value": 360,
      "description": "An Year Before"
    }
  ];

  cards:object = [
      {
        "src": "../assets/imgs/aa_mc_vz.png",
        "name": "Sao Paulo",
        "id": "vkejfbg4o",
        "expiry": "2017-10-11",
        "remainder" : 0
      },
      {
        "src": "../assets/imgs/aa_mc_vz.png",
        "name": "Rebublisc Bank",
        "id": "ejfbg4o",
        "expiry": "2018-01-02",
        "remainder" : 7
      },
      {
        "src": "../assets/imgs/v.png",
        "name": "City Bank",
        "id": "vkerr44o",
        "expiry": "2027-09-29",
        "remainder" : 360
      }
    ];

    storeCards () {
      this.storage.set("cards",  JSON.stringify(this.cards))
    }
}
