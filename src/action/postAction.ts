import api from "../services/api";

export const newPost = () => (dispatch: any) => {
  api.get("/view").then((res) => {
    dispatch({ type: "GET_POST", payload: res.data.reverse() });
  });
};
