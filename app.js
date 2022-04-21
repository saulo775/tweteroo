import express from "express";
import cors from "cors"

const app = express();

let users = [];
let tweets = [];

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());
app.use(cors());

app.post("/sign-up", (req, res)=>{
    const user = req.body;
    users.push(user);

    res.statusMessage = "OK"
    res.status(200).end();
});

app.post("/tweets", (req, res)=>{
    const {username, tweet} = req.body;
    let user = users.find((element)=>username === element.username)
    let avatar = user.avatar

    const dataTweet = {
        username,
        avatar,
        tweet,
    }

    tweets.push(dataTweet);

    res.statusMessage = "OK"
    res.status(200).end();
});

app.get("/tweets", (req, res)=>{
    // let stop = 0;
    // let newTweets = []
    // for (let i = tweets.length; i >= 0; i--) {
    //     if (stop >=10) {
    //         return;
    //     }else{
    //         newTweets.push(tweets[i]);
    //     }
    //     stop++; 
    // }
    res.send(tweets);
    // console.log(newTweets);
})

app.listen(5001, ()=>{
    console.log("Oia o bixão ligado na porta 5001")
});