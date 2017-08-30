# Instructions
1. Download started project from GitHub :octocat:

> git clone https://github.com/alexander-alegre/firebase-talk-starter my-new-app

> cd my-new-app

> rm -rf .git

> git init

> git add .

> git commit -m 'initial commit'

2. Create new GitHub repository

> git remote add origin git@github.com:username/reponame.git

> git push -u origin master

3. Create new Firebase database
4. Go to firebase console, Authentication, Sign-in Method, Allow Email/Password
5. Replace config variable in app.js
### [BROWSER SYNC](https://www.browsersync.io/)
6. Run the command below to start the server :shipit:
> browser-sync start --server --files "**/*"

## Lets code!

#### When done coding, lets deploy.

7. [HEROKU](https://devcenter.heroku.com/)

*this command will create an app named app-name*

> heroku create app-name

> git push heroku master
