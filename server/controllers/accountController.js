const Users = require('../models/accountModels');
const db = require('../models/dbmodel');
const accountController = {};

// enters a user into the database after GitHub OAuth if an entry
// does not already exist
accountController.createUser = (req, res, next) => {
  const { username, id } = res.locals;

  //Making sure username does not exist
  Users.findOne({ username })
    .then(data => {
      if (!data) {
        Users.create({ username, id }).then(data => {
          //data here is full entry, includes _id key
          res.locals.id = data._id; // sending ID for cookie auth
          return next();
        });
      } else {
        return next();
      }
    })
    .catch(err => {
      next({
        log: `accountController.createUser failed: ${err}`,
        message: `User already exists!`
      });
    });
};

// showing the logged in user's projects before the mounting
// of the home page
accountController.userProjects = async (req, res, next) => {
  try {
    const user = await db.query(
      `SELECT * FROM userSchema WHERE username='${res.locals.username}'`
    );
    if (user.rows.length > 0) {
      const projects = await db.query(
        `SELECT * FROM projectSchema WHERE username='${res.locals.username}'`
      );

      res.locals.userProjects = projects.rows;
      console.log(projects.rows);
    }

    return next();
  } catch (err) {
    console.log(err);
    console.log('Error getting list of user projects');
    return next(err);
  }
  // Users.findOne({ username: res.locals.username })
  //   .then(data => {
  //     res.locals.userProjects = data.project_ids;
  //     return next();
  //   })
  //   .catch(err => {
  //     next({
  //       log: 'accountController.userProjects failed',
  //       message: `could not find projects for user`
  //     });
  //   });
};

// just for test purposes; returns all users in the database
accountController.findUser = async (req, res, next) => {
  try {
    const { username, id } = res.locals;
    console.log(res.locals);
    const user = await db.query(
      `SELECT * FROM userSchema WHERE username='${username}'`
    );

    if (user.rows.length === 0) {
      const newUser = await db.query(
        `INSERT INTO userSchema (username, user_id) VALUES('${username}', '${id}')`
      );
      res.locals.id = newUser.rows[0].id;
    }

    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }

  // write code here
  // const { username } = req.body;
  // Users.find({})
  //   .then(data => {
  //     res.locals.username = data;
  //     return next();
  //   })
  //   .catch(err => {
  //     // if (err.message === `Username Doesn't Exist`) res.redirect("/signup");
  //     return next({
  //       log: err,
  //       error: `error found in userController.findUser`
  //     });
  //   });
};

module.exports = accountController;
