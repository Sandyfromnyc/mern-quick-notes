import sendRequest from "./send-request";
const BASE_URL = '/api/notes';


export async function create(note) {
  return sendRequest(BASE_URL, 'POST', note);

}

export async function getAll() {
  return sendRequest(BASE_URL);
}
