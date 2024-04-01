import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import bcrypt from "bcryptjs";
import multer from "multer";

const app = express();
const port = 3000;

let user = {};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Project',
    password: '1234',
    port: 5432,
});
  
db.connect();

app.post("/api/signUp",async (req,res)=>{
    try{
        console.log("hi");
        const salt= await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password,salt);
        await db.query('INSERT INTO users(name,department,email_id,password) VALUES ($1,$2,$3,$4);',[req.body.name,req.body.department,req.body.email,password]);
        console.log(req.body);
        const result = await db.query('SELECT * FROM users WHERE email_id = $1',[req.body.email]);
        // console.log(result);
        const isPasswordCorrect = await bcrypt.compare(req.body.password,result.rows[0].password);
        if(!isPasswordCorrect){
            throw new Error('Wrong Password');
        }
        user = result.rows[0];
        res.sendStatus(200);
    }
    catch(err){
        res.sendStatus(500);
        console.log("Error in signup : ", err);
    }
    // db.end();
});

app.post("/api/login", async (req, res) => {
    try{
        const result = await db.query('SELECT * FROM users WHERE email_id = $1',[req.body.email]);
        // console.log(result);
        const isPasswordCorrect = await bcrypt.compare(req.body.password,result.rows[0].password);
        if(!isPasswordCorrect){
            throw new Error('Wrong Password');
        }
        user = result.rows[0];
        console.log(result.rows);
        res.json(result.rows[0]);
    }catch(e){
        // res.json({msg:e.message});
        // console.log();
        // res.json({error : e})
        // console.log(e);
        res.status(400).json({msg : e.message});
    };
});

app.get("/api/profile",(req,res)=>{
  res.json(user);
})

app.post('/api/upload', upload.single('images'), async (req, res) => {
    try {
        console.log(req.file);
      const image = req.file.buffer; // get image buffer
      const result = await db.query('INSERT INTO post (image_data,description,user_id) VALUES ($1,$2,$3)', [image,req.body.description, user.id]);
      res.json('Image uploaded successfully!');
    } catch (err) {
      console.error('Error uploading image:', err);
      res.sendStatus(500);
    }
    // db.end();
  });

  app.get('/api/image/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await db.query('SELECT image_data FROM post WHERE id = $1', [id]);
  
      if (result.rows.length === 0) {
        res.status(404).send('Image not found');
        return;
      }
  
      // Send the image data as response
      res.set('Content-Type', 'image/jpeg'); // Assuming JPEG format, adjust as per your image type
      res.send(result.rows[0].image_data);
    } catch (err) {
      console.error('Error fetching image:', err);
      res.status(500).send('Error fetching image');
    }
});

  app.get('/api/images', async (req, res) => {
    try {
      // SQL query to select image data and descriptions

      const query = 'SELECT u.id as userID, u.name, u.club_name, post.image_data, post.id, post.description FROM users as u join post on post.user_id = u.id';

      // const query = 'SELECT id, image_data, description FROM post ';
      // const query = 'SELECT u.id ,u.name, u.club_name, post.image_data, post.id from users as u join post on post.user_id = u.id; '

      // Execute the query
      const result = await db.query(query);
      
      // Send the retrieved data as JSON in the response
      res.set('Content-Type', 'image/jpeg');
      // console.log(result.rows);
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching images:', error);
      res.sendStatus(500);
    }
  });

  app.post('/api/add',async (req,res)=>{
    try{
      console.log(req.body.clubName,req.body.email);
      const query = 'update users set position = $1 , club_name = $2 where email_id = $3;';
      await db.query(query,['MEMBER',user.club_name,req.body.email]);
      console.log("Sucessfully Updated");
      res.sendStatus(200);
    }
    catch(e){
      console.log("Error");
      res.sendStatus(500);
    }
  });

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});