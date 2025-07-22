# Song-Manager

this project uses Webpack as the module bulder.

# webpack setup info

Entry poing: src/index.js
Output Folder:dist/
Output file_name:index.bundle.js,

# loader a dependency used to compile file

babel-loader : Transpiles ES6+ and jsx
css-loader, style-loader: to load css files
file-loader or asset modules: for images/fonts

# plugins

# snippet code from package.json

"devDependencies": {
"@babel/core": "^7.28.0",
"@babel/preset-env": "^7.28.0",
"@babel/preset-react": "^7.27.1",
"babel-loader": "^10.0.0",
"dotenv-webpack": "^8.1.1",
"html-webpack-plugin": "^5.6.3",
"webpack-dev-server": "^5.2.2"
}

HtmlWebpackPlugin: injects bundle into index.html
CleanWebpackPlugin:cleans dist folder before build

# DevServer

uses webpack-dev-server on localhost:10000
Hot Modules Replacement enabled

# Getting started

Follow these steps to set up and run this project locally

## prerequisites

make sure you have

- [ Node.js] v10+ is recommended
- code editor vscode is recommended

# installation

1. clone the repository
   git clone https://github.com/birhanu-ma/Song-Manager.git
   cd Song-Manager
2. install dependencies
   npm install
   npm run serve

   this will start the project at https://localhost:10000
   to create a production-ready build
   npm run build
   the output will be in the dist/ folder

   # API Documentation

   This API logic fetches songs by aggregating data from three different endpoints: photos, albums, and users. Each "song" is constructed by combining a photo (as a base), the corresponding album, and the album's user (as the artist).

   1. GET /songs
      read/fetch song lists
      query parameters
      page : the page number to retrieve (default 1)
      limit : number of songs per page

   example:
   GET /songs?page=2&limit=10

   2. POST /albums
      create a new album used to simulate creating a song
      it returns the created album object

   3. DELETE/photos/:id
      Deletes a photo by ID used to simulate deleting a song
      URL param:
      . id - id of the song/photo to delete

   example:
   DELETE/photos/12

   4. PUT/:id
      updates an existing resource by ID
      URL param:
      . id - ID of the song to update

   example:
   PUT/23

## Private API_KEY should be stored in a .env file and accessed using the `process.env` object.

Example: const BASE_URL = process.env.API_KEY;
Do NOT hardcode or push your API key to the repository — it's not safe.
but I'm currently using a `public API, and for testing purposes`, I've pushed the API code directly to the repository.

## How I verified the code:

Ran the app locally and tested all CRUD operations (create, read, update, delete).
Used console.log() and Redux DevTools, profiling to check that actions and state updates worked as expected.
Checked API responses in the browser's Network tab.
Verified image URLs and pagination worked by logging data from API.
Fixed errors by debugging in the browser console.

# AI assisted

I received AI assistance to understand the structure and usage of Redux Saga in this project, including how to implement side effects like API calls.
