---
title: osu!droid History
description: A history of osu!droid.
---

{% include other_lang.md %}

## Development History

### osu!droid under Pesets development 

Note: Info is mostly taken from video as well as archived forum post on Wayback Machine

30 Mar 2010: A thread on osu! forum discuss the possibility of an osu! port on Android[^1] but seem to went nowhere

05 Feb 2011: An early rhythm game, Beats, had a working prototype on an osu! Mod[^2][^3] which and later release under update 1.5b on 14 Feb 2011[4]

23 May 2011: Beats 1.6b released. Introduced support for .osu file format[^5] (up to v5 [citation needed]). Mark the first time osu map can be played on Android devices

14 July 2011: an osu! player under username Pesets begin working on a prototype of osu! on his Android tablet. After 5 days of work, on 19 July 2011, he posted his first technical demo of a dedicated osu! client on Android[^6][^7]

23 July 2011: The project reached a state where it can be opened for public testing. Pesets made a separated thread and release the 0.3a version of the game[^8]. General reaction being that the game can run well even on modest Android devices but still had a lot of bugs

Note: all changelog is taken from the changelog thread on osu! Forum[^9] unless stated otherwise

07 Aug 2011: v0.4b released with following changelog:

- Common
    - Skin support (incomplete)
    - Health calculation
    - Proper slider animation
    - Follow points
    - Re-calculating of some formulas
