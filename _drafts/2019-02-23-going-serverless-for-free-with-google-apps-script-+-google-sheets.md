---
layout: post
title: 'TEMPLATE: BLOG POST'
description: 'Building APIs, Message Queues, and simple databases for free with Google
  Apps Script

'
tags:
- google-apps-script
- javascript
- googlisms
- powershell
comments: true
excerpt_separator: "<!--more-->"
code_snippet: Get-Process | Stop-Process
code_language: powershell
quote: Do or do not, there is no try.
quote_author: Yoda

---
> "{{ page.quote }}" - {{ page.quote_author }}

<!--more-->

```{{ page.code_language }}
{{ page.code_snippet }}
```

* [Background](#background)
* [Goals](#goals)
* [Prerequisites](#prerequisites)
* [Creating the initial resources](#creating-the-initial-resources)
  * [Google Sheet](#google-sheet)
  * [Google Apps Script](#google-apps-script)
    * [Updating the Apps Script manifest](#updating-the-apps-script-manifest)
    * [Adding the GET and POST method handlers](#adding-the-get-and-post-method-handlers)
    * [Adding your config](#adding-your-config)
    * [Adding the event handlers](#adding-the-event-handlers)
    * [Adding the message handlers](#adding-the-message-handlers)
    * [Adding in Queue Management helper functions](#adding-in-queue-management-helper-functions)
* [Final steps](#final-steps)
  * [1. Add the Sheets API to the Apps Script project in the Developer's Console](#1-add-the-sheets-api-to-the-apps-script-project-in-the-developers-console)
  * [2. Authorize the Apps Script for your account](#2-authorize-the-apps-script-for-your-account)
  * [3. Deploy the project as a WebApp](#3-deploy-the-project-as-a-webapp)
  * [4. Update your notification webhooks with the Apps Script execution URL](#4-update-your-notification-webhooks-with-the-apps-script-execution-url)
* [Dequeueing messages with GET requests](#dequeueing-messages-with-get-requests)
* [Wrapping up](#wrapping-up)
  {:toc}

## Background

Lately, I've been getting into creating Chat bots more, especially extending the excellent [PoshBot](https://github.com/poshbotio/PoshBot) bot framework for PowerShell created by the talented Brandon Olin ([@devblackops](https://twitter.com/devblackops)). With the initial implementation of PoshBot for Slack, it relied on Slack's Real Time Messaging API essentially broadcasting everything via WebSocket connection. This approach was ideal for PoshBot as it enabled you to open a WebSocket to Slack from your local network and leverage tools and commands to administer your local hosts and services without opening up your local resources externally. Unfortunately, not all extensible Chat clients offer real-time connections like Slack, so I embarked on a new project to see if I could make magic happen for the low-cost goodness of **$0** with Google Hangouts' replacement, [Google Chat](https://gsuite.google.com/products/chat/).

> ... but why Google Apps Script vs Google Cloud Functions/AWS Lambda/Azure Functions/etc?
> {:.lead}

The biggest reason (for me) is cost. FaaS (Functions as a Service), while typically inexpensive for my personal use cases, still has the potential to incur cost at some point. Google Apps Script is free to use and has pretty [reasonable quotas](https://developers.google.com/apps-script/guides/services/quotas)). Combine that with the ability to hook into other Google Services and you can create something really useful for no cost whatsoever. In an environment where the cost of running FaaS can be a drop in the bucket, `$free` should still not be overlooked just because the current solution is easily affordable. After all, saving cents makes sense and those bits do add up!

## Goals

The main goal that I had going into this project outside of eliminating any additional costs was to create a Message Queue for Chat messages that a bot framework like PoshBot can poll for new messages to process and react accordingly. I wanted to also enable this same process to act as a centralized webhook endpoint to receive, parse and fan out CI/CD notifications. This is useful as some services like [CircleCI](https://circleci.com/) only support a limited number of notification options.

With those targets in mind, here are the key points I laid out:

* Google Sheets will act as the following components:
  * Message Queue for Chat messages where a bot framework will poll via GET requests
  * Dead Letter Queue for any POSTs received that were not validated or sent from an unknown sender (for inspection later)
  * Logging (I opted to leverage the [BetterLog library by Peter Herrmann](https://github.com/peterherrmann/BetterLog) for this)
* Google Apps Script acting as the API layer to the Sheets backend handling GET and POST request validation
  * Communicating with Google Apps Script & Sheets via API (vs using the Apps Script Deployment ID as the Chat endpoint) has the added bonus of keeping that Sheets backend editable only by you, so there won't be random stumbling by others within your domain that could interfere with the Apps Script framework being built out.

## Prerequisites

To get started, all we're going to need is a Google account. You can use a free Gmail account to accomplish everything here, so no worries if you aren't a G Suite customer. The only real difference between a free Gmail account and a paid G Suite account in regards to Apps Script usage would be [quotas](https://developers.google.com/apps-script/guides/services/quotas), but even the free Gmail account should be able to accomplish everything here without being rate limited.

That being said, you _will_ need a G Suite account if you are looking to integrate this with Google Chat as I am here, but it's not essential to find this post useful.

## Creating the initial resources

### Google Sheet

First thing you will want to do is create a [new Google Sheet](https://sheets.google.com). Once created, give it a useful/descriptive name like _Awesome Sheets Backend_.

### Google Apps Script

Once the Sheet is created, let's hop over to the Script Editor for the Sheet by navigating to `Tools > Script Editor` in the Sheets menu bar. This will open up the Script Editor a new browser tab with the default `Code.gs` file open containing a starter function wrapper:

```js
function myFunction() {
  
}
```

Once open, let's give the Apps Script project a useful name as well like _Awesome Apps Script API_.

***

```powershell
$uri = [Uri]"https://script.google.com/macros/s/oBs4c7sCfz_2kCjrCN3OvbKh36_ZmYXhIpToeidKt_sdazF7yxbwpj4/exec?token=mySuperSecretApiKey&dequeue=no"
$messages = Invoke-RestMethod -Uri $uri -Method Get -ContentType 'application/json'
# rest of code to handle message processing
```

## Wrapping up

OK, that was wordy! If you've made it this far, thank you for taking the time to read through the post!

If you have any questions, comments, etc, feel free to leave a comment below!

Please note that this is an ongoing project, so I may be updating the post content in case anything needs adjusting!

Cheers!

* Nate