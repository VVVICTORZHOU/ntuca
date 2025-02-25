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
    const blogSearchBtn = document.getElementById('search-submit-main');
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

    blogSearchBtn.addEventListener('click', function(e) {
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
    const files = Array.from({ length: 9 }, (_, i) => `blog${i + 1}_zh.txt`);

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
                    blogData[currentField].push(line.trim().replace(/<br>/g, ''));
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

        // 初始載入貼文
        loadPosts();
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
            image: '../img/' + blogData.postImage[index],
            tags: blogData.postTagsZh[index].split('#').filter(tag => tag !== '').map(tag => tag.trim()),
            author: blogData.postAuthor[index],
            pinned: blogData.postPinned[index] === '1',
            likes: blogData.postLikes[index],
            content: blogData.postContent[index]
        };
    
        // 計算該貼文是否在 20 天內
        const postDate = new Date(postData.date.replace(/\//g, '-'));
        const today = new Date();
        const timeDiff = today - postDate;
        const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
    
        // 創建貼文元素
        const postElement = document.createElement('div');
        postElement.className = 'blog-posts-item';
        postElement.dataset.date = postDate.getTime();
        postElement.dataset.likes = parseInt(postData.likes);
        postElement.dataset.pinned = postData.pinned ? '1' : '0';
    
        // 設置貼文 HTML 結構
        postElement.innerHTML = `
            <div style="position: relative;">
                <img src="${postData.image}" alt="${postData.title}" class="blog-posts-item-img">
                ${dayDiff <= 20 ? '<div class="new-label">NEW</div>' : ''}
            </div>
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
    

    

});

// 部落格貼文搜索功能
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchSubmit = document.getElementById('search-submit-pop');
    const postsContainer = document.getElementById('posts-container');
    const filterContent = document.querySelector('.blog-filter-content');

    

    function filterPosts(keyword) {
        keyword = keyword.trim().toLowerCase();
        const posts = Array.from(postsContainer.children);
        let hasResult = 0;
        posts.forEach(post => {
            const title = post.querySelector('.blog-posts-item-title').textContent.toLowerCase();
            const subTitle = post.querySelector('.blog-posts-item-text').textContent.toLowerCase();
            const tags = Array.from(post.querySelectorAll('.blog-posts-item-tags .tag'))
                             .map(tag => tag.textContent.toLowerCase());

            // 如果標題、子標題或標籤中包含關鍵字，則顯示貼文
            if (title.includes(keyword) || subTitle.includes(keyword) || tags.some(tag => tag.includes(keyword))) {
                post.style.display = "block";
                hasResult++;
            } else {
                post.style.display = "none";
            }
        });        
        
        // 如果沒有結果，顯示提示
        const noResultsMessage = document.getElementById('no-results-message');
        if (hasResult === 0) {
            if (!noResultsMessage) {
                const message = document.createElement('div');
                message.id = 'no-results-message';
                message.className = 'no-results-message';
                message.innerHTML = `未找到與 "<strong>${keyword}</strong>" 相關的貼文`;
                postsContainer.appendChild(message);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }

    function showFilterTag(keyword) {
        filterContent.innerHTML = `<span>當前篩選：</span> <span class="filter-tag">${keyword}</span> 
                                   <button id="clear-filter">清除篩選</button>`;

        document.getElementById('clear-filter').addEventListener('click', function() {
            searchInput.value = ''; // 清空輸入框
            filterContent.innerHTML = '<span>當前篩選：</span>'; // 恢復篩選欄
            Array.from(postsContainer.children).forEach(post => post.style.display = "block"); // 顯示所有貼文
            // 如果存在沒有結果的提示，則移除
            const noResultsMessage = document.getElementById('no-results-message');
            if (noResultsMessage) {
                noResultsMessage.remove();
            }

        });
    }

    // 監聽搜索按鈕
    searchSubmit.addEventListener('click', function() {
        console.log('搜索關鍵字:', searchInput.value.trim());
        const keyword = searchInput.value.trim();
        if (keyword) {
            filterPosts(keyword);
            showFilterTag(keyword);
        }
    });

    // 監聽 Enter 鍵
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const keyword = searchInput.value.trim();
            if (keyword) {
                filterPosts(keyword);
                showFilterTag(keyword);
            }
        }
    });
});
