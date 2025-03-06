// Create web server
// 1. Load the express module
const express = require('express');
const app = express();
// 2. Load the body-parser module
const bodyParser = require('body-parser');
// 3. Load the mysql module
const mysql = require('mysql');
// 4. Load the path module
const path = require('path');
// 5. Load the fs module
const fs = require('fs');
// 6. Load the comments.js module
const comments = require('./comments.js');
// 7. Load the users.js module
const users = require('./users.js');
// 8. Load the cors module
const cors = require('cors');
// 9. Load the bcrypt module
const bcrypt = require('bcrypt');
// 10. Load the jwt module
const jwt = require('jsonwebtoken');
// 11. Load the config module
const config = require('./config');
// 12. Load the jwt module
const jwtMiddleware = require('express-jwt');
// 13. Load the jwt module
const jwtAuthz = require('express-jwt-authz');
// 14. Load the jwt module
const jwksRsa = require('jwks-rsa');

// 15. Set the port
const port = 3000;
// 16. Set the secret
const secret = 'secret';

// 17. Set the mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'comments'
});

// 18. Connect to the mysql database
connection.connect(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected to the MySQL database');
    }
});

// 19. Set the cors options
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

// 20. Set the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 21. Set the cors
app.use(cors(corsOptions));

// 22. Set the public folder
app.use(express.static(path.join(__dirname, 'public')));

// 23. Set the comments routes
app.use('/comments', comments);

// 24. Set the users routes
app.use('/users', users);

// 25. Set the login route