---
layout: default
title: Plankton Biogeography
summary: Plankton habitats shift with currents, seasons, river plumes, and ocean fronts. We study how these moving environments organize marine life across coastal and open-ocean regions.
image: /assets/media/global-biogeography-longhurst-province.png
image_alt: Global ocean biogeography map with Longhurst provinces.
order: 2
permalink: /research/biogeography/
framework_carousel:
  label: biogeography framework
  items:
    - src: /assets/media/global-biogeography-longhurst-province.png
      alt: Global ocean biogeography map with Longhurst provinces.
      caption: >-
        Biogeochemical provinces based on recurring patterns in phytoplankton biomass, seasonality, and ocean conditions provide a useful baseline for comparing large regions, but many plankton habitats shift at finer scales as fronts, eddies, river plumes, and water masses move through them. (<a href="https://doi.org/10.1016/B978-0-12-455521-1.X5000-1" target="_blank" rel="noopener noreferrer">Longhurst 1998</a>)
    - src: /assets/media/global-biogeography-Spalding-marine-ecoregions.png
      alt: Global map of marine ecoregions.
      caption: >-
        Marine ecoregions organize coastal and shelf ecosystems into comparable ecological units. They help frame biodiversity patterns, but plankton communities may respond more directly to moving water masses and local gradients than to fixed map boundaries. (<a href="https://doi.org/10.1641/B570707" target="_blank" rel="noopener noreferrer">Spalding et al. 2007</a>)
    - src: /assets/media/global-biogeography-ipcc-ar6-marine-regions.png
      alt: Global map of IPCC AR6 marine regions.
      caption: >-
        Marine regions provide standardized areas for assessing climate-driven ocean change. We use these broad frameworks as context while asking how plankton habitats vary within and across them. (<a href="https://doi.org/10.5194/essd-12-2959-2020" target="_blank" rel="noopener noreferrer">Iturbide et al. 2020</a>)
dynamic_gallery:
  - src: /assets/media/dynamic-amazon-river-plume.gif
    alt: Animated shipboard observation of Amazon River plume dynamics.
    caption: >-
      The Amazon River Plume forming a moving mosaic of low-salinity plume water and oceanic water. This gradient creates distinct habitats that favor different phytoplankton groups. (<a href="https://doi.org/10.3389/fmars.2024.1287497" target="_blank" rel="noopener noreferrer">Pham et al. 2024</a>)
  - type: video
    src: /assets/media/north-atlantic-surface-velocity.mp4
    poster: /assets/media/north-atlantic-surface-velocity-poster.jpg
    alt: Animated North Atlantic sea surface velocity with major currents and eddies.
    caption: >-
      North Atlantic surface velocity shows currents, eddies, and retroflection regions that transport and reshape water masses. These circulation features help explain how plankton communities are mixed, separated, and redistributed. (<a href="https://doi.org/10.1029/2025JC022543" target="_blank" rel="noopener noreferrer">Pham et al. 2026</a>)
habitat_figure:
  src: /assets/media/habitat-delineation-machine-learning.png
  alt: Hierarchical clustering and principal component analysis for habitat delineation from environmental and biogeochemical observations.
  caption: >-
    Hierarchical clustering and principal component analysis (PCA) applied to biogeochemical observations classify dynamic plankton habitats along water-mass, nutrient, and chlorophyll gradients rather than fixed geographic boundaries. These unsupervised methods are useful because they reduce many measurements into interpretable patterns of habitat similarity and difference, then allow biological observations from floats, ships, and satellites to be compared within those data-defined habitats. (<a href="https://doi.org/10.1029/2025JC022543" target="_blank" rel="noopener noreferrer">Pham et al. 2026</a>)
---

<article class="page research-page" markdown="1">

# {{ page.title }}

The ocean is physically connected, but it is not biologically uniform. Temperature, salinity, nutrients, light, currents, and mixing create environmental gradients that shape where different plankton groups grow, persist, or are transported. Marine biogeography asks where organisms live and why those patterns occur. It is often described using regional frameworks that divide the ocean into provinces, ecoregions, or assessment regions. These maps provide useful context, but plankton habitats are also shaped by moving gradients in salinity, nutrients, light, temperature, and water-column structure. Because the water itself moves, plankton habitats can shift, merge, and separate over time, carrying biological communities across the boundaries that appear fixed on a map. At the <a href="https://montoyalab.gatech.edu/" target="_blank" rel="noopener noreferrer">Montoya Lab @ Georgia Tech</a>, we study these habitats as dynamic biological-environmental states rather than fixed geographic units. The same location can support different plankton communities under different seasonal, meteorological, or circulation conditions, and those changes influence productivity, food-web structure, and biogeochemical cycling.

{% include carousel.html items=page.framework_carousel.items label=page.framework_carousel.label %}

Dynamic features such as river plumes, boundary currents, eddies, fronts, and water-mass intrusions create shifting habitats for plankton. These features can change the nutrients, light, and physical structure that plankton experience, which means nearby waters may support different communities. In the western tropical North Atlantic, the Amazon River Plume forms a patchwork of river-influenced and oceanic waters that favor different phytoplankton groups, including nitrogen-fixing organisms and other taxa adapted to strong salinity and nutrient gradients. Across the basin, circulation and seasonal changes alter nutrient supply, subsurface chlorophyll structure, and the movement of biological communities, so plankton biogeography becomes a question of both place and timing.

{% include media-grid.html items=page.dynamic_gallery class="theme-gallery paired-gallery" %}

To characterize these changing habitats, we use environmental and biogeochemical observations to identify recurring ocean states and compare the plankton communities associated with them. Repeated combinations of temperature, salinity, nutrients, oxygen, light, and chlorophyll reveal habitat structure that may not follow geographic boundaries. One contribution of this work is using unsupervised learning, including hierarchical clustering and principal component analysis, to let the observations define habitat types rather than forcing samples into pre-set regions. Applied to Biogeochemical-Argo profiles, this approach provides a finer-scale and more flexible view of plankton habitats than static province maps, while still being scalable across large ocean regions and comparable with satellite-derived phytoplankton functional types.

{% include figure.html item=page.habitat_figure class="wide-figure" %}

</article>
