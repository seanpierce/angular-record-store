import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../album.model';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-album-to-edit',
  templateUrl: './album-to-edit.component.html',
  styleUrls: ['./album-to-edit.component.css'],
  providers: [AlbumService]
})
export class AlbumToEditComponent implements OnInit {
  @Input() album: Album;
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  updateAlbumToService(albumToUpdate) {
    this.albumService.updateAlbum(albumToUpdate);
  }

  deleteAlbumToService(albumToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.albumService.deleteAlbum(albumToDelete);
    }
  }

}
