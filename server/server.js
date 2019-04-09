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

const getMaxId = list => Math.max(...list.map(e => e.id));

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
        const list = JSON.parse(data);
        const newElement = {
          id: (getMaxId(list) + 1) || 0,
          label: JSON.parse(bodyStr),
          idDone: false
        }

        writeFile(filepathStorage, list.concat(newElement));
        res.send(bodyStr);
      });
  });
});

app.post('/removeData', (req, res) => {
  let bodyStr = '';
  req.on("data",function(chunk){
      bodyStr += chunk.toString();
  });
  req.on("end",function(){
      fs.readFile(filepathStorage, function(err, data){
        if(err){
          throw err;
        }
        const elemetToRemove = JSON.parse(bodyStr);
        const list = JSON.parse(data);

        writeFile(filepathStorage, list.filter(e => e.id !== elemetToRemove));
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
