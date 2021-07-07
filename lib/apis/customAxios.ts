import axios, { Method } from 'axios';
import { BASE_URL } from "../config/config.json"


interface requestCustomAxiosType {
  method: Method;
  url: string;
  params?: object;
  body?: object;
  header?: object;
}

export const methodType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const requestCustomAxios = async (
  {method, url, params, body, header} : requestCustomAxiosType
) => {
  try {
    const response = await axios({
      baseURL : BASE_URL,
      url: url,
      params : params,
      data: body,
      method: method,
      headers: {
        ...header
      }
    })
    return response;
  } catch (error) {
    throw error
  }
}