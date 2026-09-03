# Anh H. Pham

Personal researcher website for GitHub Pages.

## Updating site content

Most overview-page content is stored in data files, while detail pages live in
Jekyll collections. This keeps repeated page templates separate from editable
research and people content.

### Main files

- Edit homepage content in `_data/home.yml`.
- Edit research-page content in `_research/`.
- Edit people profile content in `_people/`.
- Edit publications and presentations in `_data/publications.yml`.
- Edit teaching, mentoring, courses, outreach, and teaching slideshow content in
  `_data/teaching.yml`.
- Add image, GIF, video, and plot files to `assets/media/`.
- The page files, such as `index.md`, `research.md`, `publications.md`, and
  `teaching.md`, should usually stay short and only call reusable templates from
  `_includes/`.

### Add a homepage research card

In `_data/home.yml`, add a new item under `research_program.items`:

```yaml
    - title: New Research Program
      url: /research/new-theme/
      summary: Short homepage description of the new research direction.
```

Use the same `url` as the matching research page permalink in `_research/`.

### Add or edit a research page

Research pages are Jekyll collection files in `_research/`. To edit an existing
research page, edit one of these files:

```text
_research/hab.md
_research/biogeography.md
_research/community.md
_research/technologies.md
_research/directions.md
```

To add a new research page, create one new Markdown file in `_research/`:

```markdown
---
layout: default
title: New Research Theme
summary: Short description for the main research listing page.
image: /assets/media/new-research-image.jpg
image_alt: Description of the listing image for screen readers.
order: 6
permalink: /research/new-theme/
---

<article class="page research-page" markdown="1">

# {{ page.title }}

Write the full research page here.

</article>
```

The main `/research/` page scans `_research/` automatically, sorts by `order`,
and uses `title`, `summary`, `image`, and `image_alt` to build the browsing
cards.

### Add or edit a lab member

People pages are Jekyll collection files in `_people/`. Each file contains the
profile metadata in front matter and the profile biography in Markdown body
text, matching the way research detail pages are organized.

To edit an existing member, edit the matching collection file:

```text
_people/anhph.md
```

To add a new member, create one new Markdown file in `_people/`:

```markdown
---
layout: person
name: Future Member Name
title: Future Member Name
description: "Profile of Future Member Name."
portrait: /assets/media/portrait-member-id.jpg
order: 2
interests:
  - Interest One
  - Interest Two
  - Interest Three
position: Current position, department or program, institution
education:
  - Degree, Program, Institution, Year
  - Degree, Program, Institution, Year
links:
  - label: Google Scholar
    url: https://example.com/
---

Write the profile biography here.

Add a second paragraph when needed.
```

The member URL is generated from the filename, so `_people/member-id.md` becomes
`/people/member-id/`. The homepage People section scans `_people/`
automatically, sorts by `order`, and uses `name`, `portrait`, and `interests`
to build the profile cards.

### Add a plot or photo

Put the file in `assets/media/`, then add a figure block wherever it should
appear in a research page's front matter:

```yaml
figure:
  src: /assets/media/new-photo.jpg
  alt: Description of the photo for screen readers.
  caption: Caption explaining the context.
```

Then render it in the page body:

```liquid
{% include figure.html item=page.figure class="wide-figure" %}
```

### Add two side-by-side figures

For research pages, add page-specific media data to the file's front matter:

```yaml
gallery:
  - src: /assets/media/first-plot.png
    alt: Description of the first plot.
    caption: Caption for the first plot.
  - src: /assets/media/second-plot.png
    alt: Description of the second plot.
    caption: Caption for the second plot.
```

Then render it in the page body:

```liquid
{% include media-grid.html items=page.gallery class="theme-gallery paired-gallery" %}
```

### Add a photo to an existing slideshow

For the shared research intro slideshow, edit `_data/research.yml`. For a
slideshow on a specific research page, edit that page in `_research/`. Add a
new item under the slideshow's `items` list:

```yaml
    - src: /assets/media/new-slide.jpg
      alt: Description of the new slideshow image.
      caption: Caption for the new slide.
```

The slideshow controls and dots are generated automatically.

### Add a video

Put the video and poster image in `assets/media/`, then add a video item:

```yaml
  - type: video
    src: /assets/media/new-video.mp4
    poster: /assets/media/new-video-poster.jpg
    alt: Description of the video.
    caption: Caption explaining the video.
```

### Add a peer-reviewed publication

In `_data/publications.yml`, add a new item under `peer_reviewed`:

```yaml
  - authors: Author, A., Author, B., and Pham, A.H.
    title: Title of the publication.
    journal: Journal Name
    details: 12(3), 100-110
    year: 2027
    doi: https://doi.org/example-doi
```

Leave `details` or `doi` out if they are not available.

### Add a selected presentation

In `_data/publications.yml`, add a new item under `presentations`:

```yaml
  - title: Title of the presentation.
    venue: Conference or event name, location
    year: 2027
```

### Add a teaching slideshow photo

In `_data/teaching.yml`, add a new item under `intro.carousel.items`:

```yaml
      - src: /assets/media/new-teaching-photo.jpg
        alt: Description of the teaching or outreach photo.
        caption: Caption for the teaching slideshow.
```

### Add or edit courses

In `_data/teaching.yml`, edit the `courses` lists:

```yaml
  - title: Courses Taught
    items:
      - Introductory Biology
      - New Course Name
```

### Add teaching, mentoring, or outreach text

Teaching and mentoring paragraphs live under `sections` in `_data/teaching.yml`.
Outreach paragraphs live under `outreach.paragraphs`:

```yaml
      - kind: paragraph
        text: >-
          New teaching, mentoring, or outreach paragraph.
```

### Editing tips

- Keep indentation consistent; YAML uses spaces to understand nesting.
- Put long text after `>-` when it spans multiple lines.
- Always include `alt` text for images and videos.
- Use paths that begin with `/assets/media/`.
- If a caption includes HTML, keep it on one line or use `>-` for a folded
  multi-line caption.
