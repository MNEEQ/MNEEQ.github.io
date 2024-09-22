function FindProxyForURL(url, host) {
	// Укажите IP-адрес и порт вашего прокси-сервера
	var proxy = "PROXY 147.45.160.138:12011";
	var direct = "DIRECT";

	// Список доменов для проксирования
	var domains = [
		"m.youtube.com",
		"youtube.com",
		"googlevideo.com",
		"googleusercontent.com",
		"youtube-nocookie.com",
		"ytimg.com",
		"ytimg.l.googleusercontent.com",
		"gstatic.com",
		"play.google.com",
		"googleads.g.doubleclick.net",
		"ggpht.com"
	];

	// Проверка домена и проксирование
	for (var i = 0; i < domains.length; i++) {
		if (dnsDomainIs(host, domains[i])) {
			return proxy;
		}
	}
	return direct;
}
