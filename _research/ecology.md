---
layout: default
title: Plankton Ecology
summary: Plankton species interact, co-occur, and respond together to changing ocean conditions. We study how these community patterns reorganize across water masses, seasons, and years.
image: /assets/media/ifcb-example-image-sosik-lab-whoi.png
image_alt: Example Imaging FlowCytobot plankton images from the Sosik Lab at WHOI.
order: 3
permalink: /research/ecology/
ifcb_figure:
  src: /assets/media/ifcb-example-image-sosik-lab-whoi.png
  alt: Example Imaging FlowCytobot plankton images from the Sosik Lab at WHOI.
  caption: >-
    Imaging FlowCytobot (IFCB) images show the morphological diversity of phytoplankton and microplankton. Each image is a small biological observation, and automated classification can turn thousands of images into taxonomic, biovolume, and carbon-based community data. That makes it possible to measure community change across seasons, years, and water masses at a scale that would be difficult with microscopy alone. Credit: <a href="https://ifcb-data.whoi.edu/about" target="_blank" rel="noopener noreferrer">Sosik Lab @ WHOI</a>.
community_gallery:
  - src: /assets/media/metacommunity-variability.png
    alt: Metacommunity variability figure showing annual and partitioned plankton community signals.
    caption: >-
      Metacommunity analysis of Imaging FlowCytobot observations separates variability in total phytoplankton biomass from variability in community composition. This distinction helps show whether change is driven mainly by more or less plankton overall, by shifts in which taxa are present, or by differences in how synchronized communities are across the Northeast U.S. Shelf.
  - src: /assets/media/ifcb-topic-modeling.png
    alt: IFCB topic-modeling figure showing plankton community structure across depth and latitude.
    caption: >-
      A natural-language-processing approach, similar to Latent Dirichlet Allocation (LDA), represents each plankton sample as a mixture of recurring assemblages. This is useful for plankton ecology because samples often contain overlapping communities rather than clean, mutually exclusive groups. Topic modeling can reveal which organisms tend to appear together across depth, latitude, and environmental gradients while preserving that mixture structure.
---

<article class="page research-page" markdown="1">

# {{ page.title }}

Plankton ecology examines how plankton grow, interact, co-occur, and respond to changing ocean conditions. Plankton rarely occur as isolated species; they form communities whose members compete, coexist, respond to shared environmental conditions, and support different parts of the marine food web. The ecological role of a plankton community depends not only on how much biomass is present, but also on which organisms make up that biomass. A bloom dominated by one group can have different consequences for food webs, carbon export, nutrient cycling, or harmful bloom risk than the same amount of biomass distributed across many taxa. High-frequency plankton imaging makes it possible to study communities as dynamic assemblages that reorganize across water masses, seasons, and years, so we examine both "how much is there" and "who is there" as complementary signals of ecosystem change.

{% include figure.html item=page.ifcb_figure class="wide-figure" %}

Through the <a href="https://nes-lter.whoi.edu/" target="_blank" rel="noopener noreferrer">Northeast U.S. Shelf Long-Term Ecological Research (NES-LTER) program</a>, we study spatial, seasonal, and interannual variability in phytoplankton biomass and community composition across a cross-shelf transect from nearshore waters to the shelf break. Metacommunity analyses help separate local variability from regional variability and distinguish aggregate change in total biomass from compositional turnover in the taxa present. Communities can appear synchronized in total biomass while becoming less synchronized in composition, or vice versa, revealing whether the shelf is changing as a coherent region or as a set of locally distinct habitats. We also use topic-modeling approaches to identify recurring assemblages within complex image-based plankton datasets, treating each sample as a mixture of community patterns rather than a single fixed category.

{% include media-grid.html items=page.community_gallery class="theme-gallery paired-gallery" %}

</article>
