const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);


const uri =
  'mongodb+srv://bharanikarthikeyan:Karthiamma%401995@cluster-1.ieojxjm.mongodb.net/natours?retryWrites=true&w=majority&appName=Cluster-1';

mongoose
  .connect(uri, {

  })
  .then(() => {
    console.log(`DB connection successful!`);
  })
  .catch((err) => {
    console.error('Error connecting to DB:', err);
  });




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
