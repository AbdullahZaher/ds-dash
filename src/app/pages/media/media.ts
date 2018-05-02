import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Media interface
interface Mediainf {
  file: string;
  title: string;
  link: string;
  comment: string;
}

@Component({
  selector: 'app-media',
  templateUrl: './media.html',
  styleUrls: ['./media.css']
})
export class MediaPage {
  mediaCol: AngularFirestoreCollection<Mediainf>;
  items: Observable<Mediainf[]>;
  file: string;
  title: string;
  link: string;
  comment: string;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.mediaCol = this.afs.collection('media');
    this.items = this.mediaCol.valueChanges();
  }

  addMedia() {
    this.afs.collection('media').add({'file': this.file, 'title': this.title, 'link': this.link, 'comment': this.comment});
    this.title = '';
    this.link = '';
    this.comment = '';
  }
}
