---
layout: default
permalink: /id/blog/
title: Catatan
lang: id
nav: false
---

<div class="post">

  <div class="header-bar">
    <p class="header-eyebrow">Tulisan</p>
    <h1>Catatan</h1>
    <h2>Refleksi tentang riset, pengajaran, dan machine learning terapan dalam sistem energi.</h2>
  </div>

  <ul class="post-list">

    {% for post in site.posts %}

    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign post_abs_url = post.url | absolute_url %}
    {% assign translate_url = "https://translate.google.com/translate?sl=en&tl=id&u=" | append: post_abs_url %}

    <li>

{% if post.thumbnail %}
<div class="row">
      <div class="col-sm-9">
{% endif %}
      <h3>
      {% if post.redirect == blank %}
        <a class="post-title" href="{{ translate_url }}">{{ post.title }}</a>
      {% elsif post.redirect contains '://' %}
        <a class="post-title" href="{{ post.redirect }}">{{ post.title }}</a>
      {% else %}
        <a class="post-title" href="{{ translate_url }}">{{ post.title }}</a>
      {% endif %}
    </h3>
    <p>{{ post.description }}</p>
    <p class="post-meta">
      {{ read_time }} mnt baca &nbsp; &middot; &nbsp;
      {{ post.date | date: '%d %B %Y' }}
      {% if post.external_source %}
      &nbsp; &middot; &nbsp; {{ post.external_source }}
      {% endif %}
    </p>
    <div class="post-tags">
      <a class="post-tag-chip" href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
      </a>
      {% for tag in post.tags %}
        <a class="post-tag-chip" href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl}}">
          <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
        </a>
      {% endfor %}
      {% for category in post.categories %}
        <a class="post-tag-chip" href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl}}">
          <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
        </a>
      {% endfor %}
    </div>

{% if post.thumbnail %}
</div>
<div class="col-sm-3">
  <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
</div>
</div>
{% endif %}
    </li>

    {% endfor %}

  </ul>

</div>
