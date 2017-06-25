import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';
import { EditAlbumComponent } from '../edit-album/edit-album.component';
import { AuthComponent } from '../auth/auth.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

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

  constructor(private albumService: AlbumService, private database: AngularFireDatabase) {
  }

  ngOnInit() {

    // FUNCTION TO UPDATE USER DURING FILE UPLOAD PROCESS
    var fileButton = document.getElementById('imageUpload');
    var message = document.getElementById('progress');
    var fileName;
    var fileImg;

    // Listen for file selection
    fileButton.onchange = (e: any) => {
      // get file
      let file = e.target.files[0];
      // create storage ref
      var storageRef = firebase.storage().ref('uploads/' + file.name);
      // create task to show progress
      var task = storageRef.put(file);
      
      // update progress
      task.on('state_changed',
        async function progress(snapshot) {
          // this will update "progress bar"
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percentage);
          message.innerText = "uploading";
          // when file is uploaded, set filename
          if (percentage === 100) {
            fileName = snapshot.metadata.name;
            fileImg = snapshot.downloadURL;
          }
        },
        function error(err) {
          // error handling
        },
        async function complete() {
          // executes when file is finished uploading
          message.style.color = "#00b200";
          message.innerHTML = `<img id="preview-img" src="${fileImg}"> ${fileName} - complete!`;
          document.getElementById('preview-img').style.height = "2em";
        }

      );
    };
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
