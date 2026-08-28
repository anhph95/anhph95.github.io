# Anh H. Pham

Personal researcher website for GitHub Pages.

## Updating site content

Most site content is stored in data files so that text, links, publications,
presentations, plots, photos, videos, and slideshow items can be updated without
editing the main page templates.

### Main files

- Edit homepage content in `_data/home.yml`.
- Edit research-page content in `_data/research.yml`.
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
      url: /research/#new-research-program
      summary: Short homepage description of the new research direction.
```

Use the same `url` anchor as the matching research section `id` in
`_data/research.yml`.

### Add a new research section

In `_data/research.yml`, add a new item under `sections`:

```yaml
  - id: new-research-program
    title: New Research Program
    blocks:
      - kind: paragraph
        text: >-
          First paragraph explaining the scientific question, study system,
          methods, or key finding.
      - src: /assets/media/new-plot.png
        alt: Description of the plot for screen readers.
        caption: Caption explaining what the plot shows.
        class: wide-figure
```

The `id` becomes the page anchor, so `/research/#new-research-program` links to
this section.

### Add a plot or photo

Put the file in `assets/media/`, then add a figure block wherever it should
appear in a research section:

```yaml
      - src: /assets/media/new-photo.jpg
        alt: Description of the photo for screen readers.
        caption: Caption explaining the context.
        class: wide-figure
```

Use `class: wide-figure` for a full-width figure. Leave `class` out when the
figure is inside a gallery or slideshow.

### Add two side-by-side figures

Add a gallery block to a section's `blocks` list:

```yaml
      - kind: gallery
        class: theme-gallery paired-gallery
        items:
          - src: /assets/media/first-plot.png
            alt: Description of the first plot.
            caption: Caption for the first plot.
          - src: /assets/media/second-plot.png
            alt: Description of the second plot.
            caption: Caption for the second plot.
```

### Add a photo to an existing slideshow

Find the slideshow block in `_data/research.yml`, then add another item under
its `items` list:

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
