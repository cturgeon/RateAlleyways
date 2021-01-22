﻿###
LOGIN LOG OUT REGISTER
###

To access alleyway rating website users must first create an account with the register page.

Upon a successful creation of account users can login to website.

Notes:
    Access to rate alleyways is denied unless logged in.
    
    Passwords are salted on the backend.

###
API Documentation
###

# requests for alleyways array
Endpoint 
    GET https://alleyway.herokuapp.com/alleyways
Response
    responds with an array of all the alleyways

# create an alleyway
Endpoint
    POST https://alleyway.herokuapp.com/alleyways
Response
    creates a new alleyway at posts it the alleyways array

# get specific alleyway
Endpoint 
    GET https://alleyway.herokuapp.com/alleyways/:id
Response
    responds with alleyway of specific ID

# update alleyway
Endpoint 
    PUT https://alleyway.herokuapp.com/alleyways/:id
Response
    allows edits to body

# destroy alleyway
Endpoint 
    DELETE https://alleyway.herokuapp.com/alleyways/:id
Response
    deletes specific alleyway by ID


