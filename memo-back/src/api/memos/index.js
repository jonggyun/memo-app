const Router = require('koa-router');
const memoCtrl = require('./memo.ctrl');

const memo = new Router();

memo.get('/', memoCtrl.fList);            // 폴더 리스트 가져오기
memo.post('/', memoCtrl.fCreate);         // 폴더 생성하기
memo.delete('/:fid', memoCtrl.fRemove, memoCtrl.checkObjectId);   // 폴더 삭제하기
memo.patch('/:fid', memoCtrl.fPatch, memoCtrl.checkObjectId);     // 폴더 변경하기

memo.get('/:fid/memo', memoCtrl.mList, memoCtrl.checkObjectId);           // 메모 리스트 가져오기
memo.post('/:fid/memo', memoCtrl.mWrite, memoCtrl.checkObjectId);         // 메모 생성하기
memo.delete('/:fid/memo/:mid', memoCtrl.mRemove, memoCtrl.checkObjectId); // 메모 삭제하기
memo.patch('/:fid/memo/:mid', memoCtrl.mPatch, memoCtrl.checkObjectId);   // 메모 변경하기
memo.get('/:fid/memo/:mid', memoCtrl.mContent, memoCtrl.checkObjectId);   // 메모 내용 가져오기


module.exports = memo; // post 라우터를 추출