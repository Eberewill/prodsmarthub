import {
  PROJECTS_LOADED,
  PROJECT_ADDED,
  PROJECT_ERROR,
  PROJECT_LOADED,
} from "../actions/constants";

//dec init state

const initialState = {
  sProject: null,
  projectList: [],
  error: {},
  loading: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PROJECT_ADDED:
      return {
        ...state,
        sProject: payload,
        loading: false,
      };
    case PROJECTS_LOADED:
      return {
        ...state,
        projectList: payload,
        loading: false,
      };
    case PROJECT_LOADED:
      return {
        ...state,
        sProject: payload,
        loading: false,
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        sProject: null,
        loading: false,
      };

    default:
      return state;
  }
}
