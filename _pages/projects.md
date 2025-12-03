---
layout: page
title: projects
permalink: /projects/
description: Portfolio of industry, research, and open-source projects in AI/ML, healthcare analytics, and software engineering.
nav: true
nav_order: 3
display_categories: [industry, research, github]
horizontal: false
---

## Featured Research

<div class="row mt-3">
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title"><a href="/projects/optimclm/">OptimCLM</a></h5>
                <p class="card-text"><small class="text-muted">IJMI 2025</small></p>
                <p class="card-text">Optimizing clinical language models via knowledge distillation, pruning, and quantization. Achieved <strong>22.9× compression</strong> with 98% performance retention.</p>
                <a href="https://github.com/junayed-hasan/Clinical-Language-Model-Distillation-Pruning-Quantization" class="btn btn-sm btn-outline-primary"><i class="fab fa-github"></i> Code</a>
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S1386505624004271" class="btn btn-sm btn-outline-secondary"><i class="fas fa-file-alt"></i> Paper</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title"><a href="/projects/hadasmilenet/">HadaSmileNet</a></h5>
                <p class="card-text"><small class="text-muted">IEEE ICDM 2025</small></p>
                <p class="card-text">Hadamard fusion of handcrafted and deep-learning features for genuine smile recognition. <strong>Oral + Poster</strong> at ICDM 2025.</p>
                <a href="https://github.com/junayed-hasan/smile-recognition-fusion" class="btn btn-sm btn-outline-primary"><i class="fab fa-github"></i> Code</a>
                <a href="https://arxiv.org/abs/2509.18550" class="btn btn-sm btn-outline-secondary"><i class="fas fa-file-alt"></i> Paper</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title"><a href="/projects/bridging_quantum_classical/">Bridging Quantum-Classical ML</a></h5>
                <p class="card-text"><small class="text-muted">IEEE TQE (Under Review)</small></p>
                <p class="card-text">First knowledge distillation framework bridging classical neural networks with quantum circuits. <strong>12 preprint citations</strong>.</p>
                <a href="https://github.com/junayed-hasan/Quantum-Machine-Learning" class="btn btn-sm btn-outline-primary"><i class="fab fa-github"></i> Code</a>
                <a href="https://arxiv.org/abs/2311.13810" class="btn btn-sm btn-outline-secondary"><i class="fas fa-file-alt"></i> Preprint</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title"><a href="/projects/shadow_loss/">Shadow Loss</a></h5>
                <p class="card-text"><small class="text-muted">CVPR 2026 (Under Review)</small></p>
                <p class="card-text">Memory-linear deep metric learning reducing complexity from O(N²) to O(N) while accelerating convergence <strong>1.5-2×</strong>.</p>
                <a href="https://arxiv.org/abs/2311.14012" class="btn btn-sm btn-outline-secondary"><i class="fas fa-file-alt"></i> Preprint</a>
            </div>
        </div>
    </div>
</div>

---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
