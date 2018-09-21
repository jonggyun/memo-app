const Router = require('koa-router');
const memoCtrl = require('./memo.ctrl');

const memo = new Router();

memo.get('/', memoCtrl.folderList);       // 폴더 리스트 가져오기
memo.put('/', memoCtrl.folderC);         // 폴더 생성하기
memo.delete('/:fid', memoCtrl.folderD);  // 폴더 삭제하기
memo.patch('/:fid', memoCtrl.folderU);   // 폴더 변경하기

memo.get('/:fid/memo', memoCtrl.memoList);      // 메모 리스트 가져오기
memo.put('/:fid/memo', memoCtrl.write);         // 메모 생성하기
memo.delete('/:fid/memo/:mid', memoCtrl.delete); // 메모 삭제하기
memo.patch('/:fid/memo/:mid', memoCtrl.update);  // 메모 변경하기
memo.get('/:fid/memo/:mid', memoCtrl.content);  // 메모 내용 가져오기


module.exports = memo; // post 라우터를 추출