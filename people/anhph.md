---
layout: default
title: Dr. Anh Huy Pham
permalink: /people/anhph/
description: "Profile of Dr. Anh Huy Pham."
---

{% assign person = site.data.people.apham %}

<article class="page person-page" markdown="1">

<h1>{{ person.name }}</h1>

<div class="person-page-header" markdown="1">
<img class="person-page-portrait" src="{{ person.portrait | relative_url }}" alt="{{ person.name }}">

<div class="person-page-meta">
<p><strong>Position:</strong><br>{{ person.position | markdownify | remove: '<p>' | remove: '</p>' }}</p>

<p><strong>Education:</strong><br>{% for item in person.education %}{{ item | markdownify | remove: '<p>' | remove: '</p>' }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}</p>

<p><strong>Interest:</strong><br>{% for interest in person.interests %}{{ interest }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}</p>

<nav class="profile-links" aria-label="{{ person.name }} profile links">
  <a href="{{ site.social.google_scholar }}">Google Scholar</a>
  <a href="{{ site.social.github }}">GitHub</a>
  <a href="{{ site.social.orcid }}">ORCID</a>
  <a href="{{ '/assets/files/CV-apham.pdf' | relative_url }}" download>CV</a>
</nav>
</div>
</div>

<div class="person-page-about" markdown="1">
{% for paragraph in person.paragraphs %}
{{ paragraph }}

{% endfor %}
</div>

</article>
