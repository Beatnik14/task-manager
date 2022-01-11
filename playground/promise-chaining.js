require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

//Promise Chaining
// User.findByIdAndUpdate("61d3115c68f38b50db021362", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((e) => console.log(e));

// Task.findByIdAndRemove("61d5e744c3e61963e94f001d")
//   .then((data) => {
//     console.log(data);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

//Alternative to promise chaining (better way)!
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return { updatedUser: user, count };
};

updateAgeAndCount("61d3115c68f38b50db021362", 3)
  .then(({ updatedUser, count }) => {
    console.log(updatedUser, count);
  })
  .catch((e) => {
    console.log(e);
  });

const deleteTaskAndCountIncompleteTasks = async (id) => {
  const task = await Task.findByIdAndRemove(id);
  const incompleteTasks = await Task.countDocuments({ completed: false });
  return { taskDeleted: task, incompleteTasks };
};

deleteTaskAndCountIncompleteTasks("61d777daf31a798b224f6001")
  .then(({ taskDeleted, incompleteTasks }) => {
    console.log(taskDeleted, incompleteTasks);
  })
  .catch((e) => {
    console.log(e);
  });
