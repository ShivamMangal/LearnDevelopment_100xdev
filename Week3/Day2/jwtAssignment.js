// Write a function that takes in a username and password and returns a JWT token with the username encoded inside an object. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
// Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
// Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise

const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);


function signJwt(username, password) {
     const userNameResponse = emailSchema.safeParse(username);
     const passwordResponse = passwordSchema.safeParse(password);
     if(!userNameResponse.success||!passwordResponse.success){
        return null;
     }
     const token = jwt.sign({username},jwtPassword);
     return token;
}

const ans1 = signJwt('shivam@gmail.com','15123464');
console.log(ans1);

function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}
const ans2 = decodeJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoaXZhbUBnbWFpbC5jb20iLCJpYXQiOjE3NjE0OTM5Nzd9.IWATK_iHj7bpkVDJ6cgGg4uxiPzq8ibqxW0iDDvUxyM');
console.log(ans2);


function verifyJwt(token) {
 
}
