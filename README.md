# Node.js Project

## 1. index.js

using mongoose connected to the MongoDB
after imported company provided a csv file.

stored some values in .env file like MONGO_URI and SCRET_KEY

## 2. Modules
Developed Models 1. transaction model 2. user model

## 3. Routes

Developed Routes 1. transaction Routes for do neede CRUD operations on the DATABASE 2. user Routes for user register and user login

transaction routes 1.GET "/transactions" read all transactions 2.GET "transactions/:school_id" read transactions with school id 3. Get "transaction/:custom_order_id" status check 4.POST "transaction/:custom_order_id update status this method having authentication middileware 
authentication works taking the jwt_token and verifies it

## controllers 

Developed controllers 1. transaction controllers 2. user controllers 
transactions controller for control all the things of transactions
user controller for control user register and login and jwt_token generation

https://edviron-backend-jh1s.onrender.com/transactions for get all transactions

https://edviron-backend-jh1s.onrender.com/transactions/:school_id for get all transactions of school id

https://edviron-backend-jh1s.onrender.com/transaction/:custom_order_id for status check 

https://edviron-backend-jh1s.onrender.com/transaction/:custom_order_id for update status it needs jwt_token

https://edviron-backend-jh1s.onrender.com/register for register a new user in needs username and password

https://edviron-backend-jh1s.onrender.com/login for login a user in needs username and password