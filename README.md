# IBM API Connect Micro-Gateway (ugw)

## About

This project is a sample app that uses the IBM API Connect Micro-Gateway (a.k.a. ugw).

## Run this Project

1.  Clone or download this repo.
2.  Run `npm install`
3.  Run `DATASTORE_PORT=1337 PORT=8080 node .` or `npm start`
4.  Visit `https://localhost:8080/api/skate` for a sample API exposed on the micro-gateway.
5.  Visit `http://localhost:1337/explorer` to see a list of utility API's available on the gateway itself.

The gateway server is on port `8080`.  A utility API for other APIC components to communicate is on port `1337`.

## Project Structure

`index.js`: Requires in the microgateway npm and sets the directories for the config and policies of the gateway.

`config`:  Contains the `yaml` config files for the gateway.  These are the API definitions available through the gateway.  For example, look at `sample_1.0.0.yaml`, there is one endpoint exposed: '/api/skate' which invokes the API located at `http://skateipsum.com/get/3/1/JSON`.

`policies`:  Contains custom policies that can be applied to API's secured by the gateway.  For example, look at `sample_1.0.0.yaml`.  After `invoke`-ing the API but before the response is sent to the client, a `logger` policy is defined:

```
- logger:
   level: info
   version: 1.0.0
```

This sample policy can be found in `policies/logger`.
