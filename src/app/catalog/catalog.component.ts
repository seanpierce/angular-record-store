import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [AlbumService]
})
export class CatalogComponent implements OnInit {

  albums: Album[];

  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  // this method takes a clicked album (passed in) and uses it's "id" to dynamically generate (and visit) a new route
  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };

}