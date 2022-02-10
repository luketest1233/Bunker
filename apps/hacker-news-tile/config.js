window.apps["hacker-news-tile"] = {};
window.apps["hacker-news-tile"]["tile"] = `<div class="box_widget">
	<div>
		<h3>Bookmarklets</h3>
		<br>
		<p> bookmarklets are little peices of code that u can execute. to install one, hover over the links and drag the link to your bookmarks bar. </p>
	</div>
	<div>
		<ul class="list">
		<li class="news-item"><a id="news0">Loading...</a></li>
			<li><a href="javascript:window.location.replace('https://google.com');">Take page out of history</a></li>
			<li ><a href="javascript:document.querySelectorAll('*').forEach(e=>e.setAttribute('style','background-color:#222;background-image:none;color:#'+(/^A|BU/.test(e.tagName)?'36c;text-decoration:underline;':'eee;')+e.getAttribute('style')))">dark mode</a></li>
			<li ><a id="news3">Loading...</a></li>
			<li ><a id="news4">Loading...</a></li>
		</ul>
	</div>

</div>`;
