---
layout: default
permalink: /publications/
title: Publications
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<div class="publications" id="pub-container">

  <div class="pub-toolbar">
    <div class="header-bar-v2">
      <h1>Publications</h1>
      <h2>Nothing in science has any value to society if it is not communicated</h2>
    </div>
    <div class="pub-view-toggle">
      <button id="pub-list-btn" class="active" onclick="setPubView('list')" title="List View">
        <i class="fa-solid fa-list"></i>
      </button>
      <button id="pub-grid-btn" onclick="setPubView('grid')" title="Grid View">
        <i class="fa-solid fa-grip"></i>
      </button>
    </div>
  </div>

{% bibliography %}

</div>

<script>
  function setPubView(mode) {
    var container = document.getElementById('pub-container');
    var listBtn = document.getElementById('pub-list-btn');
    var gridBtn = document.getElementById('pub-grid-btn');
    if (mode === 'grid') {
      container.classList.add('pub-grid-view');
      listBtn.classList.remove('active');
      gridBtn.classList.add('active');
    } else {
      container.classList.remove('pub-grid-view');
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
    }
    try { localStorage.setItem('pubView', mode); } catch(e) {}
  }
  document.addEventListener('DOMContentLoaded', function () {
    try {
      var saved = localStorage.getItem('pubView');
      if (saved === 'grid') setPubView('grid');
    } catch(e) {}
  });
</script>
