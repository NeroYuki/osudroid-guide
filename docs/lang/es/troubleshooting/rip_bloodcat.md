{% include other_lang.md %}

#### Me sigue apareciendo un error "java.net.ConnectException: Failed to connect to bloodcat.com/112.163.20.26:443" cuando estoy jugando.

Actualmente, la pagina ya no existe, por lo que seguira apareciendo en versiones anteriores a la 1.6.8.

Para solucionarlo, simplemente actualiza el juego a la ultima version disponible.
<!-- Explaining how was it to fix this on older versions just as a fun fact -->
De todas formas, si te interesa saberlo por simple curiosidad:

Ese error indica que Bloodcat, una pagina de descargas de mapas para osu! y osu!droid, esta teniendo problemas. El juego usa Bloodcat para obtener el estado de un mapa (ranked, approved, loved, etc)

Para arreglar esto, necesitarias una cuenta de osu!, luego ir a https://osu.ppy.sh/p/api/ y pedir una clave para acceder a la API. Despues de eso, obtendrias tu clave, luego deberias copiarla, abrir osu!droid, ir a las opciones de la cuenta, y pegar la clave en la opcion "Api Key".

<!-- Don't touch this part thank you -->
{% include bottom_nav.md %}