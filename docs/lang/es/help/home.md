{% include other_lang.md %}

{% for page in site.data.page_metadata %}
  {% if page.category == "help" %}
<div class="card" >
    <img src="{{ page.cover }}" alt="{{ page.title }}" class="card-cover"/>
    <div class="card-info">
        <a href="{{ site.baseurl }}{{ page.lang.es.path | default: page.path }}">
            <h4 class="card-title">{{ page.lang.es.title | default: page.title }}</h4>
            <p class="card-description">{{ page.lang.es.description | default: page.description}}</p>
        </a>
    </div>
</div>
  {% endif %}
{% endfor %}

{% include add_new_article.md %}
