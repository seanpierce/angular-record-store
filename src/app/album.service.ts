import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class AlbumService {
  folder:any;

  // declares firebase information as an array
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    // call database (which is what we named our instance of AngularFireDatabase object in the constructor)
    // then call .list to specify we're gathering a list of multiple things
    // pass in albums to specify which list of data we'd like to get
    this.albums = database.list('albums');
    // set upload folder name
    this.folder = 'uploads';
  }

  getAlbums() {
    return this.albums;
  }

  saveAlbum(album) {
    // create root reference
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('imageUpload')).files[0]]) {
      let path = `/${this.folder}/${selectedFile.name }`;
      let task = storageRef.child(path);
      task.put(selectedFile).then((snapshot) => {
        // set image url
        album.image = snapshot.downloadURL;
        // push to db
        return this.albums.push(album);
      });
    }
  }

  getAlbumById(albumId){
    return this.database.object('albums/' + albumId);
  }

  updateAlbum(updatedAlbum) {
    var albumInDb = this.getAlbumById(updatedAlbum.$key);
    albumInDb.update({
      title: updatedAlbum.title,
      artist: updatedAlbum.artist,
      image: updatedAlbum.image,
      audio: updatedAlbum.audio,
      description: updatedAlbum.description
    });
  }

  deleteAlbum(deletedAlbum){
    var albumInDb = this.getAlbumById(deletedAlbum.$key);
    albumInDb.remove();
  }

}
