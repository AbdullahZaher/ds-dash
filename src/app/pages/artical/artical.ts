import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Artical interface
interface Articleinf {
  title: string;
  date: string;
  img: string;
  author: string;
  keywords: string;
  essay: string;
}

let now = new Date();

@Component({
  selector: 'app-artical',
  templateUrl: './artical.html',
  styleUrls: ['./artical.css']
})
export class ArticalPage {
  articleCol: AngularFirestoreCollection<Articleinf>;
  items: Observable<Articleinf[]>;

  title: string;
  date:  Date = now;
  img: string;
  author: string;
  keywords: string;
  essay: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.articleCol = this.afs.collection('articles');
    this.items = this.articleCol.valueChanges();
  }

  addArti() {
    this.afs.collection('articles').add({'title': this.title, 'date': this.date, 'img': this.img, 'author': this.author, 'keywords': this.keywords, 'essay': this.essay});
    this.title = '';
    this.img = '';
    this.author = '';
    this.keywords = '';
    this.essay = '';
  }

}
