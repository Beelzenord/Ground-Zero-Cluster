import express from 'express'
import {json} from 'body-parser'

const app = express();
app.use(json());

app.get('/',(req,res)=>{
    console.log('here is rseq: ', req);
    res.send('hi there');
});
app.get('/api/users/',(req,res)=>{
    console.log('here is rseq: ', req);
    res.send('hi there');
});
app.get('/api/users/currentuser',(req,res)=>{
    console.log('here is rseq: ', req);
    res.send('hi there');
});

app.listen(3123, ()=> {
    console.log('Listening on port 3000!!!!!!!?');
});