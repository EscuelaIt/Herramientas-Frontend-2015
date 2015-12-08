/*
http://pastebin.com/wgakp4BW
Analisis e Implementación de Componentes.

Análisis:
	1)Ver el funcionamiento del componente.
	2)Ver que archivos necesito (js, css, img, fonts, etc).
	3)Analizar el código html y js que lo hace funcionar.
	4)LEER y REVISAR la DOCUMENTACIÓN, NO SEAS FLOJO y quieras todo FÁCIL. Esto hará que puedas sacar el máximo provecho del componente. 

Implementación:
	1)Nunca te adaptes a la estructura de la carpeta demo, ADAPTA el componente a la carpeta de tu proyecto.
	2)Copia los archivos necesarios a la estructura de tu carpetas (css, js, img, etc).
	3)Si el componente usa elementos multimedia, busca sus url en el css del mismo y reemplázalas por la nueva ruta que tendrán.
	4)En el css del componente nunca trates de cambiar atributos, puedes hacer que deje de funcionar, si acaso modifica colores para que se adapte al diseño de tu proyecto.
*/
function efectos()
{
	$(".galeria-sencilla").fancybox();

	$("#efecto1").fancybox({
		openEffect:"elastic",
		openSpeed:2000
	});

	$("#efecto2").fancybox({
		closeEffect:"elastic",
		closeSpeed:1500,
		helpers:
		{
			title:
			{
				type:"inside",
				position:"top"
			}
		}
	});

	$("#efecto3").fancybox({
		helpers:{
			title:
			{
				type:"outside",
				position:"top"
			},
			overlay:
			{
				css:
				{
					"background":"rgba(255,102,0,.5)"
				},
				closeClick:false
			}
		}
	});

	$("#efecto4").fancybox({
		closeEffect:"none",
		closeSpeed:5000,
		helpers:
		{
			title:
			{
				type:"over",
				position:"top"
			}
		}
	});

	$("#efecto5").fancybox({
		helpers:
		{
			title:
			{
				position:"top"
			}
		}
	});

	$(".otros-contenidos").fancybox();

	$(".social-media").fancybox({
		helpers:
		{
			media:true
		}
	});

	$(".flexslider").flexslider({
    	/*controlNav:false,
    	direction:"vertical",*/
    	animation:"slide"
	});
}

$(document).on("ready",efectos);