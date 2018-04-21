const logo = `<div id="{{ id }}" class="{{ moduleClass }}">
    <div class="logo">
        {% if logo | trim %}
            {{ logo }}
        {% endif %}
        <span class="secondary_logo_text">{{ text_logo_slogen }}</span>
    </div>
</div>`

export default logo
