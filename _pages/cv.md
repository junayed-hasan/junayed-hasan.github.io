---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 4
description: Curriculum Vitae
---

<div class="cv-container">
  <div class="cv-actions" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
    <a href="{{ '/assets/pdf/Mohammad_Junayed_Hasan_CV.pdf' | relative_url }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: var(--global-theme-color); color: white; border-radius: 0.5rem; text-decoration: none; font-weight: 500; transition: all 0.2s;">
      <i class="fa-solid fa-eye"></i> View Full CV
    </a>
    <a href="{{ '/assets/pdf/Mohammad_Junayed_Hasan_CV.pdf' | relative_url }}" download class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: transparent; color: var(--global-theme-color); border: 2px solid var(--global-theme-color); border-radius: 0.5rem; text-decoration: none; font-weight: 500; transition: all 0.2s;">
      <i class="fa-solid fa-download"></i> Download PDF
    </a>
  </div>

  <div class="cv-preview" style="border: 1px solid var(--global-divider-color); border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <iframe 
      src="{{ '/assets/pdf/Mohammad_Junayed_Hasan_CV.pdf' | relative_url }}" 
      width="100%" 
      height="800px" 
      style="border: none; display: block;"
      title="CV Preview">
    </iframe>
  </div>

  <p style="text-align: center; margin-top: 1rem; color: var(--global-text-color-light); font-size: 0.9rem;">
    <i class="fa-solid fa-info-circle"></i> If the preview doesn't load, please use the buttons above to view or download the CV.
  </p>
</div>

<style>
.cv-actions a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-secondary:hover {
  background: var(--global-theme-color) !important;
  color: white !important;
}

@media (max-width: 768px) {
  .cv-preview iframe {
    height: 500px !important;
  }
  
  .cv-actions {
    justify-content: center;
  }
}
</style>
