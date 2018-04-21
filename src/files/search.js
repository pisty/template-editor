const search = `<div id="search">
    <div class="search_button">
        <a id="search_btn" onclick="moduleSearch();" class="button btn">{{button_go}}</a>
    </div>
    <div class="search_inputs">
        {% if searchCategorySelector == false %}
            {% if phone != '' %}
            <div id="header_phone"><div><a href="tel:{{phone}}">{{phone}}</a></div></div>
            {% endif %}
        {% else %}
            <div class="search_select">
                {{searchCategorySelector}}
            </div>
        {% endif %}
        <span class="search_input_left">
         <input class="disableAutocomplete input-text" type="text" placeholder="{{keyword}}" id="filter_keyword" {{search_input_add}}
            onclick="this.value=(this.value==this.defaultValue)?'':this.value;"/>
         </span>
        {{ filter_description }}
        <div id="results"></div>
    </div>
</div>
{% if category_select %}
    <script>
        var CategoryCacheUrl = "{{ url }}";
    </script>
{% endif %}
`

export default search
