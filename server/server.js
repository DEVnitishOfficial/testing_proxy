import  express  from "express";

const app = express();

app.use(express.static('dist'))
// app.get('/',(req,res) => {
//     res.send('Server is ready')
// });
// 

// get a list of jokes
app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
          id: 1,
          title: "Why did the chicken cross the road?",
          content: "To get to the other side."
        },
        {
          id: 2,
          title: "What do you call a fish with no eyes?",
          content: "Fsh."
        },
        {
          id: 3,
          title: "Why don't scientists trust atomssssssssss?",
          content: "Because they make up everything."
        },
        {
          id: 4,
          title: "Parallel lines have so much in common.",
          content: "It's a shame they'll never meet."
        },
        {
          id: 5,
          title: "Why don't skeletons fight each other?",
          content: "They don't have the guts."
        }
      ]; 
      res.send(jokes)
})

const port = process.env.PORT || 3000 ; 

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})