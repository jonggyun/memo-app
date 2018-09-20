const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터를 설정
router.use('/api', api.routes()); // api라우터를 적용

// 라우터를 적용하기 전ㅇ네 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터를 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('listening to port 4000');
});