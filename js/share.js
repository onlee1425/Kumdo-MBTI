const url = 'https://kumdo-mbti.netlify.app/';

function kakaoShare(){
    var resultImg = document.querySelector('#resultImg');
    var resutlAlt = resultImg.firstElementChild.alt;
    const shareTitle = '동물로 알아보는 검도 MBTI 결과';
    const shareDesc = infoList[resutlAlt].name;
    const shareImage = url + 'img/img-' + resutlAlt + '.png';
    const shareURL = url + 'page.result-' + resutlAlt + '.html';
    
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDesc,
        imageUrl:
            shareImage,
        link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
        },
        },
       
        buttons: [
        {
            title: '결과확인하기',
            link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
            },
        },
        ],
    });
}
