import { PostAction } from '../actions/front';
import { Post } from '../types/index';
import * as  Types from '../constants/front';
import { frontState } from "../store/initState";

export function front(state: Post = frontState, action: PostAction) {
  switch (action.type) {
    case Types.RESPONSE_POST_LIST:
      return { ...state, postList: [...action.data.list], pageNum: action.data.pageNum, total: action.data.total };
    case Types.RESPONSE_POST_DETAIL:
      return { ...state, postDetail: action.data };
    default:
      return state;
  }
} 