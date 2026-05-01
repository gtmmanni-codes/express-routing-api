# express-routing-api

Here’s a **concise version under 350 characters**: **Description:** Basic backend project using Node.js and Express.js that demonstrates routing and handling HTTP requests and responses. Includes simple endpoints like `/`, `/news`, and `/products`, each returning JSON data, helping beginners understand core API and server concepts.

Here I used get method we can easily access API on browser . Basically, we can display data easily.

In this code I used get ,post method for routing and inserted data in form of json with body parameter, URL with query parameter and using params parameter which is dynamic way.

for body I used : req.body
for query I used : req.query
for params I used : req.params.id

imp point : we can't access json data direct so I used : app.use(express.JSON())

To pass the middleware you need to type correct token which is 12345

How?
You need to write URL : localhost:8000/about?token=12345
instead of "about" you can access whatever you want.

We can create multiple middleware .

Previous was App level middleware.

Now, we create route level middleware by adding middleware directly in .get method i.e. now all other runs normally but if we want to run /product we need to pass middleware.

Now , adding .env file to keep data secure by storing environment variable or important variable in separate file by using require("dotenv").config()
and to access that variable we can use process.env.[variable name]
