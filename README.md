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
