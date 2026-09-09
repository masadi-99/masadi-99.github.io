---
layout: page
permalink: /mirage/
title: MIRAGE
nav: false
description: "MIRAGE, a Stanford study first-authored by Mohammad Asadi: frontier vision-language models confidently 'diagnose' medical images they were never shown."
last_modified_at: 2026-07-26
---

<img src="/assets/img/mirage-hero.png" alt="Results figure from MIRAGE: The Illusion of Visual Understanding" style="width:100%; border:1px solid var(--global-divider-color); border-radius:5px;" />

**MIRAGE: The Illusion of Visual Understanding**
<br/>Mohammad Asadi<sup>*</sup>, Jack W. O'Sullivan<sup>*</sup>, Fang Cao, Tahoura Nedaee, Kamyar Rajabalifardi, Fei-Fei Li<sup>†</sup>, Ehsan Adeli<sup>†</sup>, Euan Ashley<sup>†</sup> · arXiv, 2026
<br/><small>* Co-first authors (equal contribution) · † Co-supervisors</small>

[arXiv](https://arxiv.org/abs/2603.21687) · [Code](https://github.com/masadi-99/MIRAGE) · [Stanford GSB working paper](https://www.gsb.stanford.edu/faculty-research/working-papers/mirage-illusion-visual-understanding) · [In the press](/press/)

## TL;DR

MIRAGE is a 2026 study from Stanford, first-authored by Mohammad Asadi, showing that frontier vision-language models (GPT-5, Gemini 3 Pro, Claude Opus 4.5) confidently describe and "diagnose" medical images **they were never shown**. We call this **mirage reasoning**. The key numbers:

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

## Uptake by other research groups

Independent groups (no overlap with our author list) have built on MIRAGE:

- **[Mirage Probes: How Vision Models Fake Visual Understanding](https://arxiv.org/abs/2606.13870)** (2026) extends the mirage finding with probing methods.
- **[Understanding the Role of Hallucination in Reinforcement Post-Training](https://arxiv.org/abs/2604.03179)** (2026).
- **[Attend to Evidence: Evidence-Anchored Spatial Attention Supervision](https://arxiv.org/abs/2605.30912)** (2026).
- **[The Cost of Language: Centroid Erasure Exposes and Exploits Modal Competition](https://arxiv.org/abs/2604.14363)** (2026).

The paper has 40 citations (Google Scholar, as of 26 July 2026); see the [live count](https://scholar.google.com/citations?user=cRuOHB0AAAAJ). The **Mirage Score**, **Phantom-0**, and **B-Clean** are openly released in the [code repository](https://github.com/masadi-99/MIRAGE).

## In the news

MIRAGE was covered by [Fortune](https://fortune.com/2026/03/31/ai-mirages-alien-machine-brains-anthropic-leaks/), [Live Science](https://www.livescience.com/health/ai-mirages-mean-tools-used-to-analyze-medical-scans-could-fabricate-their-findings) (interview), and [Futurism](https://futurism.com/artificial-intelligence/frontier-models-medical-advice-x-rays-cant-see) (interview), among other outlets, in several languages. [See coverage →](/press/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": "https://masadi.ai/mirage/#article",
  "headline": "MIRAGE: The Illusion of Visual Understanding",
  "name": "MIRAGE: The Illusion of Visual Understanding",
  "url": "https://masadi.ai/mirage/",
  "mainEntityOfPage": "https://masadi.ai/mirage/",
  "sameAs": "https://arxiv.org/abs/2603.21687",
  "identifier": { "@type": "PropertyValue", "propertyID": "DOI", "value": "10.48550/arXiv.2603.21687" },
  "datePublished": "2026-03-23",
  "inLanguage": "en",
  "image": "https://masadi.ai/assets/img/mirage-hero.png",
  "author": [
    { "@type": "Person", "name": "Mohammad Asadi", "@id": "https://masadi.ai/#mohammad-asadi" },
    { "@type": "Person", "name": "Jack W. O'Sullivan" },
    { "@type": "Person", "name": "Fang Cao" },
    { "@type": "Person", "name": "Tahoura Nedaee" },
    { "@type": "Person", "name": "Kamyar Rajabalifardi" },
    { "@type": "Person", "name": "Fei-Fei Li", "@id": "https://profiles.stanford.edu/fei-fei-li" },
    { "@type": "Person", "name": "Ehsan Adeli", "@id": "https://profiles.stanford.edu/ehsan-adeli" },
    { "@type": "Person", "name": "Euan A. Ashley", "@id": "https://profiles.stanford.edu/euan-ashley" }
  ],
  "subjectOf": [
    {
      "@type": "NewsArticle",
      "@id": "https://fortune.com/2026/03/31/ai-mirages-alien-machine-brains-anthropic-leaks/",
      "url": "https://fortune.com/2026/03/31/ai-mirages-alien-machine-brains-anthropic-leaks/",
      "headline": "AI's ability to see 'mirages' shows how alien machine brains really are",
      "datePublished": "2026-03-31",
      "inLanguage": "en",
      "author": {
        "@type": "Person",
        "name": "Jeremy Kahn"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Fortune",
        "url": "https://fortune.com/"
      }
    },
    {
      "@type": "NewsArticle",
      "@id": "https://www.livescience.com/health/ai-mirages-mean-tools-used-to-analyze-medical-scans-could-fabricate-their-findings",
      "url": "https://www.livescience.com/health/ai-mirages-mean-tools-used-to-analyze-medical-scans-could-fabricate-their-findings",
      "headline": "AI 'mirages' mean tools used to analyze medical scans could fabricate their findings",
      "datePublished": "2026-04-07T15:15:00Z",
      "inLanguage": "en",
      "author": {
        "@type": "Person",
        "name": "Jennifer Zieba"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Live Science",
        "url": "https://www.livescience.com/"
      }
    },
    {
      "@type": "NewsArticle",
      "@id": "https://futurism.com/artificial-intelligence/frontier-models-medical-advice-x-rays-cant-see",
      "url": "https://futurism.com/artificial-intelligence/frontier-models-medical-advice-x-rays-cant-see",
      "headline": "Frontier AI Models Are Doing Something Absolutely Bizarre When Asked to Diagnose Medical X-Rays",
      "datePublished": "2026-04-07T09:06:00-04:00",
      "inLanguage": "en",
      "author": {
        "@type": "Person",
        "name": "Victor Tangermann"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Futurism",
        "url": "https://futurism.com/"
      }
    },
    {
      "@type": "NewsArticle",
      "@id": "https://the-decoder.com/ai-models-confidently-describe-images-they-never-saw-and-benchmarks-fail-to-catch-it/",
      "url": "https://the-decoder.com/ai-models-confidently-describe-images-they-never-saw-and-benchmarks-fail-to-catch-it/",
      "headline": "AI models confidently describe images they never saw, and benchmarks fail to catch it",
      "datePublished": "2026-03-30T15:53:15+00:00",
      "inLanguage": "en",
      "author": {
        "@type": "Person",
        "name": "Maximilian Schreiner"
      },
      "publisher": {
        "@type": "Organization",
        "name": "The Decoder",
        "url": "https://the-decoder.com/"
      }
    },
    {
      "@type": "NewsArticle",
      "@id": "https://techxplore.com/news/2026-04-ai-fake-visual-images-dont.html",
      "url": "https://techxplore.com/news/2026-04-ai-fake-visual-images-dont.html",
      "headline": "AI models can fake visual understanding of images that don't exist",
      "datePublished": "2026-04-12",
      "inLanguage": "en",
      "author": {
        "@type": "Person",
        "name": "Sanjukta Mondal"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Tech Xplore",
        "url": "https://techxplore.com/"
      }
    },
    {
      "@type": "BlogPosting",
      "@id": "https://garymarcus.substack.com/p/the-mirage-of-visual-understanding",
      "url": "https://garymarcus.substack.com/p/the-mirage-of-visual-understanding",
      "headline": "The mirage of visual understanding in current frontier models",
      "datePublished": "2026-03-29",
      "inLanguage": "en",
      "author": {
        "@type": "Person",
        "name": "Gary Marcus"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Marcus on AI",
        "url": "https://garymarcus.substack.com/"
      }
    }
  ],
  "publisher": { "@type": "Organization", "name": "arXiv" },
  "abstract": "Frontier multimodal models readily generate detailed image descriptions and reasoning traces (including pathology-biased clinical findings) for images they were never shown, a phenomenon we term mirage reasoning. A small text-only model even reached the top of a chest X-ray question-answering benchmark without access to any images. We introduce the Mirage Score, the Phantom-0 benchmark, and the B-Clean decontamination framework."
}
</script>
