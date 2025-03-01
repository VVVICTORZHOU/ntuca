// 彈窗側邊菜單
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebarClose = document.querySelector('.sidebar-close');
    const body = document.body;
    const overlay = document.querySelector('.sidebar-overlay');
    
    // 打開側邊欄
    menuToggle.addEventListener('click', function() {
        body.classList.add('sidebar-open');
    });
    
    // 關閉側邊欄 - 兩種方式
    sidebarClose.addEventListener('click', function() {
        body.classList.remove('sidebar-open');
    });
    
    // 點擊遮罩時關閉側邊欄
    overlay.addEventListener('click', function() {
        body.classList.remove('sidebar-open');
    });
    
    // 響應式調整
    function handleResize() {
        if (window.innerWidth > 1024) {
            body.classList.remove('sidebar-open');
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // 初始化調用一次
    handleResize();
});



// 彈窗搜索框
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn1');
    const searchPopup = document.querySelector('.search-popup');
    const searchClose = document.querySelector('.search-popup-close');
    const searchInput = document.getElementById('search-input');
    const searchSubmit = document.getElementById('search-submit');
    const body = document.body;
    
    // 打開搜索彈窗
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 如果側邊欄已打開，則關閉側邊欄
        if (body.classList.contains('sidebar-open')) {
            body.classList.remove('sidebar-open');
            // 給側邊欄一點時間關閉後再打開搜索彈窗
            setTimeout(() => {
                searchPopup.classList.add('active');
                searchInput.focus();
                document.body.style.overflow = 'hidden';
            }, 300); // 等待側邊欄關閉動畫完成
        } else {
            searchPopup.classList.add('active');
            searchInput.focus();
            document.body.style.overflow = 'hidden';
        }
    });
    
    // 關閉搜索彈窗
    searchClose.addEventListener('click', function() {
        searchPopup.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // ESC鍵關閉彈窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchPopup.classList.contains('active')) {
            searchPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // 提交搜索
    searchSubmit.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('搜索關鍵字:', searchTerm);
            window.location.href = 'blog_zh_index.html';
        }
    });
    
    // Enter鍵提交搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                console.log('搜索關鍵字:', searchTerm);
                window.location.href = 'blog_zh_index.html';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn2');
    const searchPopup = document.querySelector('.search-popup');
    const searchClose = document.querySelector('.search-popup-close');
    const searchInput = document.getElementById('search-input');
    const searchSubmit = document.getElementById('search-submit');
    const body = document.body;
    
    // 打開搜索彈窗
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 如果側邊欄已打開，則關閉側邊欄
        if (body.classList.contains('sidebar-open')) {
            body.classList.remove('sidebar-open');
            // 給側邊欄一點時間關閉後再打開搜索彈窗
            setTimeout(() => {
                searchPopup.classList.add('active');
                searchInput.focus();
                document.body.style.overflow = 'hidden';
            }, 300); // 等待側邊欄關閉動畫完成
        } else {
            searchPopup.classList.add('active');
            searchInput.focus();
            document.body.style.overflow = 'hidden';
        }
    });
    
    // 關閉搜索彈窗
    searchClose.addEventListener('click', function() {
        searchPopup.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // ESC鍵關閉彈窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchPopup.classList.contains('active')) {
            searchPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // 提交搜索
    searchSubmit.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('搜索關鍵字:', searchTerm);
            window.location.href = 'blog_zh_index.html';
        }
    });
    
    // Enter鍵提交搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                console.log('搜索關鍵字:', searchTerm);
                window.location.href = 'blog_zh_index.html';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn1 = document.querySelector('.search-btn1');

    searchBtn1.addEventListener('click', function() {
        // 跳轉到 blog_zh_index.html，並傳遞查詢參數來打開搜索彈窗
        window.location.href = 'blog_zh_index.html?search=open';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn2 = document.querySelector('.search-btn2');

    searchBtn2.addEventListener('click', function() {
        // 跳轉到 blog_zh_index.html，並傳遞查詢參數來打開搜索彈窗
        window.location.href = 'blog_zh_index.html?search=open';
    });
});

// 處理從別處跳轉到本頁的檔名，讀取對應的 txt 檔案並渲染貼文內容
document.addEventListener('DOMContentLoaded', function() {
    // 獲取檔名
    const urlParams = new URLSearchParams(window.location.search);
    const postFileName = urlParams.get('post_file_name');

    if (postFileName) {
        console.log('Loading post file:', postFileName);

        // 讀取 doc 目錄下的指定 txt 檔案作為貼文數據
        let blogData = {
            postTitle: '',
            postSubTitle: '',
            postDate: '',
            postImage: '',
            postTagsZh: '',
            postTagsEn: '',
            postAuthor: '',
            postPinned: '',
            postLikes: '',
            postFormat: '',
            postContent: ''
        };

        // 定義註解與範例的模式
        const commentPattern = /^<註解>/;
        const examplePattern = /^<範例>/;

        // 讀取指定的檔案並解析
        fetch(`https://vvvictorzhou.github.io/ntuca/doc/${postFileName}`)
            .then(response => response.text())
            .then(content => {
                const lines = content.split(/\r?\n/).filter(line => line.trim() !== '');
                let currentField = null;
                let postContentCapture = false;
                let postContentBuffer = '';

                lines.forEach(line => {
                    if (commentPattern.test(line)) {
                        // 根據註解來判定當前要捕獲的欄位
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
                        // 對其他欄位捕獲一行數據
                        blogData[currentField] = line.trim().replace(/<br>/g, '');
                    } else if (postContentCapture) {
                        // 捕捉多行 postContent
                        postContentBuffer += line.trim().replace(/<br>/g, '');
                    }
                });

                // 將捕捉到的 postContent 放入 blogData
                blogData.postContent = postContentBuffer;

                // 渲染貼文內容到 .post-content-container
                document.querySelector('.post-content-container').innerHTML = blogData.postContent;

            })
            .catch(error => {
                console.error('Error loading post file:', error);
            });
    } else {
        console.warn('No post_file_name provided in URL');
    }
});
