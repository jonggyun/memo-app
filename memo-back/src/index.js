require('dotenv').config();

const mongoose = require('mongoose');

const {
  PORT: port = 4000, // 값이 없을 경우 4000사용
  MONGO_URI: mongoURI
} = process.env;

mongoose.Promise = global.Promise; // mode의 promise를 사용하도록 설정
mongoose.connect(mongoURI, {useNewUrlParser: true}).then(() => {
  console.log('connected to mongodb');
}).catch((e) => {
  console.log(e);
});

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터를 설정
router.use('/api', api.routes()); // api라우터를 적용

// 라우터를 적용하기 전네 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터를 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('listening to port', port);
});