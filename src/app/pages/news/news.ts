import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// News interface
interface Newsinf {
  title: string;
  img: string;
  slideImg: string;
  keywords: string;
  desc: string;
  newsAuthor: string;
  newsDate: string;
  text: string;
  isShown: boolean;
  isSlide: boolean;
  newsViews: number;
  newsLikes: number;
}

let now = new Date();

@Component({
  selector: 'app-news',
  templateUrl: './news.html',
  styleUrls: ['./news.css']
})
export class NewsPage {
  newsCol: AngularFirestoreCollection<Newsinf>;
  items: Observable<Newsinf[]>;

  title: string;
  img: string;
  slideImg: string;
  keywords: string;
  desc: string;
  newsAuthor: string = 'Abdullah Zaher';
  newsDate: Date = now;
  text: string;
  isShown: boolean;
  isSlide: boolean;
  newsViews: number = 0;
  newsLikes: number = 0;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.newsCol = this.afs.collection('news');
    this.items = this.newsCol.valueChanges();
  }

  addNews() {
    this.afs.collection('news').add({'title': this.title, 'img': this.img, 'slideImg': this.slideImg, 'keywords': this.keywords, 'desc': this.desc, 'newsAuthor': this.newsAuthor, 'newsDate': this.newsDate, 'text': this.text, 'isShown': this.isShown, 'isSlide': this.isSlide, 'newsViews': this.newsViews, 'newsLikes': this.newsLikes});

    this.title = '';
    this.img = '';
    this.slideImg = '';
    this.keywords = '';
    this.desc = '';
    this.text = '';
  }



}
