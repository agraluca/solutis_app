import api from "../services/api";

export const newPost = () => (dispatch: any) => {
  dispatch({ type: "START_LOADING_POST" });
  api
    .get("/view")
    .then((res) => {
      dispatch({ type: "GET_POST", payload: res.data.reverse() });
    })
    .catch((e) => console.log(e))
    .finally(() => {
      dispatch({ type: "FINISH_LOADING_POST" });
    });
};
