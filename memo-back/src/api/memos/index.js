const Router = require('koa-router');
const memoCtrl = require('./memo.ctrl');

const memo = new Router();

memo.get('/', memoCtrl.getFolderList);            // 폴더 리스트 가져오기
memo.post('/', memoCtrl.addFolder);         // 폴더 생성하기
memo.delete('/:fid', memoCtrl.removeFolder, memoCtrl.checkObjectId);   // 폴더 삭제하기
memo.patch('/:fid', memoCtrl.updateFolder, memoCtrl.checkObjectId);     // 폴더 변경하기

memo.get('/:fid/memo', memoCtrl.getMemoList, memoCtrl.checkObjectId);           // 메모 리스트 가져오기
memo.post('/:fid/memo', memoCtrl.addMemo, memoCtrl.checkObjectId);         // 메모 생성하기
memo.delete('/:fid/memo/:mid', memoCtrl.removeFolder, memoCtrl.checkObjectId); // 메모 삭제하기
memo.patch('/:fid/memo/:mid', memoCtrl.updateFolder, memoCtrl.checkObjectId);   // 메모 변경하기
memo.get('/:fid/memo/:mid', memoCtrl.getMemo, memoCtrl.checkObjectId);   // 메모 내용 가져오기


module.exports = memo; // post 라우터를 추출