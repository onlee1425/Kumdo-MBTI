function showAllAnimals() {
    // 레이어 표시
    var modal = document.getElementById("resultImgModal");
    modal.style.display = "block";

    // 설명 펼치기/접기 기능 추가
    var expandButtons = modal.getElementsByClassName("expandButton");
    for (var i = 0; i < expandButtons.length; i++) {
        var button = expandButtons[i];
        button.addEventListener('click', function () {
            var description = this.nextElementSibling;
            description.classList.toggle('hidden');
            this.textContent = description.classList.contains('hidden') ? '설명보기' : '접기';
        });
    }
  
    // 레이어 닫기 버튼 클릭 이벤트 처리
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
  }