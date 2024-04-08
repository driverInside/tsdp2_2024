# ex5

## Install enviroment
### Docker

Download and install Docker

https://docs.docker.com/get-docker/

### MongoDB container

Open a terminal and run the following command:

```sh
$ docker run --name mongo -p 27017:27017 -d mongo:latest
```

### (optional) Install MongoDB Compass

Download and install the official MongoDB GUI client

https://www.mongodb.com/try/download/compass

### Redis container

```sh
docker run --name redis -p 6379:6379 -d redis
```

## Install dependencies

```sh
$ npm i
```

## Resources

Redis

https://redis.io/

Docker hub

https://hub.docker.com