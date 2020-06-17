import axios from "axios";
import { setAlert } from "./alert";

import {
  PROJECT_ADDED,
  PROJECT_ERROR,
  PROJECTS_LOADED,
  PROJECT_LOADED,
  PROJECT_UPDATED,
} from "./constants";

export const addProject = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/projects", formData, config);
    dispatch({
      type: PROJECT_ADDED,
      payload: res.data,
    });
    dispatch(setAlert("Project Added", "success"));
  } catch (error) {
    dispatch({
      PROJECT_ERROR,
      payload: { msg: error.message },
    });
  }
};

//get current user projects
export const loadProjects = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get("/api/projects", config);
    dispatch({
      type: PROJECTS_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      PROJECT_ERROR,
      payload: { msg: error.message },
    });
  }
};
// get Project By ID

export const getProject = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/${id}`);

    dispatch({
      type: PROJECT_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//addbug
export const addBug = (formdata) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/api/projects/bugs`, formdata, config);

    dispatch({
      type: PROJECT_UPDATED,
      payload: res.data,
    });
    dispatch(setAlert("bug Added", "success"));
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
