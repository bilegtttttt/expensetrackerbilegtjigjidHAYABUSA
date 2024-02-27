//// email catch user see

import { getUserByEmail } from "../queries/user/getUser.js";

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//// all users see

import { getAllUser } from "../queries/allUserSee.js";

export const getAllUserrr = async (req, res) => {
  try {
    const allUser = await getAllUser(req);

    res.send(JSON.stringify(allUser));
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//// create new account

import { newBaachka } from "../queries/user/createNewUser.js";

export const newAccount = async (req, res) => {
  try {
    const create = await newBaachka(req);

    res.send(JSON.stringify(create));
  } catch (error) {
    res.status(500).send(error.message);
  }
};

///login

import { logIn } from "../queries/user/logIn.js";

export const loginService = async (req, res) => {
  try {
    const loginAccount = await logIn(req, res);
    res.send(loginAccount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
