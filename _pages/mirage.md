---
layout: page
permalink: /mirage/
title: MIRAGE
nav: false
description: "MIRAGE: The Illusion of Visual Understanding — frontier vision-language models confidently describe and 'diagnose' medical images they were never shown (mirage reasoning)."
---

<img src="/assets/img/publication_preview/mirage.png" alt="Figure from the MIRAGE paper" style="width:100%; border:1px solid var(--global-divider-color); border-radius:5px;" />

**MIRAGE: The Illusion of Visual Understanding**
<br/>Mohammad Asadi, Jack W. O'Sullivan, Fang Cao, Tahoura Nedaee, Kamyar Rajabalifardi, Fei-Fei Li, Ehsan Adeli, Euan Ashley · arXiv, 2026

[arXiv](https://arxiv.org/abs/2603.21687) · [Code](https://github.com/masadi-99/MIRAGE) · [In the press](/press/)

## TL;DR

Frontier multimodal models — GPT-5, Gemini-3-Pro, Claude Opus 4.5 — confidently describe and "diagnose" medical images **they were never shown**. We call this **mirage reasoning**. In the most extreme case, a 3-billion-parameter, *text-only* model reached the **top of a chest-X-ray benchmark with no access to any images** — beating every frontier multimodal model and surpassing human radiologists by more than 10% on average.

## Why it matters

A confident answer is not evidence that a model actually saw anything. In "agentic" medical AI, a small model's mirage can propagate through an entire pipeline and surface alarming false positives — exactly where trust matters most.

## What we introduced

- **Mirage Score** — how much benchmark accuracy survives when the image is removed.
- **Phantom-0** — a 200-question benchmark across 20 categories for measuring mirage reasoning.
- **B-Clean** — a decontamination framework that reveals how much benchmark performance was never actually visual.

## In the news

MIRAGE was covered by **Fortune**, **Live Science** (interview), and **Futurism** (interview), among other outlets, in several languages. [See coverage →](/press/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "MIRAGE: The Illusion of Visual Understanding",
  "name": "MIRAGE: The Illusion of Visual Understanding",
  "url": "https://masadi-99.github.io/mirage/",
  "sameAs": "https://arxiv.org/abs/2603.21687",
  "datePublished": "2026",
  "inLanguage": "en",
  "image": "https://masadi-99.github.io/assets/img/publication_preview/mirage.png",
  "author": [
    { "@type": "Person", "name": "Mohammad Asadi", "@id": "https://masadi-99.github.io/#mohammad-asadi" },
    { "@type": "Person", "name": "Jack W. O'Sullivan" },
    { "@type": "Person", "name": "Fang Cao" },
    { "@type": "Person", "name": "Tahoura Nedaee" },
    { "@type": "Person", "name": "Kamyar Rajabalifardi" },
    { "@type": "Person", "name": "Fei-Fei Li" },
    { "@type": "Person", "name": "Ehsan Adeli" },
    { "@type": "Person", "name": "Euan Ashley" }
  ],
  "publisher": { "@type": "Organization", "name": "arXiv" },
  "abstract": "Frontier multimodal models readily generate detailed image descriptions and reasoning traces — including pathology-biased clinical findings — for images they were never shown, a phenomenon we term mirage reasoning. A small text-only model even reached the top of a chest X-ray question-answering benchmark without access to any images. We introduce the Mirage Score, the Phantom-0 benchmark, and the B-Clean decontamination framework."
}
</script>
