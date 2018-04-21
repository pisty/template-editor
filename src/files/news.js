const news = `{% extends "module/_news/news_base.tpl" %}

{% block news_pretext %}
    <div class="news_pretext">{{ news_pretext }}</div>
{% endblock %}

{% block news_list %}
    <table class="{{ tableClass }}">
        {{ newslist }}
    </table>
{% endblock %}

{% block news_all_button %}
    {% if config.get(id ~ '_show_all_button') %}
        <div class="news-all-button">
            <a class="{% block news_all_button_classes %}btn btn-primary{% endblock %}" href="{{ news_all_link |url_rewrite }}">
                <span>{{ text_news_all }}</span>
            </a>
        </div>
    {% endif %}
{% endblock %}`

export default news
