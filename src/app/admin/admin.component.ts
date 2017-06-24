import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';
import { EditAlbumComponent } from '../edit-album/edit-album.component';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent implements OnInit {
  title:any;
  artist:any;
  audio:any;
  description:any;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
  }


  submitForm() {
    let album = {
      title: this.title,
      artist: this.artist,
      image: "",
      audio: this.audio || "",
      description: this.description || ""
    }
  }

}
