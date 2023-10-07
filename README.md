# osudroid-guide
A guide for osu!droid (and beyond)

# Contribution Guide
### For contributor with no programming background

You can suggest changes via the website and you will be redirected to that page's editor. The editor should follow the Jekyll markdown format (see the cheatsheet [here](https://itopaloglu83.github.io/Jekyll-Markdown-Cheat-Sheet/)). After that if there is a big green button, just hit it until you have made a "Pull Request". And you are done!

**Simplified terminology:**
- Fork: your copy of the site (your edit will be there first, obviously I can't just allow you to straight up edit the site lol)
- Pull Request: your request to change the page with your change

**Notes on dealing with linking image file:**
- Remote image linking (something like `![osu logo](https://osudroid.moe/assets/img/logo.png)`) should be avoided in favor of local linking, but if you don't know how to do it, just use remote image linking for now, I will fix it later.
- If you are translating a page, please copy the image link (something like `![sayo map panel]({{site.baseurl}}/assets/images/image-2.png)`) EXACTLY into the translated version

**Note on liquid template language:**
- If you see stuff start with `{{ }}` or `{% %}`, that is the Liquid template language. It is used to make the code more reusable. Please leave it as it is if you don't know what you are doing.


### For programmer with the know-how

Clone the repository and setup a local development environment for Github Pages (See the guide [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)). 

Please note that the page directory is /docs and default baseurl is /osudroid-guide (need to be config to empty string whether by `_config.yml` or command args `--baseurl=""`). After getting the page run on your local environment go figure!

**Notes on dealing with linking image file:**
- Remote image linking should be avoided, please upload image to `/docs/assets/images` and link it from there using `{{site.baseurl}}/assets/images/<filename>`.

#### Note-to-self

**Adding new language checklist:**

- [ ] Clone pages from default language to designated /lang/(lang) folder
- [ ] Change the language's `index.md`
- [ ] Add new language to `_config.yml`
- [ ] Add new localization file in `_data/i18` folder
- [ ] Update `other_lang.md` file to include new language
- [ ] Update `404.html` file to include new language
