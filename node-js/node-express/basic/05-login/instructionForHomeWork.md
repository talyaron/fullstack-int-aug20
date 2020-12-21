create a login page
the user will enter her username and password.
The server will check if the user is in the users array (on the server), and if the password that the user entered fits the password the user object (which is the users array)
if the there is a match, then the server send a cookie "userAuthorized" with maxAge of 30 seconds, and redirect the user to  the home page. 
the home page then check if the there is a cookie, 'userAuthorized', every 10 seconds. If the client do not have such a cookie, the page redirects to the login page.
