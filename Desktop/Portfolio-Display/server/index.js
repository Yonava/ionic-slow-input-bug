const app = require('express')();

app.get('/', (req, res) => {
  res.status(200).send({
    message: "wE COONNECTED THW BACKEEND@!"
  })
});

const port = 1000;
app.listen(port, () => {
  console.log(`we are live on port ${port}`)
});

// create (post)
// read (get)
// update (put)
// destroy (delete)