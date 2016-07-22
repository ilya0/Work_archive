# Authorization with JWT

First read through the following introduction and answer the following questions:

https://jwt.io/introduction/

- What is the JSON Web Token structure?
- Where is a JSON Web Token typically stored?
- Where should the JWT be sent?
- What's the format of the header containing a JWT?

Read through the node js implementation and answer the following questions:

https://github.com/auth0/node-jsonwebtoken

- What algorithm does jwt.sign default to?
- How do you create a token that expires in 90 seconds?
- What error is thrown if a token expires?

# Activity

- run `node seed.js` to create an admin user
- run the `demo_app` with `nodemon`
- add an event listener to the loginForm so that it prevents the default behavior
- when the form is clicked, perform an ajax request to POST the the email and password to '/token'
- Follow the code in the `token_controller` and change the jwt to expire in 90 seconds
- Save the ajax response in localStorage
- Add an event listener to "#access" that performs an ajax request to "/users"
- Add an authorization header to the ajax request formatted like "Authorization: Bearer TOKEN"
- Console.log the reponse
- If the token has expired display an error message on the page.

# Bonus

- Create a form to create a new user
- When the user clicks create, prevent the default behavior and use Ajax to create the new user
- Ensure that only requests with an Authorization token can create users
