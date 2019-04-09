const express = require('express');
const server = express();
server.use(express.json());
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
const port = process.env.port || 5000;




server.post('/getlink/:name', async (req,res) => {
  let name = req.body.name;
  name = name.toLowerCase();
  let words = name.split(' ');
  let formattedName = "";
  for (let i=0; i<words.length; i++){
    formattedName += words[i];
    if(i!=words.length-1)
      formattedName += '-';
  }
  let link = "https://www.blinkist.com/en/nc/daily/reader/" + formattedName + "-en";
  res.send(link);
});


server.get ('/', (req,res) => {
	res.sendFile("/Users/Anant/Desktop/blinkist/index.html");
	});


server.listen(port, () => {
  console.log(`\nServer listening on port: ${port}\n`);
});
