window.apps["bookmarklet-tile"] = {};
window.apps["bookmarklet-tile"]["tile"] = `<div class="box_widget">
	<div>
		<h3>Bookmarklets</h3>
		<br>
		<br>
		
		<p> bookmarklets are little peices of code that <br> u can execute. to install one, hover over the links <br> and drag the link to your bookmarks bar. </p>
	</div>
	<div>
		<ul>
	<br>
<br>
			<li><a id="news1" href="javascript:window.location.replace('https://google.com');">Take page out of history</a></li>
			<li ><a id="news2" href="javascript:document.querySelectorAll('*').forEach(e=>e.setAttribute('style','background-color:#222;background-image:none;color:#'+(/^A|BU/.test(e.tagName)?'36c;text-decoration:underline;':'eee;')+e.getAttribute('style')))">dark mode</a></li>
			<li ><a id="news3">Loading...</a></li>
			<li ><a id="news4">Loading...</a></li>
		</ul>
	</div>

</div>`;
