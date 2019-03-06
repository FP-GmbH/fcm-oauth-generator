# FCM OAuth2 Token generator
## Purpose
This little script helps you generating an OAuth2 token that you can as auth-header for cURL requests or in REST clients 
such as Postman.

## HowTo

### Prerequisites

* Make sure you have node.js installed

### Install
```bash
git clone git@bitbucket.org:feig-partner/fcm-oauth-gen.git
cd gcm-oauth-gen
npm i
cp <path-to-your-serviceaccounts-file> .
``` 

See [FCM Docs](https://firebase.google.com/docs/cloud-messaging/migrate-v1#update-authorization-of-send-requests) on how to obtain a service-accounts.json 

### Usage

```bash
npm start
```

or alternatively

```bash
node index.js
```

This results in an OAuth2 token output that can be used in postman.

### SetUp Postman

* Create a POST Request
* Set the URL to <https://fcm.googleapis.com/v1/projects/{{YOUR-FCM-PROJECT-ID}}/messages:send>
* Set Authorization-Type to _Bearer Token_ and set the scripts output as value.
* Define a valid Request Body (See [FCM Docs](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#Notification))