{% include other_lang.md %}

#### Getting started with Elaina PP Project

To get started with Elaina PP Project, you will need an osu!droid account.
Keep in mind that this process can only be done in #elaina-pp-project or #bot-ground.

1. If you haven’t already, you need to bind your osu!droid account with your Discord account. Go to one of the said channels and use /userbind to bind your osu!droid account with your Discord account. You must specify your email in the option provided.
2. All dpp-related commands are available via the /pp main command. The main sub-commands are noted down below.
- By default, all of your scores are automatically submitted, following a certain criterion that is pretty modest. Otherwise, to submit your plays, use /pp submit. You can use /pp submit beatmap to submit your play in a specific beatmap or /pp submit recent to submit your most recent plays.
- Keep in mind that you can only submit your 50 most recent plays via command submission. For example:
    - /pp submit recent amount:3 submits your 1st, 2nd, and 3rd most recent play
    - /pp submit recent amount:5 offset:10 submits your 10th, 11th, 12th, 13th, and 14th most recent play
    - /pp submit recent amount:3 offset:18 submits your 18th, 19th, and 20th most recent play
    - /pp submit recent amount:7 (7>5) is invalid as you can only submit up to 5 plays at once
    - /pp submit recent amount:5 offset:49 is invalid as you can only submit your 50 most recent plays. This command would submit your 49th, 50th, 51st, 52nd, and 53rd most recent play (maximum you can do is /pp submit recent amount:5 offset:46)
- If you want to submit all of your previous plays, please contact a @Language Helper, @Language Moderator, or @Global Moderator.
- Only ranked, approved, loved, and whitelisted beatmaps are eligible for granting performance points.
3. To view your current list of plays, use /pp check.

And that’s all you need to know!

<!-- Don't touch this part thank you -->
{% include bottom_nav.md %}