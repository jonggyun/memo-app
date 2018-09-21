const Folder = require('models/folders');

/**
 * 폴더 리스트 가져오기
 * GET /api/memos/
 */
exports.fList = async (ctx) => {
  try {
    const folders = await Folder.find().exec(); // find() 함수를 호출! exec()를 붙여야 서버에서 쿼리를 요청!
    ctx.body = folders;
  } catch (e) {
    ctx.throws(e, 500); // Internal Server Error
  }
};

/**
 * 폴더 생성하기
 * POST /api/memos/
 */
exports.fCreate = async (ctx) => {
  const { name } = ctx.request.body;

  // 새 인스턴스? 스키마를 만들어서 던지자.
  const folder = new Folder({
    name
  });

  try {
    await folder.save();
  } catch(e) {
    // db에 오류난 경우 처리
    ctx.throws(e, 500);
  }

};

/**
 * 폴더 삭제하기
 * DELETE /api/memos/:fid
 */
exports.fRemove = async (ctx) => {
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
exports.fPatch = async (ctx) => {
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
exports.mList = (ctx) => {

};

/**
 * 메모 생성하기
 * POST /api/memos/:fid/memo
 */
exports.mWrite = (ctx) => {

};

/**
 * 메모 삭제하기
 * DELETE /api/memos/:fid/memo/:mid
 */
exports.mRemove = (ctx) => {

};

/**
 * 메모 변경하기
 * PATCH /api/memos/:fid/memo/:mid
 */
exports.mPatch = (ctx) => {

};

/**
 * 메모 내용 가져오기
 * GET /api/memos/:fid/memo/:mid
 */
exports.mContent = (ctx) => {

};