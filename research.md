---
layout: default
title: Research
permalink: /research/
description: "Research program of Anh H. Pham."
---

<article class="page research-page" markdown="1">

# Research

{% include carousel.html items=site.data.research.intro.carousel.items label=site.data.research.intro.carousel.label class="intro-carousel research-intro-carousel" %}

{% for paragraph in site.data.research.intro.paragraphs %}
{{ paragraph }}

{% endfor %}

{% include research-listing.html %}

<h2>{{ site.data.research.current_directions.title }}</h2>

<ul>
{% for item in site.data.research.current_directions.items %}
  <li>{{ item }}</li>
{% endfor %}
</ul>

</article>
