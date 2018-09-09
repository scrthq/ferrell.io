---
layout: post
title: 'Going Serverless for free with Google Apps Script + Google Sheets'
description: >
  Building APIs, Message Queues, and simple databases for free with Google Apps Script
tags: ['Google Apps Script', JavaScript, Googlisms, PowerShell]
comments: true
excerpt_separator: <!--more-->
---

> "We don't take advantage of our position. We keep saying no to free stuff, as we can afford it now." Lukas Forchhammer

<!--more-->

```powershell
Invoke-RestMethod -Uri $googleAppsScriptUri -Method Post -Body (@{sender="Slack";text="Hello!";token=$token}|ConvertTo-Json)
```

***

* [Why Google Apps Script vs Lambda/Cloud Functions/Azure Functions/etc?](#why-google-apps-script-vs-lambdacloud-functionsazure-functionsetc)

### Why Google Apps Script vs Lambda/Cloud Functions/Azure Functions/etc?

The biggest reason (for me) is cost. FaaS (Functions as a Service), while typically inexpensive for my personal use cases, still has the potential to incur cost at some point. Google Apps Script is free to use and has pretty [reasonable quotas](https://developers.google.com/apps-script/guides/services/quotas)). Combine that with the ability to hook into other Google Services and you can create something really useful for no cost whatsoever.

