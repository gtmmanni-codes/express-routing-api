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

## Features

Express.js Routing
GET and POST methods
Route Parameters (req.params)
Query Parameters (req.query)
Body Parameters (req.body)
Application Level Middleware
Route Level Middleware
Environment Variables using .env
JSON Data Handling with express.json()

## API endpoints

| Method | Route       | Description                      |
| ------ | ----------- | -------------------------------- |
| GET    | `/`         | Home Route                       |
| GET    | `/news/:id` | Dynamic Route using Params       |
| GET    | `/product`  | Protected Route using Middleware |
| POST   | `/about`    | Send Body and Query Data         |

## Concepts Covered

REST API Basics
Express Server Setup
Middleware in Express.js
Secure Data Handling
Environment Configuration
Dynamic Routing

## Nodemon

I used Nodemon for automatic server restarting during development. It helps save time by restarting the Node.js server whenever changes are made in the project files, so there is no need to manually stop and restart the server every time.
