import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {

  // declares firebase information as an array
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    // call database (which is what we named our instance of AngularFireDatabase object in the constructor)
    // then call .list to specify we're gathering a list of multiple things
    // pass in albums to specify which list of data we'd like to get
    this.albums = database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId){
    return this.database.object('albums/' + albumId);
  }

}
