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

// 更新後的 Tab 切換功能
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = [
        document.getElementById('tab-button-1'),
        document.getElementById('tab-button-2'),
        document.getElementById('tab-button-3')
    ];
    
    const tabContents = [
        document.getElementById('tabs-content-container-1'),
        document.getElementById('tabs-content-container-2'),
        document.getElementById('tabs-content-container-3')
    ];
    
    // 為所有內容添加初始類
    tabContents.forEach((content, index) => {
        if (content) {  // Check if content is not null
            content.classList.add('tab-content');
            if (index !== 0) {
                content.classList.add('hidden');
            } else {
                content.classList.add('active');
            }
        }
    });
    
    
    let isTransitioning = false; // 防止動畫進行時重複點擊
    
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (isTransitioning || button.classList.contains('activate-tab-button')) {
                return; // 如果正在轉場或點擊當前活動標籤，則不執行
            }
            
            isTransitioning = true;
            
            // 更新按鈕樣式
            tabButtons.forEach((btn) => {
                btn.className = 'deactivate-tab-button';
            });
            button.className = 'activate-tab-button';
            
            // 獲取當前活動的內容
            const activeContent = document.querySelector('.tab-content.active');
            const targetContent = tabContents[index];
            
            // 執行轉場
            if (activeContent) {
                // 當前內容淡出
                activeContent.classList.add('fade-out');
                
                setTimeout(() => {
                    activeContent.classList.remove('active', 'fade-out');
                    activeContent.classList.add('hidden');
                    
                    // 新內容淡入
                    targetContent.classList.remove('hidden');
                    targetContent.classList.add('active', 'fade-in');
                    
                    setTimeout(() => {
                        targetContent.classList.remove('fade-in');
                        isTransitioning = false;
                    }, 300); // 與 CSS 動畫時間相匹配
                }, 300); // 與 CSS 動畫時間相匹配
            }
        });
    });
});


