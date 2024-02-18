---
Title: Customizing how osu!droid look
Description: A Comprehensive Guide on how to customizing your osu!droid interface
---

{% include other_lang.md %}

### 0. Basic graphic option explained

- **Background quality:** Make background a blurry mess in-game for a negligible improvement in game performance
- **Background brightness:** The exact opposite of background dim in osu! PC, with 0 being pitch black and 100 being full background brightness
- **Select skin:** See next part
- **Keep background aspect ratio:** It does what it said, instead of extending the background to fill the screen
- **Hit error meter:** This bar shows how accurate in timing you are hitting notes in-game, the bar should be self-explainatory (I hope so)
- **Spinner style:** Please just use modern
- **Force show first approach circle:** Does what it said, only in Hidden mod
- **Hide replay marquee, Hide Gameplay UI:** Does what it said
- **Beatmap skins:** Beatmap can have specific skin element attached to it, enable this option will load these skin elements if available. Recommend to turn off unless the beatmap insist you to turn on
- **Combo burst:** Show *anime* if player reach a certain combo coun. Recommend to turn off
- <TODO: add the rest>
    
### 1. How to load existing skin into the game

Skin in osu!droid is basically a bunch of files that can change the appearance of osu!droid by swapping out the game's graphical/audio assets as well as some specific parameter that we will talk about later on with skin.json

If you already played osu! on PC, good news! osu! stable PC skins are mostly(tm) compatible with osu!droid. Bad news! some element may not behave as expected and osu! PC-specific hacks (like full screen HP bar) will be straight up broken on osu!droid. Please be aware before importing osu! PC skin. Or, you can use site like [https://tsukushi.site](https://tsukushi.site) to get osu!droid compatible skins that other players use in their usual gameplay :D

To import a skin, you download the skin from your place of interest. The downloaded file will either be in .osk or .zip extension. If it is in .zip (or .osk.zip because apparently some browser like to do so). Extract the .zip file using any half decent file explorer (or ZArchiver). Otherwise rename the .osk extension to .zip and do exactly the same. After that move the FOLDER contain all the extracted files to your osu!droid Skin folder, the file structure of your osu!droid Skin folder should looks like this:

```
<skin folder (default at osu!droid/Skin of your accessible storage)>
  |-- <Skin 1>
  | |-- approachcircle.png
  | |-- approachcirlce@2x.png
  | |-- ...
  |-- <Skin 2>
    |-- approachcircle.png
    |-- approachcirlce@2x.png
    |-- ...
```

Alright, still with me? We are pretty much done. All that's left is to re-open the game. Go to Option > Graphics > Select Skin and select the folder listed in the option and the skin is now loaded. Huzzah!

### 2. How to create new skin (Asset)

Use site like osuskinner

### 3. How to create new skin (Skin.json)

See [skin.json guide here](https://github.com/EdrowsLuo/osudroidstrings/blob/master/wiki/how%20to%20use%20skin.json/en.md)

{% include bottom_nav.md %}
    
