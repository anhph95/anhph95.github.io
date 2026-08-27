```html
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

My research develops computational and observational approaches to transform large, heterogeneous ocean datasets into an integrated understanding of dynamic marine planktonic systems. My long-term goal is to bridge biological oceanography, plankton ecology, autonomous observing, and artificial intelligence to generate ecosystem information and insight at the pace and scale of modern ocean observations.

## Dynamic Planktonic Habitats and Biogeography

Traditional marine biogeography often relies on fixed spatial provinces defined primarily by broad, large-scale seasonal patterns. Yet plankton communities also respond to shorter-term and finer-scale variability associated with atmospheric forcing, shifting water masses, and mesoscale processes such as eddies, river discharge, and water-mass intrusions. My work uses observation-based classification to define habitats directly from the biological and environmental structure of the water itself, allowing ecological structure to emerge dynamically from observations rather than being prescribed in advance.

<figure class="wide-figure">
  <img src="{{ '/assets/media/global-biogeography-longhurst-province.png' | relative_url }}" alt="Global ocean biogeography map with Longhurst provinces.">
  <figcaption>Longhurst provinces define broad ocean biogeographic regions characterized by distinct seasonal patterns in phytoplankton biomass and underlying oceanographic conditions.</figcaption>
</figure>

Building on this framework, I integrate observations across platforms and scales to develop adaptive habitat classifications that capture how plankton communities reorganize as ocean conditions change. These approaches provide a more flexible view of marine biogeography, connecting broad regional patterns with the finer-scale and transient structure increasingly resolved by modern observing systems.

<div class="theme-gallery">

  <figure>
    <img src="{{ '/assets/media/dynamic-amazon-river-plume.gif' | relative_url }}" alt="Animated shipboard observation of Amazon River plume dynamics.">
    <figcaption>Seasonal Amazon River discharge creates dynamic environmental gradients as riverine and oceanic waters mix.</figcaption>
  </figure>

  <figure>
    <img src="{{ '/assets/media/habitat-delineation-bgc-argo-float.png' | relative_url }}" alt="Habitat delineation from Biogeochemical-Argo float observations.">
    <figcaption>Multivariate analysis of biogeochemical observations reveals distinct planktonic habitats within a continuously changing ocean.</figcaption>
  </figure>

</div>

## Plankton Community Variability

High-frequency imaging records make it possible to view plankton communities as dynamic assemblages that reorganize across water masses, seasons, and years. By combining IFCB observations with community-level metrics and computational approaches, I uncover recurring ecological assemblages and track how plankton metacommunities emerge, persist, and reorganize through time.

<figure class="wide-figure">
  <img src="{{ '/assets/media/ifcb-example-image-sosik-lab-whoi.png' | relative_url }}" alt="Example Imaging FlowCytobot plankton images from the Sosik Lab at WHOI.">
  <figcaption>
    IFCB imagery reveals the remarkable morphological diversity of plankton communities, transforming microscopic organisms into high-resolution observations that can be analyzed at ecosystem scale. Image credit: <a href="https://ifcb-data.whoi.edu/about" target="_blank" rel="noopener noreferrer">Sosik Lab @ WHOI</a>.
  </figcaption>
</figure>

One project addresses foundational questions in plankton ecology by examining variability in aggregate phytoplankton biomass and community composition across stations and years on the Northeast U.S. Shelf. Another brings methods inspired by natural language processing into community ecology, using approaches similar to Latent Dirichlet Allocation to uncover recurring patterns of taxon co-occurrence and represent plankton communities as mixtures of latent ecological assemblages rather than collections of isolated species.

<div class="theme-gallery">

  <figure>
    <img src="{{ '/assets/media/metacommunity-variability.png' | relative_url }}" alt="Metacommunity variability figure with annual and partitioned plankton community signals.">
    <figcaption>Metacommunity analyses reveal spatial and temporal variability in phytoplankton carbon and community composition.</figcaption>
  </figure>

  <figure>
    <img src="{{ '/assets/media/ifcb-topic-modeling.png' | relative_url }}" alt="IFCB topic modeling figure showing plankton community structure across depth and latitude.">
    <figcaption>Topic modeling uncovers recurring assemblages within complex phytoplankton communities across environmental gradients.</figcaption>
  </figure>

</div>

## Advanced Ocean Technologies

Modern ocean observing systems generate data at volumes and frequencies that increasingly require automated approaches for interpretation. I develop computer-vision workflows, scalable data-processing pipelines, interactive visualization tools, and remote-sensing approaches that connect autonomous platforms, shipboard observations, and satellites with ecological understanding.

<figure class="wide-figure">
  <video controls muted playsinline preload="metadata" poster="{{ '/assets/media/shadowgraph-yolo-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/media/shadowgraph-yolo-short.mp4' | relative_url }}" type="video/mp4">
  </video>
  <figcaption>Computer vision transforms high-volume shadowgraph imagery into automated observations of plankton abundance and distribution.</figcaption>
</figure>

These technologies help bridge the gap between data collection and ecological interpretation. Computer vision converts continuous imagery into quantitative biological observations, while automated pipelines and visualization systems make those observations accessible during field operations and ready for broader ecological synthesis.

<div class="theme-gallery">

  <figure>
    <img src="{{ '/assets/media/shadowgraph-zooplankton.jpg' | relative_url }}" alt="Shadowgraph-derived zooplankton distribution visualization.">
    <figcaption>Automated image analysis connects individual organism detections to spatial patterns in zooplankton communities.</figcaption>
  </figure>

  <figure>
    <img src="{{ '/assets/media/phytoplankton-functional-type-remote-sensing.gif' | relative_url }}" alt="Animated remote-sensing view of phytoplankton functional types.">
    <figcaption>Satellite observations extend local measurements to broadscale patterns in phytoplankton community structure.</figcaption>
  </figure>

</div>

The Stingray dashboard is available at <a href="https://stingraydash.whoi.edu" target="_blank" rel="noopener noreferrer">stingraydash.whoi.edu</a>.

## Current Directions

- Automated computer-vision pipelines for AI-assisted plankton data collection.
- Artificial intelligence approaches (including natural language processing, generative AI, and variational autoencoders, etc.)for identifying structure in complex multispecies planktonic communities.
- Integration of multiple data types, observaiton platforms to enable ecosystem-scale synthesis across space and time.

</article>
```