// 部落格貼文動態載入和排序功能
document.addEventListener('DOMContentLoaded', function() {
    // 模擬從 read_doc_zh.js 讀取的數據
    // 實際應用中，您需要通過 AJAX 或其他方式從後端獲取這些數據
    
    // 讀取 doc 目錄下的所有 txt 檔案作為貼文數據
    let blogData = {
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

    // Predefine a list of possible files (from blog1_zh.txt to blog99_zh.txt)
    const files = Array.from({ length: 99 }, (_, i) => `blog${i + 1}_zh.txt`);

    // Define patterns for comments and examples
    const commentPattern = /^<註解>/;
    const examplePattern = /^<範例>/;

    // Fetch and process each file
    Promise.all(
        files.map(file => fetch(`https://vvvictorzhou.github.io/ntuca/doc/${file}`).then(response => {
            if (response.ok) {
                return response.text();  // Only proceed if the file exists
            } else {
                console.warn(`File not found: ${file}`);
                return null;  // Return null for non-existent files
            }
        }))
    ).then(contents => {
        contents.forEach((content, fileIndex) => {
            if (!content) return;  // Skip processing if the file wasn't found

            const lines = content.split(/\r?\n/).filter(line => line.trim() !== '');  // Remove empty lines
            let nextLineToCapture = false;
            let currentField = null;
            let postContentCapture = false;
            let postContentBuffer = '';

            lines.forEach(line => {
                if (commentPattern.test(line)) {
                    // Assign the correct field based on the comment
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
                    // Capture the next line for fields other than postContent
                    nextLineToCapture = true;
                } else if (nextLineToCapture && currentField !== 'postContent') {
                    // Capture the data for the current field
                    data[currentField].push(line.trim().replace(/<br>/g, ''));
                    nextLineToCapture = false;
                } else if (postContentCapture) {
                    // Special handling for postContent (multiple lines)
                    postContentBuffer += line.trim().replace(/<br>/g, '');
                }
            });

            // Add postContent after concatenating all lines
            if (postContentBuffer) {
                blogData.postContent.push(postContentBuffer);
            }

            // Add the file name
            blogData.fileName.push(files[fileIndex]);
        });

        // Output the collected data
        console.log(blogData.fileName);
        console.log(blogData.postTitle);
        console.log(blogData.postSubTitle);
        console.log(blogData.postDate);
        console.log(blogData.postImage);
        console.log(blogData.postTagsZh);
        console.log(blogData.postTagsEn);
        console.log(blogData.postAuthor);
        console.log(blogData.postPinned);
        console.log(blogData.postLikes);
        console.log(blogData.postFormat);
        console.log(blogData.postContent);
    }).catch(error => {
        console.error('Error fetching files:', error);
    });

    // 獲取DOM元素
    const postsContainer = document.getElementById('posts-container');
    const sortSelect = document.getElementById('sort-select');
    
    // 創建貼文元素的函數
    function createPostElement(index) {
        const postData = {
            title: blogData.postTitle[index],
            subTitle: blogData.postSubTitle[index],
            date: blogData.postDate[index],
            image: '../img/' + blogData.postImage[index],  // 假設圖片存放在 ../img/ 目錄
            tags: blogData.postTagsZh[index].split('#').filter(tag => tag !== '').map(tag => tag.trim()),
            author: blogData.postAuthor[index],
            pinned: blogData.postPinned[index] === '1',
            likes: blogData.postLikes[index],
            content: blogData.postContent[index]
        };
        
        // 創建貼文容器
        const postElement = document.createElement('div');
        postElement.className = 'blog-posts-item';
        postElement.dataset.date = new Date(postData.date.replace(/(\d+)\/(\d+)\/(\d+)/, '$1-$2-$3')).getTime();
        postElement.dataset.likes = parseInt(postData.likes);
        postElement.dataset.pinned = postData.pinned ? '1' : '0';
        
        // 設置貼文HTML結構
        postElement.innerHTML = `
            <img src="${postData.image}" alt="${postData.title}" class="blog-posts-item-img">
            <div class="blog-posts-item-content">
                <h3 class="blog-posts-item-title">${postData.title}</h3>
                <div class="blog-posts-item-tags">
                    ${postData.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
                <div class="blog-posts-item-interactions">
                    <span class="blog-posts-item-date">${postData.date}</span>
                    <span class="blog-posts-item-likes"><i class="fas fa-heart"></i> ${postData.likes}</span>
                    ${postData.pinned ? '<span class="blog-posts-item-pinned"><i class="fas fa-thumbtack"></i></span>' : ''}
                </div>
                <p class="blog-posts-item-text">${postData.subTitle}</p>
            </div>
        `;
        
        // 添加點擊事件（如果需要）
        postElement.addEventListener('click', function() {
            // 處理貼文點擊，例如導航到詳情頁
            console.log('貼文被點擊:', postData.title);
        });
        
        return postElement;
    }
    
    // 排序貼文的函數
    function sortPosts(method) {
        // 獲取所有貼文元素
        const posts = Array.from(postsContainer.children);
        
        // 根據選擇的方法進行排序
        switch(method) {
            case 'date-desc':
                posts.sort((a, b) => b.dataset.date - a.dataset.date);
                break;
            case 'date-asc':
                posts.sort((a, b) => a.dataset.date - b.dataset.date);
                break;
            case 'likes':
                posts.sort((a, b) => b.dataset.likes - a.dataset.likes);
                break;
            default: // 預設排序：先釘選，再按日期倒序
                posts.sort((a, b) => {
                    if (a.dataset.pinned !== b.dataset.pinned) {
                        return b.dataset.pinned - a.dataset.pinned;
                    }
                    return b.dataset.date - a.dataset.date;
                });
                break;
        }
        
        // 清空容器並按新順序添加貼文
        postsContainer.innerHTML = '';
        posts.forEach(post => postsContainer.appendChild(post));
    }
    
    // 初始載入所有貼文
    function loadPosts() {
        postsContainer.innerHTML = ''; // 清空容器
        
        // 為每個貼文創建元素並添加到容器
        for (let i = 0; i < blogData.postTitle.length; i++) {
            const postElement = createPostElement(i);
            postsContainer.appendChild(postElement);
        }
        
        // 應用默認排序
        sortPosts('default');
    }
    
    // 監聽排序選擇變化
    sortSelect.addEventListener('change', function() {
        sortPosts(this.value);
    });
    
    // 初始載入貼文
    loadPosts();
    
    // 在實際應用中，您可能需要添加 AJAX 請求來從服務器獲取貼文數據
    // 例如：
    /*
    fetch('/api/posts')
        .then(response => response.json())
        .then(data => {
            blogData = data;
            loadPosts();
        })
        .catch(error => console.error('Error fetching posts:', error));
    */
});