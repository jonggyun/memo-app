let memoId = 1;

const memos = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  }
];

/**
 * POST /api/memo
 * { title, body }
 */
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;

  memoId += 1;

  const memo = { id: memoId, title, body }
  memos.push(memo);
}



