import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [AlbumService]
})
export class CatalogComponent implements OnInit {
  // same as in our service, set albums equal to a special firebase object array
  albums;

  constructor(private router: Router,private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      //sort albums alphabetically by artist
      this.albums = data.sort(function(a, b) {
        if(a.artist < b.artist) return -1;
        if(a.artist > b.artist) return 1;
        return 0;
      });
    });
  }

  // this method takes a clicked album (passed in) and uses it's "id" to dynamically generate (and visit) a new route
  goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };

}
