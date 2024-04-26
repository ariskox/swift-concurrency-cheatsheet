---
id: my-doc-id
title: Interactions
description: Interactions between contexts
slug: /my-custom-url
sidebar_position: 2
---

# Interactions between contexts

These are the interactions between the swift contexts. 


| Caller / Callee | Main Actor | Actor    | Non Isolated |
|----------------|------------|----------|--------------|
| **Main Actor** | :white_check_mark: Call freely | :white_check_mark: Initializer <br/> ⏰️ Asynchronously for the rest of methods | :white_check_mark: Call freely      |
| **Actor**      | ⏰️ Asynchronously  | :white_check_mark: Initializer <br/> ⏰️ Asynchronously for the rest of methods | :white_check_mark:  Call freely       |
| **Non Isolated** | ⏰️ Asynchronously | :white_check_mark: Initializer <br/> ⏰️ Asynchronously for the rest of methods     | :white_check_mark: Call freely   |


:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::