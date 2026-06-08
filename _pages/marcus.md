---
layout: page
permalink: /marcus/
title: MARCUS
nav: false
description: "MARCUS: an agentic, multimodal vision-language model that reads and reasons over ECG, echocardiography, and cardiac MRI for cardiac diagnosis and management."
---

<img src="/assets/img/publication_preview/marcus.jpg" alt="System overview from the MARCUS paper" style="width:100%; border:1px solid var(--global-divider-color); border-radius:5px;" />

**MARCUS: An Agentic, Multimodal Vision-Language Model for Cardiac Diagnosis and Management**
<br/>Mohammad Asadi<sup>*</sup>, Jack W. O'Sullivan<sup>*</sup>, Lennart Elbe, Akshay Chaudhari, Tahoura Nedaee, Francois Haddad, Michael Salerno, Fei-Fei Li, Ehsan Adeli, Rima Arnaout, Euan A. Ashley · arXiv, 2026
<br/><small>* Equal contribution</small>

[arXiv](https://arxiv.org/abs/2603.22179) · [Code](https://github.com/AshleyLab/MARCUS)

## TL;DR

**MARCUS** (Multimodal Autonomous Reasoning and Chat for Ultrasound and Signals) is an agentic vision-language assistant that reads and reasons over **ECG, echocardiography, and cardiac MRI** (individually or jointly) and can converse about them. Modality-specific expert models are coordinated by a multimodal orchestrator.

## What it does

- Reads the three core cardiac tests (ECG · echo · cardiac MRI) and answers questions or writes free-text findings.
- Outperforms frontier models on cardiac tasks by a wide margin.
- By design, **resists the "mirage reasoning" failure mode** from [MIRAGE](/mirage/): it won't confidently describe what it didn't actually see.

## Why it matters

A trustworthy cardiology assistant has to combine signals and images the way a clinician does, and has to *know what it doesn't know*. MARCUS pairs strong multimodal performance with built-in resistance to confident hallucination.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "MARCUS: An Agentic, Multimodal Vision-Language Model for Cardiac Diagnosis and Management",
  "name": "MARCUS: An Agentic, Multimodal Vision-Language Model for Cardiac Diagnosis and Management",
  "url": "https://masadi-99.github.io/marcus/",
  "sameAs": "https://arxiv.org/abs/2603.22179",
  "datePublished": "2026",
  "inLanguage": "en",
  "image": "https://masadi-99.github.io/assets/img/publication_preview/marcus.jpg",
  "author": [
    { "@type": "Person", "name": "Mohammad Asadi", "@id": "https://masadi-99.github.io/#mohammad-asadi" },
    { "@type": "Person", "name": "Jack W. O'Sullivan" },
    { "@type": "Person", "name": "Lennart Elbe" },
    { "@type": "Person", "name": "Akshay Chaudhari" },
    { "@type": "Person", "name": "Tahoura Nedaee" },
    { "@type": "Person", "name": "Francois Haddad" },
    { "@type": "Person", "name": "Michael Salerno" },
    { "@type": "Person", "name": "Fei-Fei Li" },
    { "@type": "Person", "name": "Ehsan Adeli" },
    { "@type": "Person", "name": "Rima Arnaout" },
    { "@type": "Person", "name": "Euan A. Ashley" }
  ],
  "publisher": { "@type": "Organization", "name": "arXiv" },
  "abstract": "MARCUS (Multimodal Autonomous Reasoning and Chat for Ultrasound and Signals) is an agentic vision-language assistant that reads and reasons over ECG, echocardiography, and cardiac MRI, individually or jointly. Modality-specific expert models are coordinated by a multimodal orchestrator that resists the mirage reasoning failure mode."
}
</script>
