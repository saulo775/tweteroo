import express from "express";
import cors from "cors"

const app = express();

let users = [];
let allTweets = [];

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

    allTweets.push(dataTweet);

    res.statusMessage = "OK"
    res.status(200).end();
});

app.get("/tweets", (req, res)=>{
    let tweets = [];
    for (let i = allTweets.length-1; i >= 0; i--) {
        tweets.push(allTweets[i]);
        if (tweets.length>10) {
            tweets.pop();
        }
    }

    console.log(tweets)
    res.send(tweets);
})

app.listen(5000, ()=>{
    console.log("Servidor on-fire na porta 5000");
});