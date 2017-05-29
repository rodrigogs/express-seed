# express-seed

Minimal Node.js express based application for project kickstarting.

### Setup
```bash
$ npm install yarn -g
$ yarn install
```
### Environment
* dotenv is supported, just create a .env file

* NODE_ENV
  - Node environment, defaults to `development`
* PORT
  - Http server port, defaults to `3000`
* HTTP_LOG_CONFIG
  - [morgan log configuration](https://github.com/expressjs/morgan#predefined-formats), defaults to `dev`

### Usage
Start:
```bash
$ yarn start
```
Test:
```bash
$ yarn test
```
Coverage:
```bash
$ yarn run coverage
```

### License

[Licence](https://github.com/rodrigogs/express-seed/blob/master/LICENSE) © Rodrigo Gomes da Silva
