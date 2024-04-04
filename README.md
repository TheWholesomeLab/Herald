# Installation

Clone this repository somewhere on your computer.

From the folder, use Docker to build an image of Herald :
`docker build -t herald:latest .`

Then run the Herald image using :

`docker run --name herald -p xxxx:8080 -p yyyy:8081 -d herald:latest`
where xxxx will be the port used to connect to the client and yyyy the port used for the API.

## Note

There is also a Dockerfile in the Herald.Server folder. This Dockerfile is not meant to be used for building the app manually, but for development purposes with Visual Studio.
