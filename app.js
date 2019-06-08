const express = require('express');

const app = express();

var cors = require('cors');

app.use(cors());

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

app.post('/signin', function (req, res) {
  var user_name = req.body.login;
  console.log(req);
  var password=req.body.password;
  if(user_name=='admin' && password=='admin'){
      res.send('success');
  }
  else{
    res.send('Failure');
  }
})
