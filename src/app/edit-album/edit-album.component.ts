import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AlbumToEditComponent } from './album-to-edit/album-to-edit.component';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})
export class EditAlbumComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) {
    this.albums = this.albumService.getAlbums();
  }

  ngOnInit() {
  }

}
