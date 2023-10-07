{% include other_lang.md %}

#### Empezando con Elaina PP Project

Para empezar con Elaina PP Project, necesitarás una cuenta de osu!droid.
Ten en cuenta que este proceso solo se puede hacer desde el servidor de Discord en #elaina-pp-project o #bot-ground.

1. Si aún no lo has hecho, necesitas vincular tu cuenta del juego con la de Discord. Ve a uno de los canales ya mencionados y escribe "/userbind" para vincular tu cuenta. Necesitarás especificar tu email en la opción proporcionada.

2. Todos los comandos relacionados con el pp están disponibles con el comando principal "/pp".

- Por defecto, todas tus plays seran automáticamente subidas, siguiendo un criterio un tanto modesto. De otra forma, para subir manualmente tus plays, usa el comando "/pp submit". Puedes usar "/pp submit beatmap" para subir tu play en un mapa específico o "/pp submit recent" para subir tus plays más recientes.

- Ten en cuenta que solo puedes subir las 50 más recientes de esta forma, por ejemplo:

    - /pp submit recent amount: 3 (sube las 3 plays más recientes)
    - /pp submit recent amount 5 offset: 10 (sube las plays más recientes **contando desde la decima mas reciente**)
    - /pp submit recent amount:7 (debido a que solo se pueden subir hasta 5 plays a la vez de esta manera, no puedes usar más de 5 en el comando)
    - /pp submit recent amount:5 offset:49 (debido a que solo se pueden subir las 50 plays más recientes, deberías usar "offset:46" para subir 5 plays desde la 45 hasta la última más reciente)

- Si quieres subir todas tus plays anteriores, porfavor contacta con un @Language Helper, @Language moderator o @Global Moderator en el servidor de Discord.
- Solo se pueden subir mapas Ranked/Loved/Whitelisted para conseguir pp de estos.

3. Para ver tu lista de plays, usa "/pp check" 

Eso es todo lo que necesitas saber!

<!-- Don't touch this part thank you -->
{% include bottom_nav.md %}
