# Angular Record Store

Angular Record Store is an Angular application displaying the inventory of a local record store. The shop owner, as an authenticated user, can manage the shops inventory through an admin portal.

## Usage
* **Downloading and installation**
  ```
  $ git clone https://github.com/seanpierce/angular-record-store
  $ cd angular-record-store
  $ npm install
  $ bower install
  ```
* **Connecting Firebase to this app**
  * You will need to create a file to store your Firebase configuration information. Run:
  ```
  $ touch /src/app/api-keys.ts
  ```
  * Login to firebase and create your own project here https://firebase.google.com/
  Once logged in, click on 'Go To Console'.
  Then click 'Add project', give it a name, and select your region.
  Next, click 'Add Firebase to your web app'.
  Grab this block of code:
  ```javascript
  var config = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      projectId: "xxxx",
      storageBucket: "",
      messagingSenderId: "xxxx"
  };
  ```
  * Paste that code into the api-keys.ts file.
  * Replace "Your API info" with your new database information (in the Firebase console, this is located in Database > Overview > Add Firebase to your web app)
  * Next, set your database permissions in firebase by navigating to > Database > Rules:
  ```javascript
  {
      "rules": {
        ".read": true,
        ".write": "auth != null"
      }
  }
  ```
* **Running the app**

  ```
  $ ng serve # Visit the app at http://localhost:4200
  ```

### Questions, suggestions, issues?
get in touch - sumler.sean@gmail.com, or <a href="https://github.com/seanpierce/angular-record-store/issues/new">submit an issue</a>
