const fs = require('fs');
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

const filepathStorage = __dirname+"/dataStorage.json";

const getData = (request, response, path) => {
  fs.readFile(path, function(err, data){
    if(err){
      throw err;
    }
    console.log("getData: ", JSON.stringify(data));
    response.json(JSON.parse(data));
  });
}

app.get('/getData', (request, response) => {
   getData(request, response, filepathStorage);
});

const writeFile = (filepath, fileContent) => {
  fs.writeFile(filepath, JSON.stringify(fileContent), (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
  });
};

app.post('/addData', (req, res) => {
  let bodyStr = '';
  req.on("data",function(chunk){
      bodyStr += chunk.toString();
  });
  req.on("end",function(){
      fs.readFile(filepathStorage, function(err, data){
        if(err){
          throw err;
        }
        writeFile(filepathStorage, JSON.parse(data).concat(JSON.parse(bodyStr)));
        res.send(bodyStr);
      });
  });
});

app.post('/setData', (req, res) => {
  let bodyStr = '';
  req.on("data",function(chunk){
      bodyStr += chunk.toString();
  });
  req.on("end",function(){
      console.log(bodyStr);
      writeFile(filepathStorage, JSON.parse(bodyStr));
      res.send(bodyStr);
  });
});

app.listen(8081);
console.log("App served on: http://localhost:8081");