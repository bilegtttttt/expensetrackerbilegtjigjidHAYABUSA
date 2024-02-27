import fs from "fs";

const allUser =
  "/Users/23LP7255/Library/CloudStorage/OneDrive-NestcoreLLC/INCOME-EXPENSIVE/backend-income-expensive/models/users.json";

export const getAllUser = async (request, response) => {
  try {
    const allUserJson = await fs.readFileSync(allUser, "utf-8");
    const allUserParsed = JSON.parse(allUserJson);

    return allUserParsed;
  } catch (error) {
    throw new Error(error.message);
  }
};
