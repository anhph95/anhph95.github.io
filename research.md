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
    <figcaption>Shipboard sampling anchors autonomous and imaging observations in physical ocean context.</figcaption>
  </figure>
  <button class="carousel-button next" type="button" data-next aria-label="Next research image">›</button>
</div>

My research develops computational and observational approaches that turn large, heterogeneous ocean datasets into dynamic understanding of marine plankton ecosystems. The long-term goal is to connect biological oceanography, plankton ecology, artificial intelligence, and autonomous observing so ecosystem information can be produced at the pace and scale of modern ocean observations.

## Dynamic Planktonic Habitats and Biogeography

Traditional marine biogeography often relies on fixed spatial provinces, but plankton communities respond to moving water masses, river plumes, eddies, intrusions, and seasonal stratification. My work uses observation-based classification to define habitats from the biological and environmental structure of the water itself.

<figure class="wide-figure">
  <img src="{{ '/assets/media/global-biogeography-longhurst-province.png' | relative_url }}" alt="Global ocean biogeography map with Longhurst provinces.">
  <figcaption>Longhurst provinces provide the broad biogeographic baseline for asking how ecological boundaries shift in a dynamic ocean.</figcaption>
</figure>

I build adaptive habitat frameworks by combining shipboard observations, satellite products, and autonomous observing platforms. These approaches make it possible to test whether plankton community transitions follow nutrient gradients, water-mass history, river-ocean mixing, or physical intrusions.

<div class="theme-gallery">
  <figure>
    <img src="{{ '/assets/media/dynamic-amazon-river-plume.gif' | relative_url }}" alt="Animated shipboard observation of Amazon River plume dynamics.">
    <figcaption>Shipboard observations of Amazon River plume dynamics show how mixing creates moving ecological gradients.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/media/habitat-delineation-bgc-argo-float.png' | relative_url }}" alt="Habitat delineation from Biogeochemical-Argo float observations.">
    <figcaption>Biogeochemical-Argo float data support adaptive plankton habitat delineation across broader regions and seasons.</figcaption>
  </figure>
</div>

## Planktonic Community Variability

High-frequency imaging records make it possible to study plankton communities as assemblages that vary across taxonomic groups, water masses, seasons, and years. I use IFCB data, community composition metrics, and topic-modeling approaches to identify recurring ecological patterns and quantify how plankton metacommunities change through time.

<figure class="wide-figure">
  <img src="{{ '/assets/media/ifcb-example-image-sosik-lab-whoi.png' | relative_url }}" alt="Example Image FlowCytobot plankton images from the Sosik Lab at WHOI.">
  <figcaption>IFCB image examples from the Sosik Lab at WHOI show the organismal detail behind community-scale analyses.</figcaption>
</figure>

One project examines how phytoplankton carbon and species composition vary across Northeast U.S. Shelf stations and years. Another uses topic models to detect recurring co-occurrence structure in plankton communities, treating assemblages as ecological mixtures rather than isolated taxa.

<div class="theme-gallery">
  <figure>
    <img src="{{ '/assets/media/metacommunity-variability.png' | relative_url }}" alt="Metacommunity variability figure with annual and partitioned plankton community signals.">
    <figcaption>Metacommunity analyses quantify temporal and spatial variability in phytoplankton carbon and composition.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/media/ifcb-topic-modeling.png' | relative_url }}" alt="IFCB topic modeling figure showing plankton community structure across depth and latitude.">
    <figcaption>Topic modeling reveals recurring phytoplankton community patterns across shelf gradients.</figcaption>
  </figure>
</div>

## Advanced Ocean Technologies

This theme combines automated cyberinfrastructure and broadscale remote sensing. I develop computer-vision workflows, data-processing pipelines, dashboards, and reproducible data products that connect autonomous imaging platforms, satellites, shipboard sampling, and ecological interpretation.

<figure class="wide-figure">
  <video controls muted playsinline preload="metadata" poster="{{ '/assets/media/shadowgraph-yolo-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/media/shadowgraph-yolo-short.mp4' | relative_url }}" type="video/mp4">
  </video>
  <figcaption>Short computer-vision detection clip from shadowgraph plankton imagery.</figcaption>
</figure>

Computer vision helps convert high-volume imagery into ecological data products, while dashboards and automated pipelines make those products useful during field operations and later synthesis.

<div class="theme-gallery">
  <figure>
    <img src="{{ '/assets/media/shadowgraph-zooplankton.jpg' | relative_url }}" alt="Shadowgraph-derived zooplankton distribution visualization.">
    <figcaption>Shadowgraph-derived distributions connect image detections to spatial plankton patterns.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/media/phytoplankton-functional-type-remote-sensing.gif' | relative_url }}" alt="Animated remote-sensing view of phytoplankton functional types.">
    <figcaption>Broadscale remote sensing links local observations to basin-scale phytoplankton functional-type variability.</figcaption>
  </figure>
</div>

The Stingray dashboard is available at <a href="https://stingraydash.whoi.edu">stingraydash.whoi.edu</a>.

## Current Directions

- Computer vision workflows for automated classification and enumeration of zooplankton from high-volume shadowgraph imagery.
- Topic modeling and natural language processing approaches for phytoplankton species co-occurrence patterns from Image FlowCytobot data.
- Variational autoencoders and predictive models for learning latent structure in plankton community composition.
- Interactive visualization and automated data-processing pipelines for autonomous ocean observing.
- Observation-based analysis of salinity maximum intrusions and cross-shelf biological variability on the Northeast U.S. Shelf.

</article>
