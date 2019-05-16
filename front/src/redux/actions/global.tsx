import * as Global from '../constants/global';
import { User } from "@Redux/types";
import { type } from 'os';

export interface GET_user_action {
  type: Global.GET_USER;
  id: string
}

export interface Response_user_action {
  type: Global.RESPONSE_USER;
  user: User
}

export interface POST_SignIn_Action {
  type: Global.SIGNIN;
  account: string
  password: string
}

export interface POST_SignOut_Action {
  type: Global.SIGNOUT;
}

export interface POST_Register_Action {
  type: Global.USER_REGISTER;
  data: any
}

export interface SET_msg_Action {
  type: Global.SET_MESSAGE;
  msgType: number,
  msgContent: string
}

export interface User_auth_Action {
  type: Global.USER_AUTH;
}

//

export interface RESPONSE_user_Action {
  type: Global.RESPONSE_USER_INFO;
  data: any
}

export interface FETCH_Action {
  type: Global.FETCH_START | Global.FETCH_END;
}


export type Global_Requset_Action = GET_user_action | POST_SignIn_Action | POST_Register_Action | POST_SignOut_Action

export type Global_Response_Action = User_auth_Action | RESPONSE_user_Action;

export type Global_Notify_Action = FETCH_Action | SET_msg_Action

export type Global_Action = Global_Notify_Action | Global_Response_Action | Global_Requset_Action

export function signIn(account: string, password: string): POST_SignIn_Action {
  return {
    type: Global.SIGNIN,
    account,
    password
  }
}

export function signOut(): POST_SignOut_Action {
  return {
    type: Global.SIGNOUT
  }
}

export function register(data: any): POST_Register_Action {
  return {
    type: Global.USER_REGISTER,
    data
  }
}

export function clear_msg(): SET_msg_Action {
  return {
    type: Global.SET_MESSAGE,
    msgType: 1,
    msgContent: ''
  }
}

export function user_auth(): User_auth_Action {
  return {
    type: Global.USER_AUTH
  }
}

export function get_user_info(id: string): GET_user_action {
  return {
    type: Global.GET_USER,
    id
  }
}