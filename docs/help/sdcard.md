---
title: osu!droid on SD Card
description: A guide on how to utilize your SD card for osu!droid
---

{% include other_lang.md %}

**IMPORTANT: Due to more recent Android changes that make accessing non-media data in SD Card more and more challenging. While the method described below should work for at least Android 12, it may no longer work in future version of Android**

From your SD card, please take note of its unique ID (usually something like "xxxx-xxxx" with x being a digit or character). You can see this ID by using any half-decent file explorer app (I use File Explorer+, P.S. Not sponsored). After that, create a folder name ru.nsu.ccfit.zuev.osuplus in the Android/media directory (if Android or Android/media doesn't exist, create them as well)

*It's important to make the directory name exactly like this to ensure file operation can be done on an unrooted Android device*

.

From the osu!droid app, go to Options -> Library -> Beatmap location and input /storage/<xxxx-xxxx>/Android/media/ru.nsu.ccfit.zuev.osuplus

*Do not change skin and main directory option in Advanced Options section to SD card, they will not work, only beatmap folder will*

*If this directory doesn't work for you, replace media with Data (both the folder created and the option value. However, uninstalling the game will WIPE the beatmap directory*

{% include bottom_nav.md %}