- Menus
    - Main menu
    - Options menu
    - Background preview of selected song
    - Other small features`

Demo video of skin support can be seen here[^10]

19 Aug 2011: v0.4.2b released with following changelog (combination of v0.4.1b and v0.4.2b):

- Common
    - "Reduce texture quality" option (may be unstable)
    - Skip offset can be auto-calculated (unstable)
    - Scanning .osz files in Osu directory
    - Star difficulty calculation (incomplete)
    - Experimental change in slider processing algorithm

Another demo video of this version can be seen here[^11][^12] - not sure why it said v0.43b, maybe a mistake, maybe there was a later version of the 0.4.xb

30 Aug 2011: v0.5b released with following changelog:

- Common
    - Hand-made mp3 player (unstable)
    - Filter in song menu
    - Scroll bar in song menu
    - Rearranged structure of song library
    - App2SD support

09 Sep 2011, 0.5.1b release with following changelog:

- Common
    - Skin support
    - Improved song menu mechanics
    - Mod selection button 
    - Selection options button
- Technical
    - Changed the score board file format
    - The "Background brightness" option
    - The "VBR offset" option for the custom player

13 Sep 2011, 0.6b release as its the last beta version of the game with following changelog:

- Common
    - "Easy", "Hard rock" and "Hidden" modes
    - Improved song search
    - "Sort by" feature
    - Slider borders
- Technical
    - Changed song library format
    - Auto caching
    - Bug fixes
    - Some minor bug fixes

Demo video of this version with modded gameplay can be seen here[^13]

16 Sep 2011, 1.0 release, the game is on Play Store and all game-related discussion is redirected to the now-defunct osu!droid forum topic, the game is aptly named osu!droid (which mean even more wayback machine bruh)
(also seem like the game come with 2 variants, a lite variant with no map pre-installed and a full variant with 4 maps pre-installed[^14])

23 Sep 2011, 1.1 release with the following changelog

- Common
    - New logo (thanks to doomed151)
    - Multitouch support
    - Kiai mode
    - "Random map" button
    - Song progress bar
- Technical
    - Offsets submenu in options
    - More accurate star difficulty calculation
    - Increased overall scale of game elements
    - Calculating average hit offset (shows along with FPS)

4 Oct 2011, 1.2 release with following changelog

- Common
    - DDL (Direct song download) system (basically osu!Direct)
    - Player name
    - Song properties menu
    - Music preview
    - Show mod icons during gameplay
- Technical
    - Sorting method in song menu is stored
    - Time progress bar (in game) is slightly changed
    - Supporting .zip files along with .osz
    - Bugfixes and small improvements

This update was immediately followed by 1.2.1 update on 8 Oct 2011 to fix a critical bug regarding DDL (also at the time the DDL system relied on YaS-online mirror). A video of it in action can be seen here[15] also interesting demo with touch pen here[^16]

Around start of Nov 2011, 1.3 was released with following changelog (this is taken from the russian forum[^17], the changelog not presented in the changelog thread for whatever reason)

- Common
    - Scaling of game elements depending of screen size
    - Slider rendering optimization
    - Lots of bugfixe
- Community-made translations:
    - Chinese by Colin Hou
    - Dutch by thedicemaster
    - French by Shywim
    - German by sovereignDE
    - Indonesian by audiserverhaseo
    - Italian by Card N'FoRcE
    - Korean by Maksimin
    - Thai by Kharl

3 Dec 2011, 1.3.2 release, this change the address for the DDL service 

-----------

The debug / Testing build section (Currently heavily relied on this thread[^18])

19 Sep 2011, 1.0.1d release 21 Sep 2011, 1.0.2d release, 22 Sep 2011, 1.0.3d release, most likely testing for 1.1 update

28 Sep 2011, 1.1.1d release, 30 Sep 2011, 1.1.2d release, 3 Oct 2011, 1.1.3d released, testing DDL (for 1.2 update)

15 Oct 2011, 1.2.3d release, most likely testing for 1.3 update

05 Feb 2012, 1.4 release, score format change

13 Mar 2012, 1.4.2a version, testing online statistic (For 1.5 update)

18 Feb 2012, 1.4.3d release the only debug version with a proper changelog

- Online scoring system
- Relax and autopilot mods
- Added "advanced options":
- You can change main and skin directory manually
- Hit bursts (can be enabled in advanced options)
- Particle effects (for now it's just cursor trail)
- Dither
- Disabling low-latency sync. (for devices without low-latency audio eg. Kindle Fire)
- Auto fade background during play ("Background brightness" option was removed)
- Pack of bugfixes

-----------


06 Mar 2012, Beta test of the online score submission start[^19] (This part of the development is intertwined with T-aiko (by Guy-kun) online score submission, in fact, users can use their account across both of these games[^18][^20])

17 Mar 2012, Online service of osu!droid publicly went live[^21] along with the release of version 1.5, all game activity is migrated to now-defunct http://osudroid.com[^22]

- Common
    - Online scoring system
    - Replays
    - "Relax" and "Autopilot" mods
    - New graphical effects
- Technical
    - "Multitouch streaming" 
    - "Advanced options" section
    - Some bugfixes

Some of the release date is deducted from people posting their setup in this thread[^23] and the russian osu!droid thread on 4PDA[^14], pinned point date is from this thread across different snapshot in wayback machine[^24]

5 May 2012, 1.5.2 release

around Jul 2012, 1.5.3 release

around Aug 2012, 1.5.4 release, another fix for DDL

5 Aug 2012, 1.5.5 release with the following changelog

- Remaked DDL system
- Support for ".osu v10" format (partial)
- Disabled replay saving

around end of Oct 2012, 1.5.6 release release with the following changelog

- Fixed DDL (yet again)
- Fixed crashing on some v10 maps

around Jan 2013, 1.5.7 release

1 Dec 2012, 1.5.8 release

2 Feb 2013, 1.5.9 release

14 Jan 2014, 1.5.10 release, mark the last public release of osu!droid

Most of the 1.5.x release is only for fixing DDL and catch up with newer osu file format, which make 1.5 the last major update of the game

Somewhere before Nov 2016, the game was delisted from Play Store (most likely due to poor rating and no longer being maintained)

28 Aug 2017, peppy officially announced the project is no longer maintained and supported. Subsequently closed down the osu!droid sub-forum

### osu!droid under Neico development 

29 Nov 2012, Neico made a thread about moving osu!droid to the OpenGL ES 2.0 backend instead of current OpenGL ES 1 (Pesets’ version), made a pre-alpha build that can’t play any map yet (but for some reason is available for downloading)[^25]

26 Sep 2013, Neico made another thread showing intention of allowing certain user to have access to the OpenGL ES 1 backend code of osu!droid[^26], not sure what is the result of this 

Note: It’s also known that osu!plus EX has been released before this post (as it was mentioned in the post)

It’s also unsure if Neico made contribution to any version of osu!droid under Pesets (especially 1.5.10)

### osu!droid under dgsrz development (osu!plus Project) 

29 Jan 2015, Neico (supposedly) leaked the osu!droid source code to the public and announce to stop working on osu!droid

1.6 released for osu!droid, now under a new project name (osu!plus) and new lead developer (dgsrz) in unknown date, with following changelog[^27]

- Changes
    - Change the option style to 4.x (Android ICS design language).
    - Change the player to new Bass Player. It is forced.
    - Change the hitsound playing approach. It is more Like PC version. (still need improvement)
    - Speed up while loading
    - Change the HR and EZ calculating. HR od, ar x1.4
- Additions
    - Support invisible visual buttons.
    - Support DT NC HT mod.
    - Support background dim.
    - Support displaying HP CS AR OD
    - Support osu welcome.

21 Feb 2015, 1.6.1 version release with following changelog

- Additions
    - Support replays

7 Mar 2015, 1.6.2 version release with following changelog

- [dgsrz] support Android 5.0
- [dgsrz] auto update
- [dgsrz] allow give opinion in app（open in settings page）
- [dgsrz] rewrite IO，increase map loading speed
- [AsakuraFuko] result database move to external，support auto merge after re-integration
- [dgsrz] stabilize client end
- [dgsrz] change network linking，disable old version
- [dgsrz] change HR score bonus，for fairness all current HR scores times 0.92
- [eprendre] improve settings menu effect in 高版本系统
- [eprendre] does not show option to hide nav bar in below android 4.4
- [AsakuraFuko] result screen UI details fix
- [AsakuraFuko] HD effect shown fix
- [AsakuraFuko] make new option of allow map sounds
- [AsakuraFuko] set own bg in home page
- [dgsrz] increase tuning of music and sound effects
- [dgsrz] lower audio delay
- [dgsrz] adjust treat whole play's sound delay as 0
- [AsakuraFuko] fix missing text in mod menu 
- [AsakuraFuko] fix when Replay loading fails Mod does not recover issue
- [AsakuraFuko] include showing BPM in mod menu
- [AsakuraFuko] change Mod menu UI
- [AsakuraFuko] disable低材质choice

(credit for Santhonius#7794 translating the changelog)

26 Apr 2015, 1.6.3 release[^31]

4 Sep 2015, 1.6.4 release[^31]

Around Jul 2017, 1.6.5 release[citation needed]

15 Jul 2018, 1.6.6 release[^31]

17 Jul 2019, 1.6.7 release[^31][^32][^33]

- Additions
    - Storyboard support
    - Import and export replay
    - New mod: Precise (PR)
    - Custom collections
    - Improve Chinese translation
    - Automatic beatmap scan on download directory
    - Option to show approach circle on first note in Hidden mod
    - In-game beatmap ranking status
    - Animated “back”, “skip”, and “scorebar”
    - In-game menu for skin selection
    - “skin.json” for advanced skin manipulation
    - In-game global score leaderboard
    - Slider hint for relatively long sliders to aid reading
    - New UI style
    - Quick settings in mod menu to adjust background dim and toggle storyboard
- Changes
    - Show map ID instead of objects/minute
    - Gameplay will pause when notification bar is dragged down
    - “Demo Spline” is turned on by default
    - Sliders are semi-transparent
    - Circle size is consistent across different aspect ratios
- Fixes
    - Fixed audio offset caused by skip button
    - Fixed an issue with infinite BPM beatmaps
    - Fixed time calculation error for sliders

25 Dec 2020, 1.6.8-pr1 release[^34]

- Additions
    - Delete local replay
    - Playfield scale
    - New mods (all unranked)
    - Sudden Death (SD): triggers fail after 1 miss, sliderbreaks do not trigger fail
    - Small Circle (SC): adds 4 to a beatmap’s circle size
    - Perfect (PF): SS or fail
    - Flashlight (FL): lightened area might be different from PC version, no dim on slider click
    - Really easy (RE): easier EZ, only decreases AR slightly instead of cutting in half
    - ScoreV2: no change to slider judgement, uses score calculation similar to osu!lazer
    - Speed modifier (adjusts a beatmap’s speed between 0.5x and 2x, stackable on top of DT/NC/HT) (unranked)
    - Force AR (adjusts a beatmap’s AR anywhere from 0 to 12.5, ignores all effect from mods (unranked)
    - User panel (tap profile on main menu to go directly to profile page)
    - Internal audio recording (Android 10+)
    - Option to remove slider lock and spinner lock (unranked)
    - Exit dialog prompt when attempting to exit the game via main menu
    - New sorting option: star rating and BPM
    - Account beatmap difficulty name in beatmap search
    - Multiple input support in one frame; enables double-tap
    - Animated hit explosions
    - Warning message for low storage
    - Option to precalculate slider path (improves performance during gameplay, but increases loading time)
    - Option to calculate performance points when opening a score
- Changes
    - Precise (PR) mod is ranked
    - Easy (EZ) mod has 3 lives
    - Relax (RX) mod and AutoPilot (AP) mod replays will be saved with 0.001x score multiplier
    - Updated star rating system to be on par with PC version
    - 10 simultaneous cursor input support
    - Improved frame rate for storyboard
- Fixes
    - Fixed a bug where follow points that are too small will make the game lag
    - Fixed a bug where multiple overlapping notes can be hit by only tapping once
    - Fixed a bug where NC mod speed multiplier is not the same as DT mod in some beatmaps
    - Fixed a bug where sliders with negative length or infinite BPM makes a beatmap unplayable
    - Fixed a bug where some beatmaps can crash the game when tapping a note due to out of bound hitsounds
    - Fixed a bug for spinners (spinners with negative length or less than 50ms will spin automatically)
    - Fixed a bug where some slider ticks fail to display correctly
    - Fixed a bug where very high velocity reverse sliders (buzz sliders) have incorrect length
    - Fixed a bug where certain skin sound elements will crash the game (audio files smaller than 1 KB will be ignored)
    - Fixed SD card bug by moving library cache file to the game's private directory
    - Fixed a bug in navigation bar (should disable properly)
    - Fixed a bug where score would show incorrectly above 100 million during gameplay
    - Fixed a bug where beatmap length greater than 1 hour is displayed incorrectly
    - Fixed a bug where full combo count in some beatmaps are inconsistent due to precision error in slider tick calculation
    - Fixed a bug where combo count stays at 0 if complex effect is disabled without restarting the game
    - Fixed a bug where score goes to negative value beyond 2,147,483,647 (score will be capped at said value)
    - Fixed a bug where an ill-formed beatmap can crash the game during import process

28 Feb 2021, 1.6.8-pr2 release[^35]

- Additions
    - Random welcome sound
    - Customizable exit sound via skins
    - Option to hide replaying text when watching a replay
- Changes
    - Custom skins are sorted alphabetically
    - Rewritten beatmap parser, now able to load some beatmaps that were not possible to load
- Fixes
    - Fixed a bug where maximum obtainable performance points is displayed incorrectly if there are misses
    - Fixed a bug where beatmap information in ranking screen is displayed incorrectly if custom speed multiplier and force AR are used
    - Fixed a bug where beatmap sorting option ignores chosen in-game folder
    - Fixed a bug where old beatmap status text reappears when global leaderboard is active
    - Fixed a bug where custom directories are not loaded properly
    - Fixed a bug where player avatars in online leaderboard are not loaded when not using Wi-Fi connection
    - Fixed a bug where re-watching replays can crash the game
    - Fixed a bug where custom beatmap skin's hit circle texture does not apply to sliders if not overridden
    - Fixed a bug where background music volume setting does not apply in song selection menu
    - Fixed a bug where some mutually exclusive mods can be selected together
    - Fixed a bug where flashlight (FL) mod is not shown (if selected) when starting gameplay
    - Fixed a bug where beatmap difficulty calculation breaks down at very high CS
    - Fixed a bug where the game crashes if going back from mod selection menu when no beatmap is selected

Future changelog is now available in the changelog file in the osu!droid GitHub repository

[^1]: https://osu.ppy.sh/community/forums/topics/27379
[^2]: http://beatsportable.com/2011/02/osu-mod-work-in-progress/
[^3]: https://www.youtube.com/watch?v=z0Wbg0C8H7U&t=75s
[^4]: http://beatsportable.com/2011/02/beats-1-5b/
[^5]: http://beatsportable.com/2011/05/beats-1-6b/
[^6]: https://osu.ppy.sh/community/forums/topics/27379?start=938120
[^7]: https://www.youtube.com/watch?v=xpcuKvPUBlY
[^8]: https://web.archive.org/web/20171205111542/https://osu.ppy.sh/forum/t/58143&start=0
[^9]: https://web.archive.org/web/20120523230354/http://osu.ppy.sh/forum/p/1030037
[^10]: https://www.youtube.com/watch?v=rPNtNGU91sE
[^11]: https://www.youtube.com/watch?v=T0OcEFiCKe4
[^12]: https://www.bilibili.com/video/BV1Tx411w7dS?from=search&seid=18373323132208260256
[^13]: https://www.bilibili.com/video/BV1ux411w7ky
[^14]: https://4pda.ru/forum/index.php?showtopic=257129&st=80
[^15]: https://www.youtube.com/watch?v=44apWpXs4QM
[^16]: https://www.youtube.com/watch?v=5Dy-xM1WqFw
[^17]: https://4pda.ru/forum/index.php?showtopic=257129&st=120
[^18]: https://web.archive.org/web/20120523224725/http://osu.ppy.sh/forum/t/62592
[^19]: https://web.archive.org/web/20120523232649/http://osu.ppy.sh/forum/t/75884
[^20]: https://web.archive.org/web/20171205153948/http://osu.ppy.sh/forum/t/75884/start=15
[^21]: https://web.archive.org/web/20120527054357/http://osudroid.com/?p=1
[^22]: https://web.archive.org/web/20120527032925/http://osudroid.com/
[^23]: https://web.archive.org/web/20171205153940/http://osu.ppy.sh/forum/t/64540/
[^24]: https://web.archive.org/web/20171130172247/https://osu.ppy.sh/forum/t/62680/
[^25]: https://web.archive.org/web/20171207004949/https://osu.ppy.sh/forum/t/107611/
[^26]: https://web.archive.org/web/20171130172325/https://osu.ppy.sh/forum/t/156852
[^27]: https://cdn.discordapp.com/attachments/325667948905758730/836858128615079936/unknown.png
[^28]: Ranking — osu!droid (archive.org)
[^29]: (42) [Osu!droid] HujuniseikouyuuP -Talent Shredder (0108 style).avi - YouTube
[^30]: [osu!droid] FREEDOM DIVE↓[Another] Played by ls7569 - YouTube
[^31]: osu!Evolution - Rhythm is just a Tap away! (archive.org)
[^32]: unknown.png (1809×582) (discordapp.com)
[^33]: unknown.png (1261×810) (discordapp.net)
[^34]: osu-droid/changelog.md at 170fb1b64aab09705a09b21b99bb13981124cfbd · osudroid/osu-droid (github.com)
[^35]: osu-droid/changelog.md at bc728a2575968235402f860d778a16064e325c07 · osudroid/osu-droid (github.com)

<!-- [] WolpisKater 🇰🇷. xi - FREEDOM DiVE [Arles] 96.05% FC #1 - YouTube
[] [Osu! Droid] WolpisKater | 97.43%FC // DADADADA (Long Version) [ULTRA BERZERK]_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili
[] WolpisKater 🇰🇷. Imperial Circus Dead Decadence - Yomi yori Kikoyu [Kyouaku] HR 96.11% FC #1 - YouTube
[] WolpisKater 🇰🇷. BABYMETAL - Road of Resistance [Rebellion x1.2] 98.28% FC - YouTube
[] WolpisKater 🇰🇷. xi - Ascension to Heaven [Final Moment] 97.62% FC #1 - YouTube
[] WolpisKater 🇰🇷. Ata - Euphoria [Ultimate Power] 93.68% FC #1 - YouTube -->

{% include bottom_nav.md %}

