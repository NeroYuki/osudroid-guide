{% include other_lang.md %}

{% for page in site.data.page_metadata %}
  {% if page.category == "resources" %}
<div class="card" >
    <img src="{{ page.cover }}" alt="{{ page.title }}" class="card-cover"/>
    <div class="card-info">
        <a href="{{ site.baseurl }}{{ page.path }}">
            <h4 class="card-title">{{ page.title }}</h4>
            <p class="card-description">{{ page.description}}</p>
        </a>
    </div>
</div>
  {% endif %}
{% endfor %}