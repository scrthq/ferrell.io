---
layout: post
title: 'PowerShell <> Python <> Ruby <> beyond: Syntax Journeys'
description: >
  A work-in-progress scratch pad to help with learning new scripting languages
tags: [powershell, devops, explorations]
comments: true
---
 
```powershell
Get-CommandEquivalent -Language Ruby -Command "$array = @()"
```

### Why?

I love PowerShell and would probably be perfectly fine with staying in my comfort zone, but I'm too curious not to explore (it probably helps a bit that my day to day job necessitates learning other scripting languages typically involved with DevOps roles too).

This is my scratch pad where I can continuously write down tips and tricks and common syntax equivalents for multiple languages. Things like `Write-Host` > `print`, creating functions in various languages, etc.

If you find this post helpful, feel free to bookmark it! I intend to update it often as I explore myself (or just have time to update my scratch pad). If you can think of a better way to write a process in another language, please don't hesitate to leave a comment!

**Enjoy!**

***

#### Variables

The following blocks show how to create variables a few different ways in PowerShell, Ruby and Python.

##### PowerShell

```powershell
PS > $basic = 'my basic var value' # This sets a string of 'my basic var value' as the variable '$basic'.

PS > Set-Variable -Name Constant -Value @('array containing a single string') -Option Constant # This sets a *CONSTANT* variable which cannot be altered or removed for the remainder of the session

PS > $Constant += 'new string'
Cannot overwrite variable Constant because it is read-only or constant.
At line:1 char:1
+ $Constant += 'new string'
+ ~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : WriteError: (const:String) [], SessionStateUnauthorizedAccessException
    + FullyQualifiedErrorId : VariableNotWritable

PS > Remove-Variable Constant
Remove-Variable : Cannot remove variable Constant because it is constant or read-only. If the variable is read-only, try the operation again specifying the Force option.
At line:1 char:1
+ Remove-Variable Constant
+ ~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : WriteError: (Constant:String) [Remove-Variable], SessionStateUnauthorizedAccessException
    + FullyQualifiedErrorId : VariableNotRemovable,Microsoft.PowerShell.Commands.RemoveVariableCommand

PS > Set-Variable -Name Constant -Value 'array is a single string' -Option Constant
Set-Variable : Cannot overwrite variable Constant because it is read-only or constant.
At line:1 char:1
+ Set-Variable -Name Constant -Value 'array is a single string' -Option ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : WriteError: (Constant:String) [Set-Variable], SessionStateUnauthorizedAccessException
    + FullyQualifiedErrorId : VariableNotWritable,Microsoft.PowerShell.Commands.SetVariableCommand
```

##### Ruby

```ruby
irb(main):001:0> basic = 'sdfsd' # This sets a string of 'sdfsd as the variable 'basic'.
=> "sdfsd"

irb(main):002:0> Constant = ['array containing a single string']
 => ["array containing a single string"]

irb(main):003:0> Constant << 'new string'
=> ["array containing a single string", "new string"]

irb(main):004:0> Constant = ['array containing a single string'].freeze
(irb):4: warning: already initialized constant Constant
(irb):2: warning: previous definition of Constant was here
=> ["array containing a single string"]

irb(main):005:0> Constant << 'new string'
RuntimeError: cant modify frozen Array
        from (irb):5
        from C:/Ruby24-x64/bin/irb.cmd:19:in `<main>`

irb(main):006:0> Constant
=> ["array containing a single string"]
```