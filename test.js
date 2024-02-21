const Searcher = require('./ip.js');


async function main() {
	try {
  // 同步读取buffer
  const buffer = Searcher.loadContentFromFile('./ip2region.xdb')
  // 创建searcher对象
  const searcher = Searcher.newWithBuffer(buffer)
  // 查询 await 或 promise均可
  const data = await searcher.search('127.0.0.1')
  console.log(data);
  // data: {region:'中国|0|江苏省|苏州市|电信', ioCount: 0, took: 0.063833}
} catch(e) {
  console.log(e)
}

}

main();
