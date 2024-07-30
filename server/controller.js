const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const home = async (req,res)=>{
  res.send("Welcome");
}

const signUp = async (req,res)=>{
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll = client.db('event').collection('signup');
    const oldUser = await coll.findOne({email:req.body.email})
    console.log(oldUser)
    if(oldUser){
     return res.send("User Already Exists");
    }
    const data = req.body;
    data.password = await bcrypt.hash(data.password,5)
    await coll.insertOne(data);
    client.close();
   return res.send("Signup Ok Now u can Login")
  } catch (error) {
    res.send("Internal Server Error");
  }

}

const signIn = async (req,res)=>{
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll = client.db('event').collection('signup');
    const result = await coll.findOne({email:req.body.email})
    client.close();
    if(result){
      const isvaliduser = await bcrypt.compare(req.body.password,result.password);
      if(isvaliduser)
        return res.json({valid:1});
      else
        return res.json({valid:0});
    }
    else{
      return res.json({valid:0})
    }
  } catch (error) {
    return res.send("Internal Server Error");
  }

}

const addEvent = async (req,res)=>{
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll = client.db('event').collection('eventtable');
    const data = req.body;
    console.log(data.startdate);
    data.startdate = new Date(data.startdate).toLocaleString();
    await coll.insertOne(data);
    client.close();
    res.send("Inserted")
  } catch (error) {
    res.send("Internal Server Error");
  }

}

const searchName = async (req,res)=>{
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll = client.db('event').collection('eventtable');
    const result = await coll.find({eventname:req.body.eventname})
    data =await result.toArray();
    console.log(data)
  res.json(data);
}

const searchDate = async (req,res)=>{
  const client = await MongoClient.connect('mongodb://localhost:27017/');
  const coll = client.db('event').collection('eventtable');
  const result = await coll.find({startdate:{$eq: new Date(req.body.startdate).toLocaleString()}})
  data =await result.toArray();
  console.log(data)
res.json(data);
}

module.exports = {home,signUp,addEvent,searchName,searchDate,signIn};