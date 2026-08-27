---
layout: default
title: Research
permalink: /research/
description: "Research program of Anh H. Pham."
---

<article class="page research-page" markdown="1">

# Research

<div class="carousel" data-carousel>

  <button class="carousel-button prev" type="button" data-prev aria-label="Previous research image">‹</button>

  <figure data-slide>
    <img src="{{ '/assets/media/stingray-deployment.jpg' | relative_url }}" alt="Stingray imaging platform deployment at sea.">
    <figcaption>Deploying imaging systems at sea connects instrument development, field ecology, and real-time ocean observing.</figcaption>
  </figure>

  <figure data-slide hidden>
    <img src="{{ '/assets/media/ctd-sampling-during-rough-sea.jpg' | relative_url }}" alt="CTD sampling in rough sea conditions.">
    <figcaption>Shipboard sampling provides the physical and environmental context for autonomous and imaging observations.</figcaption>
  </figure>

  <button class="carousel-button next" type="button" data-next aria-label="Next research image">›</button>

</div>

My research develops computational and observational approaches to transform large, heterogeneous ocean datasets into an integrated understanding of dynamic marine planktonic systems. My long-term goal is to bridge biological oceanography, plankton ecology, ocean observing technologies, and artificial intelligence to generate ecosystem information and insight at the pace and scale of modern ocean observations.

## Biogeography

Marine biogeography is often described through regional frameworks that divide the ocean into provinces, ecoregions, or assessment areas. These frameworks provide useful context for comparing ecosystems across broad spatial scales, but planktonic habitats are also shaped by physical and biogeochemical gradients that move, intensify, and relax through time.

<div class="carousel" data-carousel>

  <button class="carousel-button prev" type="button" data-prev aria-label="Previous biogeography framework">‹</button>

  <figure data-slide>
    <img src="{{ '/assets/media/global-biogeography-longhurst-province.png' | relative_url }}" alt="Global ocean biogeography map with Longhurst provinces.">
    <figcaption>Longhurst provinces describe broad ocean biogeographic regions characterized by distinct seasonal patterns in phytoplankton biomass and oceanographic conditions.</figcaption>
  </figure>

  <figure data-slide hidden>
    <img src="{{ '/assets/media/global-biogeography-Spalding-marine-ecoregions.png' | relative_url }}" alt="Global map of Spalding marine ecoregions.">
    <figcaption>Spalding marine ecoregions provide a complementary coastal and shelf framework for comparing marine ecological structure.</figcaption>
  </figure>

  <figure data-slide hidden>
    <img src="{{ '/assets/media/global-biogeography-ipcc-ar6-marine-regions.png' | relative_url }}" alt="Global map of IPCC AR6 marine regions.">
    <figcaption>IPCC AR6 marine regions support synthesis of climate-driven ocean change across standardized assessment regions.</figcaption>
  </figure>

  <button class="carousel-button next" type="button" data-next aria-label="Next biogeography framework">›</button>

</div>

Dynamic environments such as river plumes, boundary currents, eddies, and water-mass intrusions create strong environmental gradients that plankton communities experience as moving habitats. In the western tropical North Atlantic, Amazon River discharge generates seasonal transitions from low-salinity, nutrient-rich plume waters to oligotrophic oceanic waters. At the basin scale, surface circulation connects equatorial currents, the North Brazil Current and its retroflection, the Gulf Stream, and mesoscale eddies that redistribute water masses and biological communities.

<div class="theme-gallery paired-gallery">

  <figure>
    <img src="{{ '/assets/media/dynamic-amazon-river-plume.gif' | relative_url }}" alt="Animated shipboard observation of Amazon River plume dynamics.">
    <figcaption>Seasonal Amazon River discharge creates dynamic environmental gradients as riverine and oceanic waters mix.</figcaption>
  </figure>

  <figure>
    <img src="{{ '/assets/media/north-atlantic-surface-velocity.gif' | relative_url }}" alt="Animated North Atlantic sea surface velocity with major currents and eddies.">
    <figcaption>North Atlantic surface velocity reveals equatorial currents, the North Brazil Current retroflection, the Gulf Stream, and eddy-driven transport.</figcaption>
  </figure>

</div>

To study these moving habitats, I use unsupervised machine learning on environmental and biogeochemical properties rather than prescribing static ecological boundaries in advance. Hierarchical clustering, principal component analysis, and related multivariate approaches allow planktonic habitats to emerge from the structure of the observations themselves, linking biological variability to water-mass properties, nutrient gradients, and optical signatures.

<figure class="wide-figure">
  <img src="{{ '/assets/media/habitat-delineation-machine-learning.png' | relative_url }}" alt="HCA and PCA plot for habitat delineation from environmental and biogeochemical properties.">
  <figcaption>Unsupervised analyses of environmental and biogeochemical observations reveal distinct planktonic habitats within a continuously changing ocean.</figcaption>
</figure>

## Planktonic Community Structure

High-frequency imaging records make it possible to view plankton communities as dynamic assemblages that reorganize across water masses, seasons, and years. By combining IFCB observations with community-level metrics and computational approaches, I uncover recurring ecological assemblages and track how plankton metacommunities emerge, persist, and reorganize through time.

