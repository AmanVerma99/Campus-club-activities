import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import bcrypt from "bcryptjs";
import multer from "multer";

const app = express();
const port = 3000;

// let user = {};

let userId;
let user = {
  name:'',
  department:'',
  email_id:'',
  position:'',
  club_name:'',
  about:'',
  location:'',
  age:'',
  image:''
};

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
        // user = result.rows[0];
        user.name = result.rows[0].name;
        user.email_id = result.rows[0].email_id;
        user.department = result.rows[0].department;
        user.club_name = result.rows[0].club_name;
        user.position = result.rows[0].position;
        console.log(user.id);

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
        // user = result.rows[0];
        user.name = result.rows[0].name;
        user.email_id = result.rows[0].email_id;
        user.department = result.rows[0].department;
        user.club_name = result.rows[0].club_name;
        user.position = result.rows[0].position;
        // console.log(result.rows);
        userId = result.rows[0].id;
        console.log(userId);
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
        // console.log(req.file);
      const image = req.file.buffer; // get image buffer
      // console.log(user.id);
      // console.log(req.user);
      const result = await db.query('INSERT INTO post (image_data,description,user_id) VALUES ($1,$2,$3)', [image,req.body.description, userId]);
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

  app.get('/api/profile/:email', async (req, res) => {
    try {
      const id = req.params.email;
      const result = await db.query('SELECT profile_image FROM user_profile WHERE email = $1', [id]);
  
      if (result.rows.length === 0) {
        res.status(404).send('Image not found');
        return;
      }
  
      // Send the image data as response
      res.set('Content-Type', 'image/jpeg'); // Assuming JPEG format, adjust as per your image type
      console.log("How");
      res.send(result.rows[0].profile_image);
    } catch (err) {
      console.error('Error fetching image:', err);
      res.status(500).send('Error fetching image');
    }
});

  app.get('/api/images', async (req, res) => {
    try {
      // SQL query to select image data and descriptions

      const query = 'SELECT u.id as userID, u.name, u.club_name,u.email_id, post.image_data, post.id, post.description FROM users as u join post on post.user_id = u.id';

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

  app.post('/api/club',async (req,res)=>{
    try{
      const query = 'SELECT u.id ,u.name, u.club_name, post.image_data, post.id from users as u join post on post.user_id = u.id where u.club_name = $1;'
      const result = await db.query(query,[req.body.club_Name]);
      console.log(req.body.club_Name);
      const query1 = 'SELECT  * from users WHERE club_name = $1';
      const result1 = await  db.query(query1,[req.body.club_Name]);
      console.log("Extracted sucessfully");
      console.log(result.rows);
      res.json({posts:result.rows, member:result1.rows});

    }
    catch(e){
      console.log("Error");
      res.sendStatus(400);
    }
  });

  app.post("/api/update",upload.single('image'), async (req,res)=>{
    console.log(req.body);
    const images = req.file.buffer; 
    console.log(images);
    try{
      const search = await db.query("select * from users where email_id = $1",[req.body.email]);
      if(search.rows.length == 0){
        console.log("Incorrect email");
        res.sendStatus(404);
      }
      //await db.query("INSERT INTO user_profile(email, location, age, profile_image, about) VALUES ($1, $2, $3, $4, $5)", [req.body.email, req.body.location, req.body.age, image, req.body.about]);
      console.log("hello");
      const result = await db.query("select * from user_profile where email = $1",[req.body.email]);
      if(result.rows.length > 0){
        
        await db.query("delete from user_profile where email = $1",[req.body.email]);
      }
      await db.query("insert into user_profile (email,location,age,profile_image,about) values ($1,$2,$3,$4,$5)",[req.body.email,req.body.location,req.body.age,images,req.body.about]);
      user.about = req.body.about;
      user.location = req.body.location;
      user.age = req.body.age;
      user.image=images;
      res.sendStatus(200);

    }catch(e){
      console.log(e);
      res.sendStatus(400);
    }
  })

  app.get("/api/dashboard/:email",async (req,res)=>{
    const email = req.params.email;
    const profile = await db.query("select * from user_profile where email = $1",[email]);
    const user = await db.query("select * from users where email = $1",[email]);
    res.json({user_details:user.rows[0],profile_details:profile.rows[0]});
  })
  

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});