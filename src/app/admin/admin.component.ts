import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';
import { EditAlbumComponent } from '../edit-album/edit-album.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string, image: string, audio: string) {
    var newAlbum: Album = new Album(title, artist, description, image, audio);
    this.albumService.addAlbum(newAlbum);
  }

}
