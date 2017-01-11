export {
  create,
  edit,
  remove,
  listAll,
  listAssigned,
  listCreated
};

import api from 'api';
import axios from 'utilities/axios';
import qs from 'qs';

const path = "/api/MainTasks";

function create(obj) {
  console.log(obj);
  return axios.post(api.url + path, obj);
}

function edit(obj) {
  return axios.post(api.url + path, obj);
}

function remove(obj) {
  return axios.post(api.url + path, obj);
}

function listAll() {
  return axios.get(api.url + path);
}

function listAssigned() {
  return axios.get(api.url + path + '?t=assigned');
}

function listCreated() {
  return axios.get(api.url + path + '?t=created');
}
