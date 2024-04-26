---
id: my-doc-id
title: Markdown page example122
description: My document description
slug: /my-custom-url
---

# Interactions between contexts

These are the interactions between the swift contexts. 



| Caller / Callee | Main Actor | Actor    | Non Isolated |
|----------------|------------|----------|--------------|
| **Main Actor** | Call freely | Call 'init' sync.<br/> Others are called async   | Call freely       |
| **Actor**      | Called only async  | Call 'init' sync.<br/> Others are called async | Call freely         |
| **Non Isolated** | Called only async    | Call 'init' sync.<br/> Others are called async      | Call freely    |


<!-- Markdown text with [links](./hello.md) -->

```swift title="actor.swift"

actor MyTest {

    init() async {
        // await something
    }
}

```
