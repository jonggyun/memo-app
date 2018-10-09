const Folder = require('models/folders');
// const Memo = require('models/memos');
const Joi = require('joi');
const { ObjectId } = require('mongoose').Types;

exports.checkObjectId = (ctx, next) => {
  const { fid } = ctx.params;

  if(!ObjectId.isValid(fid)) {
    ctx.statue = 400; // bad request
    return null;
  }

  return next(); // next를 리턴해야 ctx.body가 제대로 설정된다?? 
}
/**
 * 폴더 리스트 가져오기
 * GET /api/memos/
 */
exports.getFolderList = async (ctx) => {
  try {
    // find() 함수를 호출! exec()를 붙여야 서버에서 쿼리를 요청!
    // sort() 함수를 통한 정렬
    const folders = await Folder.find().sort({name: 1}).exec(); 
    ctx.body = folders;
  } catch (e) {
    ctx.throws(e, 500); // Internal Server Error
  }
};

/**
 * 폴더 생성하기
 * POST /api/memos/
 */
exports.addFolder = async (ctx) => {
  console.log('create folder');
  // 전달 받은 값에 대한 검증!
  const schema = Joi.object().keys({
    folderName: Joi.string().required(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400; // bad request
    ctx.body = result.error;
    return;
  }

  const { folderName } = ctx.request.body;

  // 새 인스턴스? 스키마를 만들어서 던지자.
  const folder = new Folder({
    name: folderName
  });

  try {
    await folder.save();
    ctx.body = folder;
  } catch(e) {
    // db에 오류난 경우 처리
    ctx.throws(e, 500);
  }
};

/**
 * 폴더 삭제하기
 * DELETE /api/memos/:fid
 */
exports.removeFolder = async (ctx) => {
  console.log('remove folder')
  const { fid } = ctx.params;
  try {
    await Folder.findByIdAndRemove(fid).exec(); // findByIdAndDelete 와 차이는 뭘까?
    ctx.status = 204; // 콘텐츠 없음
  } catch(e) {
    ctx.throws(e, 500);
  }
};

/**
 * 폴더 변경하기
 * PATCH /api/memos/:fid
 */
exports.updateFolder = async (ctx) => {
  console.log('update folder');
  const { fid } = ctx.params;
  try { // ctx.request.body에 있는 데이터로 바꿔주는듯!
    const folder = await Folder.findByIdAndUpdate(fid, ctx.request.body, {
      new: true // 이 값을 설정해야 업데이트된 객체를 반환!! 
    }).exec();

    // 폴더가 없을 경우 에러
    if(!folder) {
      ctx.status = 404;
      return
    }
    ctx.body = folder; // 업데이트된 객체를 ctx.body에 넣는다.
  } catch(e) {
    ctx.throws(e, 500) // 서버 오류
  }
};

/**
 * 메모 리스트 가져오기
 * GET /api/memos/:fid/memo
 */
exports.getMemoList = async (ctx) => {
  // 폴더안에 존재하는 메모리스트 가져오기
  console.log('get MemoList');
  try {
    // Id 값으로 찾아오기.
    const { fid } = ctx.params;
    const memoList = await Folder.findById(fid).exec();
    console.log('memoList',memoList);
    ctx.body = memoList.memolist;
  } catch (e) {
    ctx.throws(e, 500); // Internal Server Error
  }  
};

/**
 * 메모 생성하기
 * POST /api/memos/:fid/memo
 */
exports.addMemo = async (ctx) => {
  // 현존하는 폴더에 memo 스키마를 배열로 추가
  try {
    const { fid } = ctx.params;
    const memoList = await Folder.findByIdAndUpdate(fid,{
      $push: { title: "", content: ""}
    }, {
      new: true
    }).exec();

    if(!memoList) {
      ctx.status = 404;
      return
    };
    ctx.body = memoList;
  } catch (e) {
    ctx.throws(e, 500);
  }
};

/**
 * 메모 삭제하기
 * DELETE /api/memos/:fid/memo/:mid
 */
exports.removeMemo = async (ctx) => {
  // 현존하는 폴더에서 memo 스키마에서 내용을 삭제
  try {
    const { fid } = ctx.params;
    const memoList = await Folder.findByIdAndUpdate(fid,{
      // title을 바탕으로 삭제
      $pull: { title: "" }
    }, {
      new: true
    }).exec();

    if(!memoList) {
      ctx.status = 404;
      return
    };
    ctx.body = memoList;    
  } catch (e) {
    ctx.throws(e, 500);
  }
};

/**
 * 메모 변경하기
 * PATCH /api/memos/:fid/memo/:mid
 */
exports.updateMemo = (ctx) => {

};

/**
 * 메모 내용 가져오기
 * GET /api/memos/:fid/memo/:mid
 */
exports.getMemo = (ctx) => {

};