const fs = require('fs');
const path = require('path');

// 設定檔案路徑為 "../doc/"
const dirPath = path.join(__dirname, '../doc');

// 讀取該目錄下的所有 txt 檔案，過濾掉 blog_template.txt，並進行排序
let files = fs.readdirSync(dirPath)
    .filter(file => file.endsWith('zh.txt') && file !== 'blog_template_zh.txt')
    .sort();

let data = {
    fileName: [],
    postTitle: [],
    postSubTitle: [],
    postDate: [],
    postImage: [],
    postTagsZh: [],
    postTagsEn: [],
    postAuthor: [],
    postPinned: [],
    postLikes: [],
    postFormat: [],
    postContent: []
};

// 定義匹配註解和範例的模式
const commentPattern = /^<註解>/;
const examplePattern = /^<範例>/;

files.forEach(file => {
    const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const lines = content.split(/\r?\n/).filter(line => line.trim() !== '');  // 剔除空白行
    let nextLineToCapture = false;
    let currentField = null;
    let postContentCapture = false;  // 特殊處理 postContent
    let postContentBuffer = '';  // 用來存儲 postContent 的多行數據

    lines.forEach(line => {
        if (commentPattern.test(line)) {
            // 根據註解行設定對應的陣列
            if (line.includes('貼文中文標題')) currentField = 'postTitle';
            if (line.includes('貼文中文子標題')) currentField = 'postSubTitle';
            if (line.includes('貼文創建日期')) currentField = 'postDate';
            if (line.includes('貼文封面圖片名稱')) currentField = 'postImage';
            if (line.includes('貼文中文標籤')) currentField = 'postTagsZh';
            if (line.includes('貼文英文標籤')) currentField = 'postTagsEn';
            if (line.includes('貼文作者')) currentField = 'postAuthor';
            if (line.includes('貼文強制釘選')) currentField = 'postPinned';
            if (line.includes('貼文點讚數')) currentField = 'postLikes';
            if (line.includes('貼文格式')) currentField = 'postFormat';
            if (line.includes('貼文內容')) {
                currentField = 'postContent';
                postContentCapture = true;
            } else {
                postContentCapture = false;
            }
        } else if (examplePattern.test(line)) {
            // 碰到範例行後，開始讀取下一行的內容
            nextLineToCapture = true;
        } else if (nextLineToCapture && currentField !== 'postContent') {
            // 捕捉範例行後的下一行 (除了 postContent 的情況)
            data[currentField].push(line.trim().replace(/<br>/g, ''));
            nextLineToCapture = false;
        } else if (postContentCapture) {
            // 針對 postContent 的特殊處理，將多行內容拼接成一行
            postContentBuffer += line.trim().replace(/<br>/g, '');
        }
    });

    // 最後將 postContent 的多行結果存為一個字串
    if (postContentBuffer) {
        data.postContent.push(postContentBuffer);
    }

    // 將檔名加入
    data.fileName.push(file);
});

// 最終輸出
console.log(data.fileName);
console.log(data.postTitle);
console.log(data.postSubTitle);
console.log(data.postDate);
console.log(data.postImage);
console.log(data.postTagsZh);
console.log(data.postTagsEn);
console.log(data.postAuthor);
console.log(data.postPinned);
console.log(data.postLikes);
console.log(data.postFormat);
console.log(data.postContent);
