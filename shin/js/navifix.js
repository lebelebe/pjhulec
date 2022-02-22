window.onload = function() {
    function naviFixed(){
        const header = document.querySelector('#page-top'); //page-top 획득
        const headerheight = header.clientHeight;//page-top height

        document.addEventListener('scroll', onScroll, { passive: true }); //scroll 이벤트

        function onScroll(){
            const scrollposition = pageYOffset; // scroll 위치
            const midnavi = document.querySelector('#mid-navi'); // mid-navi
            if (headerheight<=scrollposition){ 
                midnavi.classList.add('navi-fix')
            }
            else {
                midnavi.classList.remove('navi-fix');
            }
        }
    }
naviFixed()
}