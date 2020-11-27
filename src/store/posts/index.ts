export interface Post {
  _id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
};

type Action =
  | { type: "GET_POST"; payload: Post[] }
  | { type: "START_LOADING_POST" }
  | { type: "FINISH_LOADING_POST" };

export const postsReducer = (
  state = initialState,
  action: Action
): PostsState => {
  switch (action.type) {
    case "GET_POST": {
      return { ...state, posts: [...action.payload] };
    }
    case "START_LOADING_POST": {
      return { ...state, loading: true };
    }
    case "FINISH_LOADING_POST": {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

export default postsReducer;