<figure class="wide-figure">
  <img src="{{ '/assets/media/ifcb-example-image-sosik-lab-whoi.png' | relative_url }}" alt="Example Imaging FlowCytobot plankton images from the Sosik Lab at WHOI.">
  <figcaption>
    IFCB imagery reveals the remarkable morphological diversity of plankton communities, transforming microscopic organisms into high-resolution observations that can be analyzed at ecosystem scale. Image credit: <a href="https://ifcb-data.whoi.edu/about" target="_blank" rel="noopener noreferrer">Sosik Lab @ WHOI</a>.
  </figcaption>
</figure>

One project addresses foundational questions in plankton ecology by examining variability in aggregate phytoplankton biomass and community composition across stations and years on the Northeast U.S. Shelf. Another brings methods inspired by natural language processing into community ecology, using approaches similar to Latent Dirichlet Allocation to uncover recurring patterns of taxon co-occurrence and represent plankton communities as mixtures of latent ecological assemblages rather than collections of isolated species.

<div class="theme-gallery paired-gallery">

  <figure>
    <img src="{{ '/assets/media/metacommunity-variability.png' | relative_url }}" alt="Metacommunity variability figure with annual and partitioned plankton community signals.">
    <figcaption>Metacommunity analyses reveal spatial and temporal variability in phytoplankton carbon and community composition.</figcaption>
  </figure>

  <figure>
    <img src="{{ '/assets/media/ifcb-topic-modeling.png' | relative_url }}" alt="IFCB topic modeling figure showing plankton community structure across depth and latitude.">
    <figcaption>Topic modeling uncovers recurring assemblages within complex phytoplankton communities across environmental gradients.</figcaption>
  </figure>

</div>

## Harmful Algal Blooms

In collaboration with the Department of Marine Plankton at the Institute of Oceanography, Vietnam, I study potentially toxic harmful algae species in coastal waters. This work combines microscopic imaging, morphology analysis, DNA sequencing, bioinformatics, and culture experiments to improve species identification and connect organism-level traits with bloom dynamics.

<figure class="wide-figure">
  <img src="{{ '/assets/media/toxic-algae.png' | relative_url }}" alt="Microscopic imagery of potentially toxic harmful algae species.">
  <figcaption>Microscopic imaging and morphology analysis support identification of potentially toxic harmful algae species in collaborative work with the Department of Marine Plankton, Institute of Oceanography, Vietnam.</figcaption>
</figure>

## Ocean Technologies

My ocean technology work focuses on two connected areas: high-resolution sensors and imaging systems that resolve fine-scale biological structure, and remote-sensing approaches that place those observations in their broader oceanographic context. Together, these approaches help connect organism-scale observations with shelf-scale and global-scale ecosystem patterns.

<div class="theme-gallery paired-gallery">

  <figure>
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/media/shadowgraph-yolo-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/media/shadowgraph-yolo-short.mp4' | relative_url }}" type="video/mp4">
    </video>
    <figcaption>Computer vision transforms high-volume shadowgraph imagery into automated observations of plankton abundance and distribution. I build end-to-end pipelines that connect annotation platforms, data integration, AI-assisted annotation, model inference, and visualization.</figcaption>
  </figure>

  <figure>
    <img src="{{ '/assets/media/shadowgraph-zooplankton-distribution.jpg' | relative_url }}" alt="Shadowgraph-derived zooplankton distribution visualization.">
    <figcaption>Automated image analysis connects individual organism detections to spatial patterns in zooplankton communities.</figcaption>
  </figure>

</div>

High-resolution imaging gains ecological meaning when paired with physical and biogeochemical context. On the Northeast U.S. Shelf, frontal structure, salinity intrusions, stratification, and cross-shelf gradients shape the environments sampled by imaging systems and mobile platforms, creating a bridge between local observations and broader remote-sensing products.

<div class="theme-gallery paired-gallery">

  <figure>
    <img src="{{ '/assets/media/northeast-us-shelf-physical-properties.jpg' | relative_url }}" alt="Northeast U.S. Shelf physical properties and frontal gradients.">
    <figcaption>Hydrographic conditions during the 2023 salinity maximum intrusion show how physical structure shaped the study region. Satellite sea surface temperature from August 10, 2023 shows Northeast U.S. Shelf Long-Term Ecological Research core stations, the 200-m isobath marking the shelf break, the warm Slope Sea and Gulf Stream context, and a warm-core ring at offshore stations L9-L11. The towed-vehicle salinity section from August 11-12, 2023 shows the vehicle track, the 34.5 PSU contour, and the maximum salinity layer within the intrusion.</figcaption>
  </figure>

  <figure>
    <img src="{{ '/assets/media/phytoplankton-functional-type-remote-sensing.gif' | relative_url }}" alt="Animated remote-sensing view of phytoplankton functional types.">
    <figcaption>Satellite observations extend local measurements to broadscale patterns in phytoplankton community structure.</figcaption>
  </figure>

</div>

## Current Directions

- Automated computer-vision pipelines for AI-assisted plankton data collection.
- Artificial intelligence approaches, including natural language processing, generative AI, and variational autoencoders, for identifying structure in complex multispecies planktonic communities.
- Integration of multiple data types and observation platforms to enable ecosystem-scale synthesis across space and time.

</article>
