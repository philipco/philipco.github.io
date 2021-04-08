---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
redirect_from:
  - /publications.html
---

**[2] Preserved central model for faster bidirectional compression in distributed settings.**  
C. Philippenko, A. Dieuleveut
[PDF](https://arxiv.org/abs/2102.12528) &nbsp;
[Code](https://github.com/philipco/mcm-bidirectional-compression)

**[1] Artemis: tight convergence guarantees for bidirectional compression in federated learning.**  
C. Philippenko, A. Dieuleveut 
[PDF](https://arxiv.org/abs/2006.14591) &nbsp;
[Code](https://github.com/philipco/artemis-bidirectional-compression) &nbsp;

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
