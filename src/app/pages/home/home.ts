import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { getLocaleDateFormat, FormatWidth } from '@angular/common';

// Note interface
interface Noteinf {
  noteText?: string;
  DateTime?: string;
}

interface PostId extends Noteinf {
  id: string;
}

let now = new Date();

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomePage {
  notesCol: AngularFirestoreCollection<Noteinf>;
  items: any;

  id: string;
  noteText: string;
  DateTime:  Date = now;

  constructor(private afs: AngularFirestore) {

   }

  ngOnInit() {
    this.notesCol = this.afs.collection('notes');
    // this.items = this.notesCol.valueChanges();
    this.items = this.notesCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Noteinf;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  addNote() {
    this.afs.collection('notes').add({'noteText': this.noteText, 'DateTime': this.DateTime});
    this.noteText = '';
  }

  deleteNote(noteId) {
    this.afs.doc('notes/'+noteId).delete();
  }

}
