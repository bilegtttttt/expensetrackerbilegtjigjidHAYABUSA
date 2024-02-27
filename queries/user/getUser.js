import fs from "fs";

const userDb =
  "/Users/23LP7255/Library/CloudStorage/OneDrive-NestcoreLLC/INCOME-EXPENSIVE/backend-income-expensive/models/users.json";

export const getUserByEmail = async (request, response) => {
  try {
    const { email: paramEmail } = request.body;
    const allUsersJson = JSON.parse(fs.readFileSync(userDb, "utf8"));

    const exactUser = allUsersJson.find(({ email }) => email === paramEmail);

    return exactUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
