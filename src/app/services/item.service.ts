import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

// Note interface
interface Noteinf {
  id?: string;
  noteText?: string;
  DateTime?: string;
}

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Noteinf>;
  items: Observable<Noteinf[]>;
  itemDoc: AngularFirestoreDocument<Noteinf>;

  constructor(public afs: AngularFirestore) {
    //this.items = this.afs.collection('items').valueChanges();
    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title','asc'));

    this.items = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Noteinf;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems(){
    return this.items;
  }

  addItem(item: Noteinf){
    this.itemsCollection.add(item);
  }

  deleteItem(item: Noteinf){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Noteinf){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }

}
