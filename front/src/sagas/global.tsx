import { put, call } from 'redux-saga/effects'
import { get, post } from '../fetch'
import * as globalActionTypes from '@Redux/constants/global'
import { API } from "../fetch/api";
import { SET_msg_Action, RESPONSE_user_Action } from "@Redux/actions/global";
import { GET_user_action } from "@Redux/actions/global";

export function* user(action: GET_user_action) {
  let response = yield call(get, API.user + `/${action.id}`)
  if (response && response.status.code === 0) {
    // yield put({ type: SET_MESSAGE, msgContent: '注册成功!', msgType: 1 } as SET_msg_Action);
    yield put({ type: globalActionTypes.RESPONSE_USER_INFO, data: response.data } as RESPONSE_user_Action)
  }
}


// export function* login(username: string, password: string) {
//   // console.log(username, password)
//   yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
//   try {
//     return yield call(post, '/user/login', { username, password })
//   } catch (error) {
//     yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '用户名或密码错误', msgType: 0 } as SET_msg_Action);
//   } finally {
//     yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action);
//   }
// }

// export function* register(data: any) {
//   yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
//   try {
//     return yield call(post, '/user/register', data)
//   } catch (error) {
//     yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '注册失败', msgType: 0 } as SET_msg_Action);
//   } finally {
//     yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action);
//   }
// }

// export function* loginFlow() {
//   while (true) {
//     let request = yield take(IndexActionTypes.SIGNIN);
//     let response = yield call(login, request.username, request.password);
//     if (response && response.code === 0) {
//       yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '登录成功!', msgType: 1 } as SET_msg_Action);
//       yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data } as Global_Response_Action)
//     }
//   }
// }

// export function* registerFlow() {
//   while (true) {
//     let request = yield take(IndexActionTypes.USER_REGISTER);
//     let response = yield call(register, request.data);
//     if (response && response.code === 0) {
//       yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '注册成功!', msgType: 1 } as SET_msg_Action);
//       yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data } as Global_Response_Action)
//     }
//   }
// }

// export function* user_auth() {
//   while (true) {
//     yield take(IndexActionTypes.USER_AUTH);
//     try {
//       yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
//       let response = yield call(get, API.user);
//       if (response && response.code === 0) {
//         yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data } as Global_Response_Action)
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action);
//     }
//   }
// }