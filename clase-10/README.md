## WPO: Web Performance Optimization

* [Presentación](Clase_WPO-Curso_Herramientas_front-end_JavierMrt.pdf)
* [Web Page Test](http://www.webpagetest.org/)
* [PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
* [Documentación PageSpeed](https://developers.google.com/speed/docs/insights/about)
* [Evaluating network performance](https://developer.chrome.com/devtools/docs/network)
* [Rabbit for Google PageSpeed web test](https://itunes.apple.com/sa/app/rabbit-for-google-pagespeed/id968336453?mt=8) La aplicación iOS de Javier.
* [Perf.Rocks](http://perf.rocks/) Es un proyecto de un compañero, y en el cual estoy colaborando_(1)_.

_(1) Recordad que hacer Pull Request a proyectos Open Source nos hace mejores personas, y si un proyecto os gusta es muy gratificante recibir ★ ;)_

---

#### .htaccess
Este es el contenido del fichero .htaccess que nos mostró Javier en su sesión. El nombre de la archivo debe ser `.htaccess`, desde el explorador de Windows no os va ha dejar definir ese nombre, ya que considera que estamos poniendo una extensión sin nombre de archivo. Lo podéis crear directamente desde la mayoría de editores.

```
# El formato del tiempo es A + el número de segundos
# A3600 = 1 hora
# A86400 = 1 día
# A604800 = 1 semana
<IfModule mod_expires.c>
	ExpiresActive On
	ExpiresDefault "access plus 7 day"
	ExpiresByType image/gif A604800
	ExpiresByType image/png A604800
	ExpiresByType image/jpg A604800
	ExpiresByType image/jpeg A604800
	ExpiresByType image/bmp A604800
	ExpiresByType image/x-icon A2678400
	ExpiresByType application/pdf A2678400
	ExpiresByType application/x-javascript A2678400
	ExpiresByType application/javascript A2678400
	ExpiresByType text/javascript A2678400
	ExpiresByType text/html A2678400
	ExpiresByType text/css A2592000
	ExpiresByType text/xml A2678400
	ExpiresByType text/plain A2678400
	ExpiresByType application/x-shockwave-flash A604800
</IfModule>

<IfModule mod_deflate.c>
	AddOutputFilterByType DEFLATE text/css application/x-javascript application/javascript text/x-component text/html text/richtext image/svg+xml text/plain text/xsd text/xsl text/xml
	BrowserMatch ^Mozilla/4 gzip-only-text/html
	BrowserMatch ^Mozilla/4\.0[678] no-gzip
	BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
	SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png)$ no-gzip dont-vary
	<IfModule mod_headers.c>
		Header append Vary User-Agent env=!dont-vary
	</IfModule>
</IfModule>
```
