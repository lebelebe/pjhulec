<!--Youtube-->

<div class='youtube-box'>
    <iframe class='youtube' frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/LYLwoImFehM?color=white&amp;autoplay=0&amp;mute=1&amp;controls=0&amp;disablekb=1&amp;fs=0&amp;iv_load_policy=3&amp;loop=1&amp;cc_load_policy=0&amp;modestbranding=0&amp;showinfo=0&amp;rel=0&amp;origin=http%3A%2F%2Fhulec.co.kr&amp;widgetid=1"></iframe>
</div>

<!--Quick-->

<div id="quickMenu" class="withTop">
    <div class="box">
        <div class="btn_quick">Quick</div>
        <ul class="quick_list">
            <li class="consult"><a href="#" data-bs-toggle="modal" data-bs-target="#lental">렌탈신청</a></li>
            <li class="buy"><a href="/">일반구매</a></li>
            <li class="kakao"><a href="/">카톡상담</a></li>
            <li class="github"><a href="/">Github</a></li>				
        </ul>
    </div>
</div>
<div class="pageTop" style="display: block;">
	<div class="wrap">
		<a href="#" class="btn_top" onclick="goTop(); return false">top</a>
	</div>
</div>

<!--Modal-->

<div class="modal fade" id="lental" tabindex="-1" aria-labelledby="lentalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">렌탈상담신청</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div class="modal-body">
            <form>
                <div class="mb-3 col-8">
                    <label for="name" class="form-label">성명</label>
                    <input type="name" class="form-control" id="name">
                </div>
                <div class="row g-3 mb-3">
                    <label for="010" class="form-label">연락처</label>
                    <div class="col-md-3">
                        <select class="form-select" aria-label="010" id="010">
                            <option value="1">010</option>
                            <option value="2">011</option>
                            <option value="3">012</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">주소</label>
                    <input type="address" class="form-control" id="address">
                </div>
                <div class="mb-3">
                    <input class="form-control" type="text" value="개인정보 취급방침 약관"aria-label="개인정보 취급방침" readonly>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="agree">
                    <label class="form-check-label" for="agree">위 개인정보 취급방침에 동의합니다.</label>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">상담신청 접수하기</button>
        </div>
        </div>
    </div>
</div> 