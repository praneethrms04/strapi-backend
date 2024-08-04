const finduser = async (username, room) => {
  try {
    const userExists = await strapi.services.users.find({ username, room });
    return userExists;
  } catch (err) {
    console.log("error while fetching", err);
  }
};

const userExists = async (id) => {
  try {
    const user = strapi.services.users.findOne({ id: id });
    return user;
  } catch (error) {
    console.log("Error occured when fetching user", err);
  }
};

const getUsersInRoom = async (room) => {
  try {
    const usersInRoom = await strapi.services.users.find({ room });
    return usersInRoom;
  } catch (err) {
    console.log("Error.Try again!", err);
  }
};

const createUser = async ({ username, room, status, socketId }) => {
  try {
    const user = await strapi.services.users.create({
      username,
      room,
      status: status,
      socketId,
    });
    return user;
  } catch (err) {
    console.log("User couldn't be created. Try again!");
  }
};
module.exports = {
  finduser,
  createUser,
  userExists,
  getUsersInRoom,
};
