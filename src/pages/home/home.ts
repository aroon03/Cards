import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DetailPage } from '../detail/detail';
import { CardData } from '../../providers/cardData';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards:any;
  constructor(public navCtrl: NavController, public cardData: CardData, private camera: Camera) {  
    this.cards = this.getCards()
    console.log('All Cards', this.cards)
  };
  
  getCards() {
      let val;
      val = this.cardData.cards;
      return val;
  }

  loadCardDetails (i) {
    console.log('Loading the detail Page')
    let newCard = this.cards[i]; 
    this.navCtrl.push(DetailPage, newCard)
  };

  takePicture () {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      let card = {
        "src": base64Image,
        "name": "",
        "id": "",
        "expiry": "",
        "remainder" : 0
      }
      this.navCtrl.push(DetailPage,card)
    }, (err) => {
    // Handle error
    })
  }
}