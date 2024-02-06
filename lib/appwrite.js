import {Client , Account, Databases} from "appwrite";
export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6596bb26422a00b78f8e'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

export const databases = new Databases(client, "65bf983244ac7c2a59ae");