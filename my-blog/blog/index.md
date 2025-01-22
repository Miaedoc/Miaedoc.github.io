---
layout: default
title: Blog
---

# Blog

Welcome to my blog! Here are some of the posts:

{% for post in site.posts %}
  - [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% endfor %}
