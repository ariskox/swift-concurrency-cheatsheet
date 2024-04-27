---
id: interactions
title: Interactions
description: Interactions between contexts
sidebar_position: 2
---

# Interactions between contexts

<!--And some <Highlight>custom markup</Highlight>...-->

These are the interactions between the swift contexts.

| Caller / Callee  | Main Actor                     | Actor                                                                                        | Non Isolated                   |
| ---------------- | ------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------ |
| **Main Actor**   | :white_check_mark: Call freely | :white_check_mark: Initializer: Call freely <br/> ⏰️ Asynchronously for the rest of methods | :white_check_mark: Call freely |
| **Actor**        | ⏰️ Asynchronously             | :white_check_mark: Initializer: Call freely <br/> ⏰️ Asynchronously for the rest of methods | :white_check_mark: Call freely |
| **Non Isolated** | ⏰️ Asynchronously             | :white_check_mark: Initializer: Call freely <br/> ⏰️ Asynchronously for the rest of methods | :white_check_mark: Call freely |

<br/>
<br/>

```mermaid
graph LR;
    Actor.init((Actor initializer))-- Async -->Actor.method;
    Actor.init-- Async -->MainActor;
    Actor.init-->Actor.init;
    Actor.init-->nonisolated((Non Isolated));

    Actor.method(((Actor method)))-- Async -->MainActor;
    Actor.method-->Actor.init;
    Actor.method-- Async -->Actor.method;
    Actor.method-->nonisolated;

    MainActor(((Main actor)))-->MainActor;
    MainActor-->Actor.init;
    MainActor-- Async -->Actor.method;
    MainActor-->nonisolated;

    nonisolated-- Async -->MainActor;
    nonisolated-->Actor.init;
    nonisolated-- Async -->Actor.method;
    nonisolated-->nonisolated;

```

<br/>

:::tip[Async calling]
To use 'async', the caller should be on an asynchronous context (e.g. async method, initializer, variable)
:::
