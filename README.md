# Prerequisite

This app is entirely run inside a Docker container, which means you will need to install Docker.
This app also uses Keycloak as its user management system.

## Installing & Setting up Docker

You will find everything your need on the [Docker Website](https://docs.docker.com/desktop/)

## Installing Keycloak

Use a volume to store your future app realm and client.
Make sure to remember the port you're binding to, we'll need it for Herald later.
Also make sure to change the admin and admin password when creating the container.

`docker run --name keycloak -p xxxx:8080 -v /path/to/volume:/opt/keycloak/data -e KC_HTTP_ENABLED=true -e KC_HOSTNAME_STRICT=false -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin -d quay.io/keycloak/keycloak:24.0.2 start --import-realm`

## Setting up Keycloak

Open up `http://locahost:xxxx`, xxxx being the port you used in the command above, and sign in using the credentials you used for the admin account.

We're going to create a Realm and a Client, corresponding to our application. To do so, click on the upper left dropdown menu and click "Add Realm".

![](assets/keycloak_1.png)

## Installing Herald

Clone this repository somewhere on your computer.

From the folder, use Docker to build an image of Herald :
`docker build -t herald:latest .`

Then run the Herald image using :

`docker run --name herald -p xxxx:8080 -p yyyy:8081 -d herald:latest`
where xxxx will be the port used to connect to the client and yyyy the port used for the API.

## Note

There is also a Dockerfile in the Herald.Server folder. This Dockerfile is not meant to be used for building the app manually, but for development purposes with Visual Studio.
