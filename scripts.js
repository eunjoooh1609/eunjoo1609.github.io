// 모든 뉴스 아이템을 선택
const newsItems = document.querySelectorAll('.news-item');
const itemsPerPage = 5; // 한 페이지에 보여줄 뉴스 아이템 수
let currentPage = 1;
const totalPages = Math.ceil(newsItems.length / itemsPerPage);

function showPage(page) {
    // 모든 아이템 숨기기
    newsItems.forEach((item, index) => {
        item.style.display = 'none';
    });

    // 현재 페이지에 해당하는 아이템만 표시
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    for (let i = start; i < end && i < newsItems.length; i++) {
        newsItems[i].style.display = 'flex'; // Flex 스타일을 유지하여 아이템 표시
    }

    // 페이지 인디케이터 업데이트
    document.getElementById('pageIndicator').textContent = `${page}/${totalPages}`;

    // 버튼 상태 업데이트
    document.getElementById('prevBtn').disabled = page === 1;
    document.getElementById('nextBtn').disabled = page === totalPages;
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// 처음 페이지 로드 시 첫 번째 페이지 보여줌
showPage(currentPage);
