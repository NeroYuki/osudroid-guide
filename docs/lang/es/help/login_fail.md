---
title: No puedes iniciar sesion en osu!droid? Intenta esto
description: Una guia para resolver problemas que los usuarios puedan llegar a tener a la hora de iniciar sesion en osu!droid
---

{% include other_lang.md %}
 
<!--Remember to replace the filename (.md) with a unique filename-->   
<!--Your content here-->

- Si el lugar donde suele estar el panel de ranking no aparece: Revisa la opcion de "Server Connection" en Options > Account Options
- Si el panel muestra "Cannot log in - Wrong name or password": Revisa tus credenciales de inicio de sesion. Si es necesario intenta resetear tu contraseña en el [sitio web de osu!droid](https://osudroid.moe)
- Si el panel se queda atascado en "Logging in... - Connecting to server...":
  - Revisa tu internet, aunque si estas aqui supongo que si tienes.
  - Revisa si puedes acceder a [la pagina web de osu!droid](https://osudroid.moe). Si puedes, prueba a borrar la cache del juego o reinstalarlo
  - Si no puedes, lo mas probable es que tu proveedor de servicios de internet haya bloqueado el acceso a los servidores de osu!droid
    - En caso de bloqueo por DNS (es lo mas frecuente, asume que esto es la primera razon). Cambia las configuraciones de tu dispositivo para que use "DNS Privado"
      ![Alt text]({{site.baseurl}}/assets/images/Screenshot_20240218-110546_Settings_suggestions~2.png)
      ![Alt text]({{site.baseurl}}/assets/images/Screenshot_20240218-110608_Settings~2.png)
    - Si el metodo mencionado antes no funciona o es muy dificil para ti, usa la app [1.1.1.1 de cloudflare](https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone) y enciende el switch de 1.1.1.1
    - En caso de que esten bloqueando la IP del juego. Usa una VPN para jugar al juego (Proton VPN (gratis))
  - En caso que ninguna de las cosas que hayas hecho funcione, lo mas probable es que el servidor este mas para alla que para aca (muerto). Pregunta a otros jugadores o unete al servidor de discord de [osu!droid International](https://discord.gg/nyD92cE) para mas actualizaciones y soporte.

{% include bottom_nav.md %}
