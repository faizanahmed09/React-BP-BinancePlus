
import { selectAuth } from "app/redux/Auth/slice/selectors";
import axios from "axios";
import { useSelector } from "react-redux";




export class ResponseError extends Error {
    public response: Response;

    constructor(response: Response) {
        super(response.statusText);
        this.response = response;
    }
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: any) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.data;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new ResponseError(response);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function request(
    config: any,
): Promise<{} | { err: ResponseError }> {
    const fetchResponse = await axios(config);
    const response = checkStatus(fetchResponse);
    return parseJSON(response);
}

// export function authHeaders(accessToken) {
//     return{
//  'Content-Type': 'application/json',
//     'Authorization':'bearer '+accessToken,
//     }
  
// }