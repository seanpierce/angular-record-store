import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../album.model';

@Component({
  selector: 'app-album-to-edit',
  templateUrl: './album-to-edit.component.html',
  styleUrls: ['./album-to-edit.component.css']
})
export class AlbumToEditComponent implements OnInit {
  @Input() album: Album;
  constructor() { }

  ngOnInit() {
  }

}
