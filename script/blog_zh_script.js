// 處理從別處跳轉到部落格頁面時的搜索框彈窗
document.addEventListener('DOMContentLoaded', function() {
    const searchPopup = document.querySelector('.search-popup');
    const searchInput = document.getElementById('search-input');

    // 解析 URL 查詢參數
    const urlParams = new URLSearchParams(window.location.search);
    const searchOpen = urlParams.get('search');

    // 如果查詢參數中包含 search=open，則彈出搜索框
    if (searchOpen === 'open') {
        searchPopup.classList.add('active');
        searchInput.focus();
        document.body.style.overflow = 'hidden';
    }

    // 如果查詢參數中包含 tag=xxx，則彈出搜索框、並將該標籤填入搜索框
    const searchTag = urlParams.get('tag');
    if (searchTag) {
        searchPopup.classList.add('active');
        searchInput.value = searchTag;
        searchInput.focus();
        document.body.style.overflow = 'hidden';
    }
});

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
        postSDGs: [],
        postSeries: [],
        postContent: [],
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
                    if (line.includes('永續發展目標')) {
                        // 本變數也是單行字串，例如 13,17，請以逗號,作為分隔，將各個檔案的 SDGs 皆以子陣列形式存放入此變數
                        currentField = 'postSDGs';
                        blogData.postSDGs.push(line.split(',').map(sdg => sdg.trim()));
                    }
                    if (line.includes('貼文系列')) currentField = 'postSeries';
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
        console.log(blogData.postSDGs);
        console.log(blogData.postSeries);
        console.log(blogData.postContent);

        // 初始載入貼文
        loadPosts();
    }).catch(error => {
        console.error('Error fetching files:', error);
    });

    // 獲取DOM元素
    const postsContainer = document.getElementById('posts-container');
    const sortSelect = document.getElementById('sort-select');
    const mainseriesSelect = document.getElementById('series-select');
    const seriesSelect = document.getElementById('search-series-select');
    
    // 創建貼文元素的函數
    function createPostElement(index) {
        const postData = {
            fileName: blogData.fileName[index],
            title: blogData.postTitle[index],
            subTitle: blogData.postSubTitle[index],
            date: blogData.postDate[index],
            image: '../img/' + blogData.postImage[index],
            tags: blogData.postTagsZh[index].split('#').filter(tag => tag !== '').map(tag => tag.trim()),
            author: blogData.postAuthor[index],
            pinned: blogData.postPinned[index] === '1',
            likes: blogData.postLikes[index],
            format: blogData.postFormat[index],
            series: blogData.postSeries[index],
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
        postElement.dataset.fileName = postData.fileName;
        postElement.dataset.series = postData.series;
    
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
                    <span class="blog-posts-item-series"><i class="fas fa-paperclip"></i> ${postData.series}</span>
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
    
    // 篩選貼文系列的函數，包含全部、氣候職人誌、與部長有約
    filterPostsBySeries = function(series) {
        const posts = Array.from(postsContainer.children);
        posts.forEach(post => {
            if (series === '全部' || post.dataset.series === series) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // 初始載入所有貼文
    function loadPosts() {
        postsContainer.innerHTML = ''; // 清空容器


        // 為每個貼文創建元素並添加到容器
        for (let i = 0; i < blogData.postTitle.length; i++) {
            const postElement = createPostElement(i);
            postsContainer.appendChild(postElement);
        }
        
        // 讀取 url 查詢參數是否有 ?series=氣候職人誌 還是 ?series=與部長有約
        const urlParams = new URLSearchParams(window.location.search);
        const seriesParam = urlParams.get('series');
        if (seriesParam) {
            mainseriesSelect.value = seriesParam;
            seriesSelect.value = seriesParam;
            filterPostsBySeries(seriesParam);
        } else {
            mainseriesSelect.value = '全部';
            seriesSelect.value = '全部';
            filterPostsBySeries('全部');
        }

        // 應用默認排序
        sortPosts('default');
    }

    // 監聽系列選擇變化
    mainseriesSelect.addEventListener('change', function() {
        seriesSelect.value = this.value;
        filterPostsBySeries(this.value);

        // 如果系列選擇發生改變，調整過濾內容顯示 
        const filterContent = document.querySelector('.blog-filter-content');
        
        filterContent.innerHTML = '<span>當前篩選為空</span>';

    });
    
    // 監聽排序選擇變化
    sortSelect.addEventListener('change', function() {
        sortPosts(this.value);
    });
});


// 部落格貼文搜索功能 - 增強版
document.addEventListener('DOMContentLoaded', function() {
    console.log('執行部落格貼文搜索功能');
    const filterContent = document.querySelector('.blog-filter-content');
    const searchInput = document.getElementById('search-input');
    const searchSubmit = document.getElementById('search-submit-pop');
    const seriesSelect = document.getElementById('search-series-select');
    const mainseriesSelect = document.getElementById('series-select');
    const postsContainer = document.getElementById('posts-container');

    // 關鍵詞預處理函數
    function preprocessKeywords(keyword) {
        if (!keyword || keyword.trim() === '') return [];
        
        // 移除多餘空白，分割關鍵詞（支援逗號、空白、中文逗號分隔）
        const keywords = keyword.trim()
            .split(/[,，\s]+/)  // 用逗號、中文逗號、空白分割
            .filter(k => k.trim() !== '')  // 移除空字串
            .map(k => k.trim().toLowerCase());  // 統一轉小寫
        
        console.log('處理後的關鍵詞:', keywords);
        return keywords;
    }

    // 計算匹配分數的函數
    function calculateMatchScore(text, keywords) {
        if (!text || keywords.length === 0) return 0;
        
        text = text.toLowerCase();
        let score = 0;
        let matchedKeywords = 0;
        
        keywords.forEach(keyword => {
            if (text.includes(keyword)) {
                matchedKeywords++;
                // 完整單詞匹配給更高分數
                const wordBoundaryRegex = new RegExp(`\\b${keyword}\\b`, 'i');
                if (wordBoundaryRegex.test(text)) {
                    score += 2; // 完整單詞匹配
                } else {
                    score += 1; // 部分匹配
                }
            }
        });
        
        // 匹配關鍵詞比例獎勵
        const matchRatio = matchedKeywords / keywords.length;
        score *= (1 + matchRatio);
        
        return score;
    }

    // 增強的搜索匹配函數
    function isMatchingPost(post, keywords, matchMode = 'any') {
        if (keywords.length === 0) return true;
        
        const titleElement = post.querySelector('.blog-posts-item-title');
        const subTitleElement = post.querySelector('.blog-posts-item-text');
        
        if (!titleElement || !subTitleElement) return false;
        
        const title = titleElement.textContent.toLowerCase();
        const subTitle = subTitleElement.textContent.toLowerCase();
        const tags = Array.from(post.querySelectorAll('.blog-posts-item-tags .tag'))
                         .map(tag => tag.textContent.toLowerCase());
        
        // 計算各部分的匹配分數
        const titleScore = calculateMatchScore(title, keywords);
        const subTitleScore = calculateMatchScore(subTitle, keywords);
        const tagsScore = Math.max(...tags.map(tag => calculateMatchScore(tag, keywords)), 0);
        
        // 加權總分（標題權重最高）
        const totalScore = titleScore * 3 + subTitleScore * 1.5 + tagsScore * 2;
        
        // 存儲分數用於排序
        post.dataset.searchScore = totalScore;
        
        if (matchMode === 'all') {
            // 全部關鍵詞都要匹配
            return keywords.every(keyword => 
                title.includes(keyword) || 
                subTitle.includes(keyword) || 
                tags.some(tag => tag.includes(keyword))
            );
        } else {
            // 任一關鍵詞匹配即可，但有最低分數要求
            return totalScore > 0.5;
        }
    }

    function filterPosts(keyword, selectedSeries, matchMode = 'any') {
        const keywords = preprocessKeywords(keyword);
        const posts = Array.from(postsContainer.children);
        let hasResult = false;
        let matchedPosts = [];

        posts.forEach(post => {
            const postSeries = post.dataset.series;
            const matchesKeyword = isMatchingPost(post, keywords, matchMode);
            const matchesSeries = (selectedSeries === "全部" || postSeries === selectedSeries);

            if (matchesKeyword && matchesSeries) {
                post.style.display = "block";
                matchedPosts.push(post);
                hasResult = true;
            } else {
                post.style.display = "none";
            }
        });

        // 如果有搜索結果，按相關性排序
        if (hasResult && keywords.length > 0) {
            matchedPosts.sort((a, b) => {
                const scoreA = parseFloat(a.dataset.searchScore) || 0;
                const scoreB = parseFloat(b.dataset.searchScore) || 0;
                return scoreB - scoreA; // 降序排列
            });
            
            // 重新排列 DOM 元素
            matchedPosts.forEach(post => {
                postsContainer.appendChild(post);
            });
        }

        console.log('hasResult:', hasResult);
        console.log('搜索關鍵詞:', keywords);

        // 顯示警示彈窗
        if (!hasResult) {
            document.getElementById('alert-keyword').textContent = keyword;
            document.getElementById('alert-keyword-series').textContent = selectedSeries;
            document.getElementById('alert-popup').style.display = 'block';
            document.getElementById('alert-overlay').style.display = 'block';
            document.querySelector('.blog-sort-content').style.display = 'none';
        }
    }
    
    // 監聽確認按鈕，關閉彈窗
    document.getElementById('alert-confirm-btn').addEventListener('click', function() {
        document.getElementById('alert-popup').style.display = 'none';
        document.getElementById('alert-overlay').style.display = 'none';
    });

    function showFilterTag(keyword, selectedSeries) {
        console.log('執行顯示過濾標籤');
        const keywords = preprocessKeywords(keyword);
        const keywordDisplay = keywords.length > 0 ? keywords.join(', ') : '';
        
        if (keywordDisplay === '') {
            filterContent.innerHTML = `<span>當前篩選：</span> <span class="filter-tag">${selectedSeries}</span>
            <button id="clear-filter">清除篩選</button>`;
        } else {
            filterContent.innerHTML = `<span>當前篩選：</span> <span class="filter-tag">${selectedSeries}</span> <span class="filter-tag">${keywordDisplay}</span> 
            <button id="clear-filter">清除篩選</button>`;
        }

        document.getElementById('clear-filter').addEventListener('click', function() {
            searchInput.value = '';
            filterContent.innerHTML = '<span>當前篩選為空</span>';
            document.querySelector('.blog-sort-content').style.display = 'flex';
            
            // 恢復原始順序並顯示所有貼文
            Array.from(postsContainer.children).forEach(post => {
                post.style.display = "block";
                delete post.dataset.searchScore; // 清除搜索分數
            });
            
            const noResultsMessage = document.getElementById('no-results-message');
            if (noResultsMessage) {
                noResultsMessage.remove();
            }
            
            seriesSelect.value = '全部';
            mainseriesSelect.value = '全部';
        });
    }

    // 新增搜索模式切換功能（可選）
    function addSearchModeToggle() {
        const searchContainer = document.querySelector('.search-container'); // 假設搜索容器
        if (searchContainer) {
            const modeToggle = document.createElement('div');
            modeToggle.innerHTML = `
                <label style="font-size: 12px; margin-left: 10px;">
                    <input type="checkbox" id="match-all-mode"> 需要匹配所有關鍵詞
                </label>
            `;
            searchContainer.appendChild(modeToggle);
        }
    }

    // 監聽搜索按鈕
    searchSubmit.addEventListener('click', function() {
        const keyword = searchInput.value.trim();
        const selectedSeries = seriesSelect.value;
        const matchAllMode = document.getElementById('match-all-mode');
        const matchMode = (matchAllMode && matchAllMode.checked) ? 'all' : 'any';
        
        if (keyword || selectedSeries !== "全部") {
            mainseriesSelect.value = selectedSeries;
            filterPosts(keyword, selectedSeries, matchMode);
            showFilterTag(keyword, selectedSeries);
            setTimeout(() => {
                document.querySelector('.search-popup').classList.remove('active');
                document.body.style.overflow = '';
            }, 100);
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const keyword = searchInput.value.trim();
            const selectedSeries = seriesSelect.value;
            const matchAllMode = document.getElementById('match-all-mode');
            const matchMode = (matchAllMode && matchAllMode.checked) ? 'all' : 'any';
            
            if (keyword || selectedSeries !== "全部") {
                filterPosts(keyword, selectedSeries, matchMode);
                showFilterTag(keyword, selectedSeries);
                setTimeout(() => {
                    document.querySelector('.search-popup').classList.remove('active');
                    document.body.style.overflow = '';
                }, 100);
            }
        }
    });

    // 可選：初始化搜索模式切換
    // addSearchModeToggle();
});

// 點擊熱門搜尋詞自動填入搜索框
document.addEventListener('DOMContentLoaded', function() {
    const hotSearchLinks = document.querySelectorAll('.hot-searches a');
    const searchInput = document.getElementById('search-input');
    console.log('read hot searches',hotSearchLinks);

    hotSearchLinks.forEach(link => {
        link.addEventListener('click', function() {
            const keyword = link.getAttribute('data-keyword');
            console.log(keyword)
            searchInput.value = keyword;  // 將點擊的熱門詞填入搜索框
            searchInput.focus();          // 自動聚焦到輸入框
        });
    });
});

// 點擊貼文跳轉到貼文頁面
const postsContainer = document.getElementById('posts-container');
postsContainer.addEventListener('click', function(e) {
    const postElement = e.target.closest('.blog-posts-item');
    if (!postElement) return;

    const postFileName = postElement.dataset.fileName;
    window.location.href = `post_zh_index.html?post_file_name=${encodeURIComponent(postFileName)}`;
});

// 寄送電子郵件
function sendMail() {
    var email = "contact@example.com"; // 收件人電子郵件地址
    var subject = "An Email for NTUCA"; // 電子郵件主題
    var body = "Please write your message here."; // 電子郵件內容
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// 部落格子選單展開/收合
document.addEventListener('DOMContentLoaded', function () {
    // 行動版：控制部落格子選單展開/收合
    const blogToggle = document.querySelector('.sidebar-blog-toggle');
    const sidebarSubmenu = document.querySelector('.sidebar-submenu');

    if (blogToggle) {
        blogToggle.addEventListener('click', function (e) {
            e.preventDefault();
            sidebarSubmenu.style.display = sidebarSubmenu.style.display === 'block' ? 'none' : 'block';
            blogToggle.classList.toggle('active');
        });
    }
});