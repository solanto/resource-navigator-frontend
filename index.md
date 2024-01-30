# choose a flyer

{% for i in (0..2) %}
{{ i | plus: 1 }}. [flyer {{ i | plus: 1 }}](/flyer?location={{ i }})
{% endfor %}