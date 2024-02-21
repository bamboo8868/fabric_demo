const builder = require('./src/components/PdfBuilder');

doc = builder.build({unit: 'px', compress: true, format: [210*2.835*96/72,297*2.835*96/72],hotfixes: ["px_scaling"]});
const helpers = require('./src/utils/helps');

const json = require('./test.json');


async function main() {
    for(let item of json.objects) {


        if(item.type === 'text' || item.type === 'i-text'){
            //pt单位
            //px 转pt

            doc.setFontSize(item.fontSize * 72/96);
            doc.text(item.text, item.left, item.top);
        }

        if(item.type === 'image') {
            let buf = await helpers.getContent(item.src);
            doc.addImage(buf, 'JPEG', item.left, item.top, item.width, item.height);
        }

        if(item.type === 'rect') {
            doc.rect()
        }

        if(item.type === 'line') {
            doc.line()
        }

    }

    let now = Date.now();
    doc.save(`${now}.pdf`);

    console.log("success");

}

main();

