import { takeEvery, takeLatest, put, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import axios from "axios";

// Selectors go here

export default function* rootSaga() {
  axios.defaults.baseURL = "https://findastudyspace.com/api/v2";
  // takeEvery / takeLatest calls go here
}

// Nav modifiers
// function* switchToDashboard() {
//   yield put(push('/Dashboard'));
// }
