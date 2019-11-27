import { Component, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  @ViewChild('slidingItem', { static: true }) devotionList: IonList;

  posts = [
    {
      dateCreated: '2019-11-05 03:03:03',
      devotion: '<p>We are his heir and and co-heirs with christ</p>',
      excerpt:
        'These is what we are sure that he has bought us with a price and we have been washed in the blood',
      hide: false,
      id: '1',
      reference: 'The is a sample reference Mathew 4:17',
      title: 'We are His Pride and Glory'
    },
    {
      dateCreated: '2019-11-05 03:02:43',
      devotion:
        // tslint:disable-next-line: max-line-length
        'if there is anything every heart needs is the power of God to be able to live the way he is called us to live otherwise one is doom.',
      excerpt:
        'something with amazing grace that changes and makes new every creation',
      hide: false,
      id: '5',
      reference: 'The is a sample reference Roman 8:1-2',
      title: 'Waiting at his feet'
    }
  ];

  constructor() {

  }

  addpost(slidingItem:IonList, post){
    slidingItem.closeSlidingItems();
  }

  removePost(slidingItem:IonList, post, text){
    slidingItem.closeSlidingItems();

  }
}
