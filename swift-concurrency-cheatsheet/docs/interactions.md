---
id: my-doc-id
title: Interactions
description: Interactions between contexts
slug: /my-custom-url
---

# Interactions between contexts

These are the interactions between the swift contexts. 


| Caller / Callee | Main Actor | Actor    | Non Isolated |
|----------------|------------|----------|--------------|
| **Main Actor** | :white_check_mark: | Asynchronously, except init | :white_check_mark:       |
| **Actor**      | Asynchronously  | Asynchronously, except init | :white_check_mark:         |
| **Non Isolated** | :white_check_mark:    | Asynchronously, except init      | :white_check_mark:    |
