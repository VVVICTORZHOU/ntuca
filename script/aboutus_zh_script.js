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
        content.classList.add('tab-content');
        if (index !== 0) {
            content.classList.add('hidden');
        } else {
            content.classList.add('active');
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


// 滾動到頂部按鈕
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有时间轴项目
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // 创建 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // 当项目显示后，停止观察它
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // 当20%的项目可见时触发
    });
    
    // 开始观察每个时间轴项目
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // 为了确保初始可见的项目也能显示动画
    setTimeout(() => {
        const visibleItems = Array.from(timelineItems).filter(item => {
            const rect = item.getBoundingClientRect();
            return rect.top < window.innerHeight;
        });
        
        visibleItems.forEach(item => {
            item.classList.add('show');
        });
    }, 100);
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