const express = require ('express');
const app = express();

app.get('/deffinition/api/v1/Express', (req, res) => {
    res.send('Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks')
  })

app.listen(4300, function(){
    console.log("Simple App is running")
})