---
layout: post
title: Migrating from PowerShell ISE to Visual Studio Code, pt 1
description: >
  The start of an everlasting journey
tags: [powershell, vscode, devops, explorations]
comments: true
---


```powershell
[System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String('SQBuACAAcwBlAGEAcgBjAGgAIABvAGYAIABzAG8AbQBlAHQAaABpAG4AZwAgAGcAcgBlAGEAdABlAHIALgAuAC4A'))
```

#### A Need for Extensibility

PowerShell ISE was _my_ perfect comfort zone. I knew the keyboard shortcuts and could spot errors by glancing at the syntax highlighting. I felt a _sense of ease_ when writing PowerShell in the ISE; **rock solid** in reliability. What it lacked for me was the _limited_ scope in which you could customize it.

I tried using Sublime Text for editing with a PowerShell build system like [this one](https://gist.github.com/joshearl/4518262). Editing wasn't too bad, but launching scripts directly from the editor was painful, so Sublime was not the editor for me. I kept it around for note taking, as I still preferred it to Notepad++, but I was back on the hunt for something better.

#### First Impressions

About 2 years ago (right after reading [this blog post](https://blogs.msdn.microsoft.com/powershell/2015/11/16/announcing-powershell-language-support-for-visual-studio-code-and-more/), actually), I heard about Visual Studio Code. I thought this was mainly going to be a light version of Visual Studio, at first; something geared towards GUI application development. When I found out about the PowerShell support for it, I decided to give it a try.
* Intellisense seemed peppy, which was a big deal to me. 
  * I was clearing my PowerShell cache every 2-3 days to keep PowerShell ISE's Intellisense usable, this was a _very_ welcome change.
* Syntax highlighting in Code was lacking dramatically
  * Code (at the time of this writing) uses TextMate for syntax highlighting, which is RegEx based
  * ISE references the PowerShell AST (Abstract Syntax Tree) for syntax highlighting, so it's 100% accurate
* The integrated terminal had it's own share of odd quirks as well that decreased the level of reliability even further

I live in PowerShell for a large percentage of my day. I am constantly working on production scripts and I need something that I can have long scripting and debugging sessions in without worrying about crashes. Code wasn't going to cut it for me, I didn't feel like I could set it and forget it if needed.

> I was stuck back in PowerShell ISE. The workhorse, the iron playground, home...
>
> ...for now.