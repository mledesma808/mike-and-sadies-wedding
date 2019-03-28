# Mike and Sadie's Wedding

## How to run the site
1. Make sure node.js is installed.
https://nodejs.org/en/download/

2. Make sure npm is installed. 
https://www.npmjs.com/get-npm

From the npms docs, if you have downloaded Node.js then you automatically have npm installed on your machine.

check the versions of each by typing in your terminal window

```
node -v
```

```
npm -v
``` 

3. Make sure nodemon is installed. Nodemon will refresh your browser when the code changes.
https://nodemon.io/

```
npm install --g nodemon
```
This will install a global variable, that is ok and as intended. 

4. After those are installed, head to the github repo and clone the ssh key. 
https://github.com/jmarzu/mike-and-sadies-wedding. There is a green button that says `Clone or Download` in the top right of the file table for the repo. Grab the ssh key and go to your directory in your terminal where you want the code to be on your local machine and type:
```
git clone <the ssh key you copied from github you put here but with not brackets>
```
5. CD into that directory and run
```
npm install
``` 
to install all dependencies. 

6. Run `npm start` and go to http://localhost:3000/.