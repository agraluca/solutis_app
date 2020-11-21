import React from "react";
import { createAction, createReducer } from "@reduxjs/toolkit";

export interface Post {
    _id: number;
    title: string;
    description: string;
    imageUrl: string;
}

export interface PostsState {
    posts: Post[]
}

const initialState: PostsState = {
  posts: Post[] =  [
    {
      _id: 1,
      title: "Ola",
      description: "oi",
      imageUrl: "https://google.com/images/",
    }
  ]
  
};

type Action = { type: "GET_POST"; payload: Post };

export const postsReducer = (
  state = initialState,
  action: Action
):PostsState => {
  switch (action.type) {
    case "GET_POST": {
      return { ...state, posts: [...state.posts, action.payload] };
    }
    default:
      return state;
  }
};

export default postsReducer


