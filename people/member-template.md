---
layout: default
title: Future Member Name
permalink: /people/member-id/
description: "Profile of Future Member Name."
published: false
---

<!--
Future member setup:

1. Copy this file to people/member-id.md.
2. Change title, permalink, description, and `person_id` below.
3. Remove `published: false`.
4. Create a matching data file at _data/people/member-id.yml.
5. Add `member-id` under `about.people` in _data/home.yml so the member appears on the homepage.

Suggested _data/people/member-id.yml fields:

id: member-id
name: Future Member Name
portrait: /assets/media/portrait-member-id.jpg
url: /people/member-id/
interests:
  - Interest One
  - Interest Two
  - Interest Three
position: Current position, department or program, institution
education:
  - Degree, Program, Institution, Year
  - Degree, Program, Institution, Year
paragraphs:
  - First profile paragraph.
  - Second profile paragraph.
-->

{% assign person_id = "member-id" %}
{% assign person = site.data.people[person_id] %}

<article class="page person-page" markdown="1">

<h1>{{ person.name }}</h1>

<div class="person-page-header" markdown="1">
<img class="person-page-portrait" src="{{ person.portrait | relative_url }}" alt="{{ person.name }}">

<div class="person-page-meta">
<p><strong>Position:</strong><br>{{ person.position | markdownify | remove: '<p>' | remove: '</p>' }}</p>

<p><strong>Education:</strong><br>{% for item in person.education %}{{ item | markdownify | remove: '<p>' | remove: '</p>' }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}</p>

<p><strong>Interest:</strong><br>{% for interest in person.interests %}{{ interest }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}</p>
</div>
</div>

<div class="person-page-about" markdown="1">
{% for paragraph in person.paragraphs %}
{{ paragraph }}

{% endfor %}
</div>

</article>
