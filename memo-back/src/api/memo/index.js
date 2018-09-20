const Router = require('koa-router');

const posts = new Router();

const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

posts.get('/', printInfo); // 호출하면서 printInfo 함수도 호출-> JSON으로 반환
posts.post('/', printInfo);
posts.get('/:id', printInfo);  // 라우터의 파라미터를 설정
posts.delete('/:id', printInfo); // 라우터의 파라미터를 설정
posts.put('/:id', printInfo);
posts.patch('/:id', printInfo);

module.exports = posts; // post 라우터를 추출