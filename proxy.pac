function FindProxyForURL(url, host) {
	// Укажите IP-адрес и порт вашего прокси-сервера
	var proxy = "PROXY 147.45.160.138:12011";
	var direct = "DIRECT";

	// Список доменов для проксирования
	var domains = [
		"ggpht.com",
		"googleads.g.doubleclick.net",
		"googleusercontent.com",
		"googlevideo.com",
		"gstatic.com",
		"gvt1.com",
		"m.youtube.com",
		"play.google.com",
		"wide-youtube.l.google.com",
		"youtu.be",
		"youtube-nocookie.com",
		"youtube-ui.l.google.com",
		"youtube.com",
		"youtube.googleapis.com",
		"youtubeembeddedplayer.googleapis.com",
		"youtubei.googleapis.com",
		"yt-video-upload.l.google.com",
		"yt.be",
		"ytimg.com",
		"ytimg.l.googleusercontent.com"
	];

	// Проверка домена и проксирование
	for (var i = 0; i < domains.length; i++) {
		if (dnsDomainIs(host, domains[i])) {
			return proxy;
		}
	}
	return direct;
}
