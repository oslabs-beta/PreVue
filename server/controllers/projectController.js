const Project = require('../models/projectModels');
const User = require('../models/accountModels');
const db = require('../models/dbmodel');
const projectController = {};

// saving a project
// we query the database to see if a project with the name on the req.body already exists
// if not, create a project; if so, update the project under that name with req.body.projectObject
projectController.saveProject = async (req, res, next) => {
  const { project_name, projectObject } = req.body;

  try {
    const project = await db.query(
      `SELECT * FROM projectSchema WHERE project_name='${project_name}'`
    );

    if (project.rows.length === 0) {
      const newProject = await db.query(
        `INSERT INTO projectSchema(username, project, project_name) VALUES('${
          res.locals.username
        }', '${JSON.stringify(projectObject)}', '${project_name}')`
      );
    } else {
      const update = await db.query(
        `UPDATE projectSchema SET project='${JSON.stringify(
          projectObject
        )}' WHERE project_name='${project_name}' `
      );
    }
    return next();
  } catch (err) {
    console.log(err);
    console.log('error saving project');
    return next(err);
  }

  //   Project.findOne({ project_name }).then(data => {
  //     if (!data) {
  //       Project.create({
  //         project_name,
  //         projectObject,
  //         projectOwner: res.locals.username
  //       })
  //         .then(data => {
  //           res.locals.newProject = data.projectObject;
  //           res.locals.projectName = data.project_name;
  //           return next();
  //         })
  //         .catch(err => {
  //           next({
  //             log: `projectController.saveProject failed, ${err}`,
  //             message: `Can't save new project!`
  //           });
  //         });
  //     } else {
  //       // if the project already exists, it is updated with the new state
  //       Project.findOneAndUpdate(
  //         { project_name },
  //         { projectObject: req.body.projectObject }
  //       )
  //         .then(data => {
  //           res.locals.newProject = data.projectObject;
  //           res.locals.projectName = data.project_name;
  //           return next();
  //         })
  //         .catch(err => {
  //           next({
  //             log: `projectController.saveProject failed, ${err}`,
  //             message: `Can't update project!`
  //           });
  //         });
  //     }
  //   });
  // };

  // // updates project_ids of of User who is saving a project
  // // if it already exists in their projects array, it is not added
  // projectController.userQuery = (req, res, next) => {
  //   User.findOneAndUpdate(
  //     { username: res.locals.username },
  //     { $addToSet: { project_ids: res.locals.projectName } },
  //     { new: true }
  //   )
  //     .then(data => {
  //       res.locals.user = data;
  //       return next();
  //     })
  //     .catch(err => {
  //       next({
  //         log: `projectController.userQuery failed, ${err}`,
  //         message: `user already exists!`
  //       });
  //     });
};

// for retrieving projects ('open project' on frontend)
projectController.getProject = async (req, res, next) => {
  try {
    const project = await db.query(
      `SELECT * FROM projectSchema WHERE project_name='${req.body.project_name}' AND username='${res.locals.username}'`
    );

    if (project.rows.length === 0) {
      throw new Error();
    }

    const projectObject = JSON.parse(project.rows[0].project);

    res.locals.project = await projectObject;

    return next();
  } catch (err) {
    console.log(err);
    console.log('error in get projects');
    return next(err);
  }
  // res.locals.project = project;
  // Project.findOne({
  //   project_name: req.body.project_name,
  //   projectOwner: res.locals.username
  // })
  //   .then(data => {
  //     res.locals.project = data.projectObject;
  //     return next();
  //   })
  //   .catch(err => {
  //     next({
  //       log: `projectController.getProject failed, ${err}`,
  //       message: `Can't find project!`
  //     });
  //   });
};

// general query to find all projects; not used in app itself
projectController.findProject = (req, res, next) => {
  Project.find({})
    .then(data => {
      res.locals.username = data;
      return next();
    })
    .catch(err => {
      // if (err.message === `Username Doesn't Exist`) res.redirect("/signup");
      return next({
        log: err,
        error: `error found in userController.verifyUser`
      });
    });
};

module.exports = projectController;
