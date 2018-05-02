import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Matches interface
interface Matinf {
  league: string;
  home: string;
  home_bdg: string;
  away: string;
  away_bdg: string;
  day: string;
  time: string;
  field: string;
  audi: string;
  ref: string;
  tv: string;
  comm: string;
  tag: string;
}

@Component({
  selector: 'app-matches',
  templateUrl: './matches.html',
  styleUrls: ['./matches.css']
})
export class MatchesPage implements OnInit {
  matchesCol: AngularFirestoreCollection<Matinf>;
  match: Observable<Matinf[]>;

  league: string;
  home: string;
  home_bdg: string;
  away: string;
  away_bdg: string;
  day: string;
  time: string;
  field: string;
  audi: string;
  ref: string;
  tv: string;
  comm: string;
  tag: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.matchesCol = this.afs.collection('matches');
    this.match = this.matchesCol.valueChanges();
  }

  addMat() {
    this.afs.collection('matches').add({
      'league': this.league,
      'home': this.home,
      'home_bdg': this.home_bdg,
      'away': this.away,
      'away_bdg': this.away_bdg,
      'day': this.day,
      'time': this.time,
      'field': this.field,
      'audi': this.audi,
      'ref': this.ref,
      'tv': this.tv,
      'comm': this.comm,
      'tag': this.tag
    });

    this.league = '';
    this.home = '';
    this.home_bdg = '';
    this.away = '';
    this.away_bdg = '';
    this.day = '';
    this.time = '';
    this.field = '';
    this.audi = '';
    this.ref = '';
    this.tv = '';
    this.comm = '';
    this.tag = '';

  }
}
