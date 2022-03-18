---
layout: post
title: Working with .NET SDKs in PowerShell
description: Tips, tricks and gotchas integrating .NET SDKs with PowerShell
tags: [powershell]
comments: true
excerpt_separator: <!--more-->
---

> "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes." - Marcel Proust

<!--more-->

```powershell
Add-Type -Path ".\lib\net45\MimeKit.dll" -ErrorAction Stop
$stream = [System.IO.MemoryStream]::new([Text.Encoding]::UTF8.GetBytes($rawMsg))
[MimeKit.MimeMessage]::Load($stream)
$stream.Dispose()
```

* [Background](#background)
* [Finding the SDK for your use-case](#finding-the-sdk-for-your-use-case)
{:toc}

## Background

At some point in your PowerShell journey, you'll likely run into situations where PowerShell doesn't quite do what you need it to do out-of-the-box and there isn't something already built by someone else that does exactly what you need either. This could be automating administrative tasks for a hosted web service where uploading necessary files is a pain through their REST API or converting raw email MIME messages into usuable objects. You do a little bit of digging and find that the vendor has a .NET SDK available built to just what you need and think, "Hey, PowerShell is built on top of .NET and I know I can already use built-in .NET methods in PowerShell like `[System.IO.File]::ReadAllBytes`; can I use this vendor's .NET SDK to do what I need from PowerShell?".

The short answer is, **yes, you can!**

This post is going to cover some of the lessons I've learned while integrating various .NET SDKs with PowerShell

## Finding the SDK for your use-case



**Ciao!**

- Nate
