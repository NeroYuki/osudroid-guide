---
Title: Customizing how osu!droid look
Description: A Comprehensive Guide on how to customizing your osu!droid interface
---

{% include other_lang.md %}

### 0. Basic graphic option explained and recommendation

- **Background quality:** Make background a blurry mess in-game for a negligible improvement in game performance
- **Background brightness:** The exact opposite of background dim in osu! PC, with 0 being pitch black and 100 being full background brightness
- **Select skin:** See next part
- **Keep background aspect ratio:** It does what it said, instead of extending the background to fill the screen
- **Hit error meter:** This bar shows how accurate in timing you are hitting notes in-game, the bar should be self-explainatory (I hope so)
- **Spinner style:** Please just use ~~modern~~ classical
    - *Note:* The way spinner type work in the game is pretty wonky. But in general modern spinner allows player to spin BEFORE classical spinner does. In theory you can score more spinner point this way. But due to the fact that all other hit circle (and slider?) cannot be hit during spinner, there will be cases when it is literally impossible to hit notes before a spinner if modern spinner is in use. So for your own safety, please use classical
- **Force show first approach circle:** Does what it said, only in Hidden mod
- **Hide replay marquee, Hide Gameplay UI:** Does what it said
- **Beatmap skins:** Beatmap can have specific skin element attached to it, enable this option will load these skin elements if available. Recommend to turn off unless the beatmap insist you to turn on
- **Combo burst:** Show *anime* if player reach a certain combo coun. Recommend to turn off
- <TODO: add the rest>
- **FPS:** Shows FPS, turn on to see how badly the game is chugging ADDITIONALLY also show Average offset of your hit to all notes in the beatmap so far (note that this differ from osu! PC when the ms number is frame time)
- **Complex Effect:** Recommend off for performance reason
- **Using snaking in sliders:** Recommend on to aid readability in heavy slider beatmaps
- **Don't change background background dim level during break:** Does what it said, can turn off if you are sensitive to bright background transition
- **Cursor:** Show cursor in-game.
    - *Note:* The main problem of showing cursor in-game that cursor has to be drawn on the screen and thus limited by the game framerate AND the device's screen refresh rate. While the game already handle input in a separate input thread which should have significantly better response time. The cursor drawn on screen can appear lagging behind where it should be.
- **Cursor size:** It adjust what it said. I recommend a slightly lower value than the default of 100 (I use 70)
- **Burst Effect:** Does what it said (TODO: add which element is responsible for the burst graphic), recommend off or performance reason and if you are sensitive to fun lights and colors
- **Particle Effects:** Basically for cursor trail, but not quite to the effect of osu! PC, negligible performance impact so feel free to have it on or off
- **Dither:** Does nothing
    - *Note*: It used to do what it said, at the cost of performance so it has always been recommended to be off. But certain update broke the setting and now it does nothing
- **UI Triangle Animation:** Does what it said, only in menu so whatever you like really
- **Combo Color**: Override default combo color
    - *Note regarding combo color:* The in-game combo color is a legacy option that only replace the default combo color in-game. If player enable Beatmap skins option earlier and the beatmap happen to have custom combo color, this option will be override. Furthermore, if skin.json `OverrideComboColors` is true, the color specified in skin.json will override BOTH beatmap specific combo color and default combo color
    
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

Use site like [osuskinner](https://osuskinner.com/) to get started with selecting skin element. Use your photo editing software of choice (for example Photoshop, GIMP, Paint.NET on PC, __insert Android option here__ to edit existing elements as well as creating new one

(TODO: add table of osu! PC skin element that does not work or does not work as intended here)

(TODO: add table of osu!droid skin element that only work exclusively for osu!droid here)

### 3. How to create new skin (Skin.json)

~~See [skin.json guide here](https://github.com/EdrowsLuo/osudroidstrings/blob/master/wiki/how%20to%20use%20skin.json/en.md)~~ [OUTDATED LOL]

See Skin.json online editor by Rian8337 [here](https://rian8337.github.io/skin-json-editor/) (which include explaination on what each of the parameter in skin.json do)

{% include bottom_nav.md %}
    
