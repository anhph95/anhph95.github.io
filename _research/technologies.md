---
layout: default
title: Ocean Observing Technologies
summary: Long-term plankton research depends on consistent observations across cruises, platforms, and changing technologies. We develop data and visualization tools that keep ecological questions connected.
image: /assets/media/stingray-tow-sled.jpg
image_alt: Stingray tow sled on a research vessel.
order: 4
permalink: /research/technologies/
tow_sled_figure:
  src: /assets/media/tow-sled-data-integration.png
  alt: Data integration workflow for tow-sled ocean observations.
  caption: >-
    The tow-sled data workflow integrates sensor records, image data, vehicle tracks, and deployment metadata into a shared timeline. Researchers can explore mobile-platform observations in their physical and biological context, review imagery from specific water-column features, and communicate results through shared data products and figures.
machine_learning_gallery:
  - type: video
    src: /assets/media/shadowgraph-yolo-short.mp4
    poster: /assets/media/shadowgraph-yolo-poster.jpg
    alt: Computer-vision analysis of high-volume shadowgraph plankton imagery.
    caption: >-
      The shadowgraph machine-learning workflow detects plankton and particles in high-volume image streams. Automated detection turns millions of images into data that can be mapped back onto the sampled water column, allowing biological patterns to be compared directly with depth, salinity, temperature, chlorophyll, and other measurements.
  - src: /assets/media/shadowgraph-zooplankton-distribution.jpg
    alt: Shadowgraph-derived zooplankton distribution visualization.
    caption: >-
      Shadowgraph-derived zooplankton detections are mapped along the sampling transect to show where organisms occur in relation to depth and location. This connects individual image detections to spatial patterns in plankton abundance and helps identify layers, hotspots, or habitat associations that would be hard to see from station samples alone. (<a href="https://doi.org/10.1029/2025JC022543" target="_blank" rel="noopener noreferrer">Pham et al. 2026</a>)
environment_gallery:
  - src: /assets/media/northeast-us-shelf-physical-properties.jpg
    alt: Northeast U.S. Shelf physical properties and frontal gradients.
    caption: >-
      Satellite sea-surface temperature and towed-vehicle salinity observations show a 2023 salinity-maximum intrusion over the Northeast U.S. Shelf. The intrusion brought warm, salty slope water onto the shelf and created a pathway for offshore biological communities, including plankton, zooplankton, and larval fish, to move into shelf habitats. (<a href="https://doi.org/10.1002/lno.70388" target="_blank" rel="noopener noreferrer">Pham et al. 2026</a>)
  - src: /assets/media/phytoplankton-functional-type-remote-sensing.gif
    alt: Animated remote-sensing view of phytoplankton functional types.
    caption: >-
      Satellite-derived phytoplankton functional type data estimate broad groups such as diatoms, dinoflagellates, haptophytes, and cyanobacteria. These products help connect local biological observations to regional and basin-scale community patterns. (<a href="https://doi.org/10.1029/2025JC022543" target="_blank" rel="noopener noreferrer">Pham et al. 2026</a>)
---

<article class="page research-page" markdown="1">

# {{ page.title }}

Plankton communities can change over meters to ocean basins and from minutes to seasons. Capturing that variability requires observing systems that measure biology together with the physical and chemical conditions surrounding it. Modern ocean observing systems collect detailed physical, chemical, and biological measurements, but those observations become most useful when they can be viewed together. Each instrument captures part of the ecosystem: one may measure water properties, another may capture images, and another may place local observations in a wider regional setting. We develop data systems that connect mobile-platform measurements, plankton imagery, remote sensing, and modeled ocean data so research teams can interpret biological patterns in context. High-resolution platforms can generate large, asynchronous streams of sensor, navigation, and image data faster than a team can inspect manually. A shared data system makes those observations usable for near-real-time analysis, adaptive sampling decisions, post-cruise synthesis, data sharing, and communication across scientists with different expertise.

<section class="subtheme-card" markdown="1">
### Mobile Observing Data Systems

We build data-processing pipelines and interactive dashboards for observations from tow sleds, autonomous vehicles, and shipboard sensor systems. These tools bring together sensor streams, vehicle tracks, deployment metadata, and imagery so field teams can review data quality, explore water-column structure, and identify features of interest during and after cruises. They help turn a cruise's many separate measurements into a shared view of what happened in the water. By standardizing ingestion, calibration, synchronization, spatiotemporal binning, and image-to-environment linking, the workflow also makes derived products easier to reproduce, export, share, and inspect collaboratively without requiring every user to write custom code. See the <a href="https://stingraydash.whoi.edu" target="_blank" rel="noopener noreferrer">Stingray dashboard</a>.
</section>

{% include figure.html item=page.tow_sled_figure class="wide-figure" %}

<section class="subtheme-card" markdown="1">
### Machine Learning for Plankton Imaging

We develop end-to-end machine-learning and computer-vision workflows for plankton image data. These workflows help transform large image collections into ecological information about abundance, distribution, community composition, and change through time. The goal is not just to automate image sorting, but to make image streams useful for ecological interpretation. Machine learning is important for plankton imaging because modern instruments can produce millions of images, far beyond what can be reviewed manually. Detection, classification, trait extraction, uncertainty screening, and quality control make it possible to map organisms back onto environmental gradients and ask ecological questions at the scale of cruises, seasons, and observing networks.
</section>

{% include media-grid.html items=page.machine_learning_gallery class="theme-gallery paired-gallery" %}

<section class="subtheme-card" markdown="1">
### Environmental Data Integration

We use remote sensing, data mining, and modeled ocean products to place high-resolution biological observations into broader physical and biogeochemical context. This helps connect local measurements with regional and basin-scale patterns in water masses, seasonality, nutrients, and phytoplankton communities, so a biological observation can be interpreted as part of a larger ocean process. In situ observations are essential because they provide direct measurements of organisms and their environment, but they are limited in space and time. Satellites, floats, models, and historical datasets help show whether a local observation reflects a short-lived feature, a regional circulation pathway, a seasonal transition, or a broader climate-related pattern.
</section>

{% include media-grid.html items=page.environment_gallery class="theme-gallery paired-gallery" %}

</article>
