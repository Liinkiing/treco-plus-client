import { onError } from "apollo-link-error";
import {ServerError} from 'apollo-link-http-common';
import AuthManager from "../services/AuthManager";

export default onError(({ networkError }) =>  {
  if ((networkError as ServerError).statusCode === 401) {
    AuthManager.logout()
  }
})
