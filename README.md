# Node GraphQL server and React client
Node GraphQL server and React client

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
### Broswer
[http://localhost:63001](http://localhost:63001/)
### Broswer GraphiQL
[http://localhost:63001/graphql](http://localhost:63001/graphql)
![alt text](https://github.com/sydney900/Node-GraphQL-server-and-React-client/blob/master/graphql.png "GraphiQL")



