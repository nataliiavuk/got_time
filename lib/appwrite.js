import {Client , Account} from "appwrite";
export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6596bb26422a00b78f8e'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';