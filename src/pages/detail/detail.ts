import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardData } from '../../providers/cardData';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {
  cardDetail:object;
  remainderOptions:object;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cardData: CardData) {
    console.log("DetailPage parms", this.navParams.data)
    this.cardDetail = this.navParams.data;
    this.remainderOptions = this.cardData.remainderOptions;
    console.log('Card Detail', this.cardDetail);
  }

  onSelectChange(selectValue) {
    console.log('Selected Value', selectValue)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  submitForm() {
    console.log('ionViewDidLoad DetailPage');
  }

}
