const Router = require('koa-router');
const memo = require('./memos');

const api = new Router();

api.use('/memos', memo.routes());

// 등록한 라우터를 내보낸다.
module.exports = api;