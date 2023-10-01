{% include other_lang.md %}

#### I keep getting java.net.ConnectException: Failed to connect to bloodcat.com/112.163.20.26:443 popup error when I am playing the game.

**OUTDATED, THIS IS NOT LONGER SUPPORTED FROM 1.6.8 ONWARD**

The error `java.net.ConnectException: Failed to connect to bloodcat.com/112.163.20.26:443`` indicates that Bloodcat, an osu! beatmap mirror, is having problems. The game uses Bloodcat to retrieve a beatmap’s ranking status (ranked, approved, loved, etc).

You will need an osu! account to fix this. If you don’t have one, you can register for an account through the official game on PC. If you don’t have a PC, you can download osu!lazer for Android in https://github.com/ppy/osu/releases/ and register an account through there.

Start by going to https://osu.ppy.sh/p/api/ and request an API key. You will see two fields:
- Application Name: You can fill this field with any name you want (naming it with a reasonable name is advised).
- Application URL: As long as you aren’t going to use the API key for more extensive uses, you will be fine with any valid URL. For example, you can use your osu!droid profile page (refer to this FAQ page to find your profile page).

After that, you will get your API key. Copy the key, open osu!droid, head to settings -> account option and paste the key to the API key field. That’s it!

<!-- Don't touch this part thank you -->
{% include bottom_nav.md %}