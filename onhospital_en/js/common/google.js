
/* 새 UI 선택 클릭 이벤트가 발생하면 감춤 처리한 구글 번역 콤보리스트에 선택한 언어를 적용해 변경 이벤트를 발생시키는 코드  */
 document.querySelector('.translation-links').addEventListener('change',function(event) {

    let el = this.value;
    console.log("!!"+el);
    if(el != null){
        const gtcombo = document.querySelector('.goog-te-combo');
        if (gtcombo == null) {
            alert("Error: Could not find Google translate Combolist.");
            return false;
        }
        gtcombo.value = el; // 변경할 언어 적용
        alert('!');
        gtcombo.dispatchEvent(new Event('change')); // 변경 이벤트 트리거
    }
    return false;
});

function googleTranslateElementInit() {
    //setCookie('googtrans', '/en',1);
    new google.translate.TranslateElement({
        pageLanguage: 'ko',
        includedLanguages: "en,af,sq,ar,ar-EG,ar-SA,ar-AE,bg,zh-TW,zh-CN,hr,cs,da,nl,en-PH,et,fa,fi,fr,de,el,hi,hu,id,it,ja,ko,mk,ms,mn,no,pt,ro,ru,es,sv,th,tr-TR,uk,uz,vi",
        autoDisplay: false,
        multilanguagePage: true,

    }, 'google_translate_element');
}


//frequently asked questions

/////////////////////////////////

$(window).scroll(  
    function(){  
        //스크롤의 위치가 상단에서 450보다 크면  
        if($(window).scrollTop() > 450){  
        /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */  
            $('semi_box').addClass("fix");  
            //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
        }else{  
            $('semi_box').removeClass("fix");  
            //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
        }  
    }  
);  