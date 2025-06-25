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
            window.location.href = 'blog_en_index.html';
        }
    });
    
    // Enter鍵提交搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                console.log('搜索關鍵字:', searchTerm);
                window.location.href = 'blog_en_index.html';
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
            window.location.href = 'blog_en_index.html';
        }
    });
    
    // Enter鍵提交搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                console.log('搜索關鍵字:', searchTerm);
                window.location.href = 'blog_en_index.html';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn1 = document.querySelector('.search-btn1');

    searchBtn1.addEventListener('click', function() {
        // 跳轉到 blog_zh_index.html，並傳遞查詢參數來打開搜索彈窗
        window.location.href = 'blog_en_index.html?search=open';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn2 = document.querySelector('.search-btn2');

    searchBtn2.addEventListener('click', function() {
        // 跳轉到 blog_zh_index.html，並傳遞查詢參數來打開搜索彈窗
        window.location.href = 'blog_en_index.html?search=open';
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
            postSeries: '',
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
                let nextLineToCapture = false;
                let currentField = null;
                let postContentCapture = false;
                let postContentBuffer = '';

                // 獲取需要的元素
                const postTitle = document.querySelector('.post-title');
                const postSubtitle = document.querySelector('.post-subtitle');
                const postDate = document.querySelector('.post-date span');
                const postAuthor = document.querySelector('.post-author span');
                const postTagsContainer = document.querySelector('.blog-posts-item-tags');
                const postSDGsContainer = document.querySelector('.blog-posts-item-sdgs');
                const postLikes = document.querySelector('.blog-posts-item-likes span');
                const postPinned = document.querySelector('.blog-posts-item-pinned');
                const postSeries = document.querySelector('.blog-posts-item-series');

                lines.forEach(line => {
                    if (commentPattern.test(line)) {
                        // 根據註解來判定當前要捕獲的欄位
                        if (line.includes('貼文英文標題')) currentField = 'postTitle';
                        if (line.includes('貼文英文子標題')) currentField = 'postSubTitle';
                        if (line.includes('貼文創建日期')) currentField = 'postDate';
                        if (line.includes('貼文封面圖片名稱')) currentField = 'postImage';
                        if (line.includes('貼文中文標籤')) currentField = 'postTagsZh';
                        if (line.includes('貼文英文標籤')) currentField = 'postTagsEn';
                        if (line.includes('貼文作者')) currentField = 'postAuthor';
                        if (line.includes('貼文強制釘選')) currentField = 'postPinned';
                        if (line.includes('貼文點讚數')) currentField = 'postLikes';
                        if (line.includes('貼文格式')) currentField = 'postFormat';
                        if (line.includes('貼文系列')) currentField = 'postSeries';
                        if (line.includes('永續發展目標')) {
                            // 本變數也是單行字串，例如 13,17，請以逗號,作為分隔，將各個檔案的 SDGs 皆以子陣列形式存放入此變數
                            currentField = 'postSDGs';
                            //blogData.postSDGs.push(line.split(',').map(sdg => sdg.trim()));
                        }
                        if (line.includes('貼文內容')) {
                            currentField = 'postContent';
                            postContentCapture = true;
                        } else {
                            postContentCapture = false;
                        }
                    } else if (examplePattern.test(line)) {
                        // 跳過範例
                        nextLineToCapture = true;
                    } else if (nextLineToCapture  && currentField !== 'postContent') {
                        nextLineToCapture = false;        
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

                
                // 關鍵字方框彈出
                const tooltip = document.getElementById('tooltip');
                const keywords = document.querySelectorAll('.keyword');

                // 桌面端 hover 效果
                keywords.forEach(kw => {
                kw.addEventListener('mouseenter', (e) => {
                    const text = kw.dataset.tooltip;
                    tooltip.textContent = text;
                    tooltip.classList.add('visible');
                    positionTooltip(e, kw);
                });

                kw.addEventListener('mouseleave', () => {
                    tooltip.classList.remove('visible');
                });

                // 手機點擊顯示／隱藏提示
                kw.addEventListener('click', (e) => {
                    e.stopPropagation(); // 防止事件冒泡
                    const isVisible = tooltip.classList.contains('visible');
                    if (!isVisible || tooltip.textContent !== kw.dataset.tooltip) {
                    tooltip.textContent = kw.dataset.tooltip;
                    tooltip.classList.add('visible');
                    positionTooltip(e, kw);
                    } else {
                    tooltip.classList.remove('visible');
                    }
                });
                });

                // 點空白處時關閉提示
                document.addEventListener('click', () => {
                tooltip.classList.remove('visible');
                });


                // ✅ 重綁事件
                bindCollapsibleEvents();

                // 打印所有捕獲的數據
                console.log('Captured blog data:', blogData);

                // 這些變數來自已解析的 blogData
                postTitle.textContent = blogData.postTitle;
                //postSubtitle.textContent = blogData.postSubTitle; //不顯示子標題
                postDate.textContent = blogData.postDate;
                postAuthor.textContent = blogData.postAuthor;
                postLikes.textContent = blogData.postLikes;
                postSeries.textContent = blogData.postSeries;

                // 釘選狀態
                if (blogData.postPinned === '1') {
                    postPinned.style.display = 'inline-flex';
                } else {
                    postPinned.style.display = 'none';
                }

                // 設置標籤（以 # 作為分隔）
                if (blogData.postTagsEn) {
                    const tags = blogData.postTagsEn.split('#').filter(tag => tag.trim() !== '');
                    tags.forEach(tag => {
                        // 為每個標籤前添加#
                        tag = '#' + tag.trim();
                        const tagElement = document.createElement('span');
                        tagElement.classList.add('tag');
                        tagElement.textContent = tag.trim();
                        postTagsContainer.appendChild(tagElement);
                    });
                }

                // 設置SDGs（以 , 作為分隔）
                if (blogData.postSDGs) {
                    console.log('SDGs:', blogData.postSDGs); //SDGs: 8,9,12
                    const sdgs = blogData.postSDGs.split(',').map(sdg => sdg.trim());
                    sdgs.forEach(sdg => {
                        // sdgnum: SDG1, SDG2, ...
                        const sdgClass = `SDG${sdg}`;
                        const sdgElement = document.createElement('span');
                        sdgElement.classList.add('sdg');
                        sdgElement.textContent = sdgClass.trim();
                        postSDGsContainer.appendChild(sdgElement);
                    }
                    );
                }
                
            })
            .catch(error => {
                console.error('Error loading post file:', error);
            });
    } else {
        console.warn('No post_file_name provided in URL');
    }
});

// ✅ 重新綁定可展開區域的事件
function bindCollapsibleEvents() {
    const collapsibles = document.querySelectorAll('.collapsible-container');
    console.log('重新綁定 collapsible containers:', collapsibles);

    collapsibles.forEach(function(container) {
        const header = container.querySelector('.collapsible-header');
        if (!header) return;

        header.addEventListener('click', function() {
            container.classList.toggle('active');
        });
    });

    // 錨點處理
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetSection = document.getElementById(hash);
        if (targetSection) {
            const parentCollapsible = targetSection.closest('.collapsible-container');
            if (parentCollapsible) {
                parentCollapsible.classList.add('active');
                setTimeout(() => {
                    targetSection.scrollIntoView({behavior: 'smooth'});
                }, 300);
            }
        }
    }
}





// 提示框定位（避免超出邊界）
function positionTooltip(event, element) {
    const rect = element.getBoundingClientRect();
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollX = window.scrollX || document.documentElement.scrollLeft;

    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    let top = rect.top + scrollY - tooltipHeight - 8;
    let left = rect.left + scrollX;

    // 如果上方空間不足，顯示在下方
    if (top < scrollY) {
        top = rect.bottom + scrollY + 8;
    }

    // 如果右側超出畫面，向左縮排
    if (left + tooltipWidth > scrollX + window.innerWidth) {
        left = scrollX + window.innerWidth - tooltipWidth - 10;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
}


// 複製當前網站 URL 到剪貼簿
document.addEventListener('DOMContentLoaded', function() {
    const copyLinkButton = document.querySelector('.copy-link-button');
    const alertPopup = document.querySelector('.alert-popup');
    const alertOverlay = document.querySelector('.alert-overlay');
    const alertConfirmButton = document.querySelector('#alert-confirm-btn');

    if (copyLinkButton) {
        copyLinkButton.addEventListener('click', function(e) {
            e.preventDefault();  // 防止 <a> 頁面跳轉的預設行為

            // 獲取當前網站 URL 並複製到剪貼簿
            const currentURL = window.location.href;
            navigator.clipboard.writeText(currentURL).then(() => {
                // 顯示彈窗提示成功
                alertPopup.style.display = 'block';
                alertOverlay.style.display = 'block';

                // 自動隱藏彈窗
                setTimeout(() => {
                    alertPopup.style.display = 'none';
                    alertOverlay.style.display = 'none';
                }, 3000); // 彈窗將在 3 秒後自動關閉
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    // 手動點擊確認按鈕也能關閉彈窗
    if (alertConfirmButton) {
        alertConfirmButton.addEventListener('click', function() {
            alertPopup.style.display = 'none';
            alertOverlay.style.display = 'none';
        });
    }
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

// 切換語言按鈕功能
document.addEventListener('DOMContentLoaded', function () {
    const langSwitch = document.querySelector('.lang-switch');
  
    if (langSwitch) {
      langSwitch.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止原始跳轉
  
        // 取得當前網址參數中的 post_file_name
        const urlParams = new URLSearchParams(window.location.search);
        const currentFile = urlParams.get('post_file_name');
  
        if (currentFile) {
          // 將 blog4_zh.txt 轉為 blog4_en.txt
          const newFile = currentFile.replace('_en.txt', '_zh.txt');
  
          // 導向中文版網址並加上新的 post_file_name
          const newHref = `post_zh_index.html?post_file_name=${encodeURIComponent(newFile)}`;
          window.location.href = newHref;
        } else {
          // 若無 post_file_name，直接跳轉原本的 href
          window.location.href = langSwitch.getAttribute('href');
        }
      });
    }
  });