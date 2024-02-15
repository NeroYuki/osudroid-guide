{% capture default_value %}%7B%25%20include%20other_lang.md%20%25%7D%0A%20%20%20%20%0A%3C%21--Your%20content%20here--%3E%0A%0A%7B%25%20include%20bottom_nav.md%20%25%7D{% endcapture %}
[{{site.data.i18n[page.lang].suggest_change | default: "Write new article"}}](https://github.com/NeroYuki/osudroid-guide/new/main/docs{{ page.dir }}&value={{ default_value }})
