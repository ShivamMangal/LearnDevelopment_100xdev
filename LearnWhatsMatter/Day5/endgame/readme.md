Flash Message : jab bhi aap kisi ejs page ko dekhege waha par aapko kisi prakaar ka koi information
dena hai, wo kehlata hai flash messages, they are more like good looking alerts,
warning and descriptions

flash(useExample)-> like login page pr login nhi hua to uska error dusre route or dikana ha


install connect-flash
make sure you setup express-session                        //app.js ma use kia ha
make sure you put connect flash in a app.use function      //app.js ma use kia ha
kisi bhi route mein aap ko flash create karna hai
kisi bhi doosre route par app use chalane ka try karein

AAP CONNECT FLASH KO USE NAHI KR SKTE BINA EXPRESS SESSION

-flash message aapko ye allow krte hai ki aap ek route mein bane.     //index.js ma use kia ha
huye data ko doosre route mein use kr sko



intermediate mongodb:
• How can I perform a case-insensitive search in Mongoose?
• How do I find documents where an array field contains all of a set of values?
• How can I search for documents with a specific date range in Mongoose?
• How can I filter documents based on the existence of a field in Mongoose?
• How can I filter documents based on a specific field's length in Mongoose?

1.
RegExp(search,flags):ye use hota ha jab hame case sensitive find krna ho jese shivam - Shivam agr S bda ha to db ma find function se nhi milega so we use RegExp

Note: but sirf ye use krne ek problem ha like ek name ha RegExp("shiva","i"),shiva , shivam , shivamangal so ye sare de dega kyki sabma shiva aa reha ha so then we 
use:

^ - shurat aasi ho
$ - ant aasa ho
like this = ^shiv$

Authentication and Authorization :

install these packages:
npm i passport passport-local passport-local-mongoose mongoose express- session

write app.js code first in app.js file and write it after view engine and before logger

setup users. js then properly in index.js try register first and then other codes as well











