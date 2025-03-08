---
title: Desarrollar para osu!droid
description: Una guia para como puedes contribuir para el desarrollo de osu!droid.
---

{% include other_lang.md %}

![osudroid](https://cdn.discordapp.com/attachments/259754869626241024/844308468327514152/BannerGithub.png)

#  osu-droid
[![Official International Discord](https://discordapp.com/api/guilds/316545691545501706/widget.png?style=shield)](https://discord.gg/nyD92cE)
[![Android CI](https://github.com/osudroid/osu-droid/workflows/Android%20CI/badge.svg?branch=master)](https://github.com/osudroid/osu-droid/actions?query=workflow%3A"Android+CI")
[![CodeFactor](https://www.codefactor.io/repository/github/osudroid/osu-droid/badge)](https://www.codefactor.io/repository/github/osudroid/osu-droid)
[![Patreon](https://cdn.discordapp.com/attachments/259754869626241024/844311810211708928/Patreon.png)](https://www.patreon.com/osudroid)

osu!droid es un juego de ritmo gratuito que consiste en clickear circulos al ritmo de la musica. Fue un juego desarrolado hace bastante tiempo por la comunidad de [osu!](https://osu.ppy.sh/home). Este proyecto esta siendo desarrollado ahora por un pequeño grupo de fans y con ayuda de amigos extranjeros.

## Estado de desarrollo

osu!droid aun esta en desarrollo. Algunas caracteristicas aun no estan disponibles pero es jugable y es divertido!

### Descargando el codigo fuente

Clona el repositorio:

```sh
git clone https://github.com/osudroid/osu-droid.git
```
Abre el repositorio en Android Studio.

Para mantener el codigo actualizado hasta el ultimo commit disponible, usa el siguiente comando en la terminal:

```sh
git pull
```
Lenguajes a usar:

Puedes programar en `Java` o `Kotlin`.

### Compilar

En Android estudio puedes `Compilar` una release de debug (desarrollo) para testear tus cambios. El directorio donde esta el `.apk` esta dentro de `build/output` en el directorio del repositorio que has clonado.

Si prefieres usar la terminal y estas usando linux, corre el comando `chmod +x gradlew` y el comando `./gradlew assembleDebug` dentro del directorio que has clonado para compilar la `.apk` de debug, asegurate de usar Java 8.

## Contribuir

Estamos abiertos a cualquier tipo de contribucion, siempre que ayuden. Los que no son capazes de contribuir con codigo, pueden ayudar con cosas como arreglos con la gramatica, sugerir nuevas caracteristicas o reportar bugs via [Feature request](https://github.com/osudroid/osu-droid/issues/11) o [GitHub issues](https://github.com/osudroid/osu-droid/issues).

## Licencia de uso

osu-droid esta licenciado con la licencia de uso [Apache License 2.0](https://opensource.org/licenses/Apache-2.0). Porfavor revisa el archivo de la licencia si deseas saber mas informacion.

{% include bottom_nav.md %}