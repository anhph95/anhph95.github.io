---
layout: default
title: Research
permalink: /research/
description: "Research program of Anh H. Pham."
---

<article class="page" markdown="1">

# Research

My research develops computational and observational approaches that turn large, heterogeneous ocean datasets into dynamic understanding of marine plankton ecosystems. The long-term goal is to connect biological oceanography, plankton ecology, artificial intelligence, and autonomous observing so that ecosystem information can be produced at the pace and scale of modern ocean observations.

<figure class="wide-figure">
  <img src="{{ '/assets/media/trawl-net-1200.jpg' | relative_url }}" alt="Scientists handling a net on a research vessel at night.">
  <figcaption>Field sampling, imaging instruments, and autonomous platforms provide complementary views of plankton communities.</figcaption>
</figure>

## Automated Biological Observation

Imaging instruments such as underwater cameras and flow cytometers can observe plankton communities at exceptional resolution, but their scientific value depends on transforming millions of images into reliable ecological information. I develop computer-vision and representation-learning tools for plankton classification, enumeration, and community analysis.

<div class="media-pair">
  <figure>
    <img src="{{ '/assets/media/shadowgraph-zooplankton.jpg' | relative_url }}" alt="Shadowgraph-derived zooplankton distribution visualization.">
    <figcaption>Shadowgraph imagery enables high-resolution views of zooplankton distributions.</figcaption>
  </figure>
  <figure>
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/media/shadowgraph-yolo-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/media/shadowgraph-yolo-short.mp4' | relative_url }}" type="video/mp4">
    </video>
    <figcaption>Short detection clip from a computer-vision workflow for plankton imagery.</figcaption>
  </figure>
</div>

A central goal is uncertainty-aware classification. Automated labels should support ecological inference while identifying where expert review is needed, where taxonomic ambiguity remains, and where model performance changes across regions, seasons, or instruments.

## Dynamic Plankton Habitats

Plankton habitats are shaped by river plumes, cross-shelf exchange, eddies, salinity intrusions, upwelling, and seasonal stratification. My work asks whether habitats can be defined from the biological and environmental structure of the water itself.

<div class="media-pair">
  <figure>
    <img src="{{ '/images/Dynamic_Amazon_River_Plume.gif' | relative_url }}" alt="Animated view of Amazon River plume dynamics.">
    <figcaption>River-ocean mixing creates moving ecological gradients in the tropical North Atlantic.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/images/Habitat_Delineation_BGC_ARGO_Float.png' | relative_url }}" alt="Habitat delineation from Biogeochemical-Argo float observations.">
    <figcaption>Biogeochemical-Argo observations support adaptive plankton habitat classification.</figcaption>
  </figure>
</div>

Building on my Ph.D. research, I combine satellite remote sensing, Biogeochemical-Argo observations, shipboard measurements, autonomous vehicles, and plankton imagery to construct adaptive habitat maps. These maps can test whether community shifts follow nutrient gradients, water-mass history, mixing events, or physical intrusions.

## Predictive Cyberinfrastructure

Ocean observing programs collect increasingly valuable data, but the steps between collection, quality control, integration, analysis, visualization, and interpretation remain fragmented. I build modular pipelines and dashboards that process observations from multiple platforms, harmonize environmental and biological data, and produce analysis-ready products.

<div class="gallery-grid">
  <figure>
    <img src="{{ '/images/Phytoplankton_Functional_Type_Remote_Sensing.gif' | relative_url }}" alt="Animated remote-sensing view of phytoplankton functional types.">
    <figcaption>Satellite products reveal broad-scale phytoplankton functional-type variability.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/images/Metacommunity_Variability.png' | relative_url }}" alt="Metacommunity variability figure with annual and partitioned plankton community signals.">
    <figcaption>Long-term imaging records quantify community variability across years and shelf locations.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/images/Global_Biogeography_LonghurstProvince.png' | relative_url }}" alt="Global ocean biogeography map with Longhurst provinces.">
    <figcaption>Global biogeographic frameworks provide context for dynamic habitat approaches.</figcaption>
  </figure>
</div>

These systems emphasize reproducibility, transparent model assumptions, and flexible design so workflows can be adapted across instruments, institutions, and scientific questions.

## Current Directions

- Computer vision workflows for automated classification and enumeration of zooplankton from high-volume shadowgraph imagery.
- Topic modeling and other natural language processing approaches for phytoplankton species co-occurrence patterns from Image FlowCytobot data.
- Variational autoencoders and predictive models for learning latent structure in plankton community composition.
- Interactive visualization and automated data-processing pipelines for autonomous ocean observing.
- Observation-based analysis of salinity maximum intrusions and cross-shelf biological variability on the Northeast U.S. Shelf.

</article>
