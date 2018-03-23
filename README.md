# Node GraphQL server and React client
Node GraphQL server using MongoDB for persistent storage and React client

## Build and run in dockers
Go to the folder, and run command
```
docker-compose up -d
```
and then open browser at **http://192.168.99.100:62001**. 

## Local desktop
### Setup
1. #### run following command
```
npm install
```
2. #### open file "server-config.json" to setup server port number and MogoDB URL as following
```
{
    "mongodb": {
        "url": "mongodb://dbuser:password@host:port/databasename"
    },
    "server": {
        "port": 63001
    }
}
```
### Run
```
npm run dev
```
### Debug
```
npm run debug
```
### Test
```
npm run test
```
### Continue testing
```
npm run testwatch
```
### Test Coverage
```
npm run coverage
```
### Broswer
[http://localhost:63001](http://localhost:63001/)
### Broswer GraphiQL
[http://localhost:63001/graphql](http://localhost:63001/graphql)
![alt text](https://github.com/sydney900/Node-GraphQL-server-and-React-client/blob/master/graphql.png "GraphiQL")



