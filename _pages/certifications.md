---
layout: default
permalink: /certifications/
title: Certifications
lang: en
nav: false
nav_order: 4.5
---

<!-- _pages/certifications.md -->

<div class="header-bar-v2">
  <p class="header-eyebrow">Professional Training and Certification</p>
  <h1>Certifications</h1>
  <h2>{{ site.data.certificates.size }} certifications and training credentials from PT PLN (Persero), professional certification bodies, and online learning platforms.</h2>
</div>

<div class="list-groups certifications-page">
  {% assign category_order = "Metering and Revenue Protection|Risk, Fraud and Data Governance|Data, AI and Research Skills|Power Systems Planning and Asset Management|Energy Transition and Sustainability|Management and Professional Development|PLN Pre-Service Programme|Professional Competency Certification|Online Courses" | split: "|" %}
  {% assign grouped = site.data.certificates | group_by: "category" %}
  {% for category_name in category_order %}
    {% assign group = grouped | where: "name", category_name | first %}
    {% if group %}
      <div class="list-group">
        <table class="table-cv list-group-table">
          <tbody>
            <tr>
              <td class="list-group-category-icon"><i class="fa-solid fa-certificate"></i></td>
              <td colspan="2" class="list-group-category"><b>{{ category_name }}</b></td>
            </tr>
            {% assign items = group.items | sort: "date" | reverse %}
            {% for cert in items %}
              <tr>
                <td></td>
                <td class="list-group-name">
                  <a href="{{ cert.url }}" target="_blank" rel="noopener">{{ cert.title }}</a>
                  <br>
                  <span class="cert-meta">
                    {{ cert.issuer }} &middot; {{ cert.date | date: "%b %Y" }}
                  </span>
                </td>
              </tr>
            {% endfor %}
          </tbody>
        </table>
      </div>
    {% endif %}
  {% endfor %}
</div>
