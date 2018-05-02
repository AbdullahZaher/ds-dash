import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CKEditorModule } from 'ng2-ckeditor';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home';
import { NewsPage } from './pages/news/news';
import { ArticalPage } from './pages/artical/artical';
import { MatchesPage } from './pages/matches/matches';
import { MediaPage } from './pages/media/media';
import { TablesPage } from './pages/tables/tables';

const appRoutes : Routes=[
  {path:'', component:HomePage},
  {path:'news', component:NewsPage},
  {path:'artical', component:ArticalPage},
  {path:'matches', component:MatchesPage},
  {path:'tables', component:TablesPage},
  {path:'media', component:MediaPage}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    NewsPage,
    ArticalPage,
    MatchesPage,
    MediaPage,
    TablesPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
