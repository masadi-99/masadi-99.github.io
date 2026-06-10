---
layout: page
permalink: /mirage/
title: MIRAGE
nav: false
description: "MIRAGE: The Illusion of Visual Understanding, by Mohammad Asadi and colleagues at Stanford. Frontier vision-language models confidently describe and 'diagnose' medical images they were never shown (mirage reasoning)."
last_modified_at: 2026-06-09
---

<img src="/assets/img/publication_preview/mirage.png" alt="Results figure from MIRAGE: The Illusion of Visual Understanding" style="width:100%; border:1px solid var(--global-divider-color); border-radius:5px;" />

**MIRAGE: The Illusion of Visual Understanding**
<br/>Mohammad Asadi<sup>*</sup>, Jack W. O'Sullivan<sup>*</sup>, Fang Cao, Tahoura Nedaee, Kamyar Rajabalifardi, Fei-Fei Li<sup>†</sup>, Ehsan Adeli<sup>†</sup>, Euan Ashley<sup>†</sup> · arXiv, 2026
<br/><small>* Equal contribution · † Co-supervisors</small>

[arXiv](https://arxiv.org/abs/2603.21687) · [Code](https://github.com/masadi-99/MIRAGE) · [In the press](/press/)

## TL;DR

MIRAGE is a 2026 study from Stanford, first-authored by Mohammad Asadi, showing that frontier vision-language models (GPT-5, Gemini-3-Pro, Claude Opus 4.5) confidently describe and "diagnose" medical images **they were never shown**. We call this **mirage reasoning**. The key numbers:

- Models produced confident descriptions of visual details **more than 60% of the time** on average when no image was provided, and 90 to 100% of the time under certain prompting.
- Models retained roughly **70 to 80% of their original benchmark accuracy with no images at all**.
- In the most extreme case, a 3-billion-parameter, *text-only* model reached the **top of a chest X-ray benchmark with no access to any images**, beating every frontier multimodal model and surpassing human radiologists by more than 10% on average.

## Why it matters

A confident answer is not evidence that a model actually saw anything. In "agentic" medical AI, a small model's mirage can propagate through an entire pipeline and surface alarming false positives, exactly where trust matters most. As Asadi told [Live Science](https://www.livescience.com/health/ai-mirages-mean-tools-used-to-analyze-medical-scans-could-fabricate-their-findings):

> "Even if your AI is describing a very, very specific thing that you would say, 'Oh, there's no way you could make that up,' yeah, they could make that up. They could make very rare, very specific things up."

## What we introduced

- **Mirage Score**: how much benchmark accuracy survives when the image is removed.
- **Phantom-0**: a 200-question benchmark across 20 categories for measuring mirage reasoning.
- **B-Clean**: a decontamination framework that reveals how much benchmark performance was never actually visual.

## In the news

MIRAGE was covered by [Fortune](https://fortune.com/2026/03/31/ai-mirages-alien-machine-brains-anthropic-leaks/), [Live Science](https://www.livescience.com/health/ai-mirages-mean-tools-used-to-analyze-medical-scans-could-fabricate-their-findings) (interview), and [Futurism](https://futurism.com/artificial-intelligence/frontier-models-medical-advice-x-rays-cant-see) (interview), among other outlets, in several languages. [See coverage →](/press/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "MIRAGE: The Illusion of Visual Understanding",
  "name": "MIRAGE: The Illusion of Visual Understanding",
  "url": "https://masadi.ai/mirage/",
  "mainEntityOfPage": "https://masadi.ai/mirage/",
  "sameAs": "https://arxiv.org/abs/2603.21687",
  "identifier": { "@type": "PropertyValue", "propertyID": "DOI", "value": "10.48550/arXiv.2603.21687" },
  "datePublished": "2026-03-23",
  "inLanguage": "en",
  "image": "https://masadi.ai/assets/img/publication_preview/mirage.png",
  "author": [
    { "@type": "Person", "name": "Mohammad Asadi", "@id": "https://masadi.ai/#mohammad-asadi" },
    { "@type": "Person", "name": "Jack W. O'Sullivan" },
    { "@type": "Person", "name": "Fang Cao" },
    { "@type": "Person", "name": "Tahoura Nedaee" },
    { "@type": "Person", "name": "Kamyar Rajabalifardi" },
    { "@type": "Person", "name": "Fei-Fei Li" },
    { "@type": "Person", "name": "Ehsan Adeli" },
    { "@type": "Person", "name": "Euan Ashley" }
  ],
  "publisher": { "@type": "Organization", "name": "arXiv" },
  "abstract": "Frontier multimodal models readily generate detailed image descriptions and reasoning traces (including pathology-biased clinical findings) for images they were never shown, a phenomenon we term mirage reasoning. A small text-only model even reached the top of a chest X-ray question-answering benchmark without access to any images. We introduce the Mirage Score, the Phantom-0 benchmark, and the B-Clean decontamination framework."
}
</script>
