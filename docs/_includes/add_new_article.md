{% capture default_value %}\{% include other_lang.md %}
    
<!-- Add your content here -->

{% include bottom_nav.md %\}{% endcapture %}
[{{site.data.i18n[page.lang].suggest_change | default: "Write new article"}}](https://github.com/NeroYuki/osudroid-guide/edit/new/docs{{ page.dir }}&value={{ default_value }})
