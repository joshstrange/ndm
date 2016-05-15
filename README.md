![github-banner.png](https://bitbucket.org/repo/84zgAd/images/786620377-github-banner.png)

[![Download ndm](http://i.imgur.com/z68cq3y.png)](https://720kb.github.io/ndm)


###What is this ?

**ndm** formally _"npm desktop manager"_ is the client GUI for npm (MacOSX only for the moment).

With **ndm** you can easily manage npm and npm packages directly from the couch, without any worries, it is based on the [npmi-cli](https://github.com/npm/npmi-cli) lib and developed over [electron](https://github.com/electron/electron) with some touch of AngularJS and Sass.

**ndm** is developed and mantained by [720kb](http://720kb.net)

Feel free to reach us for any info/question, or to support us for the project, will be with you.

###I love the Shell, why use an app?

Of course, we all love it too.

The Shell command line, is obviously very powerful.

However, not all the people know how to use it from the scratch.
Sometimes and often, they can not use the Command line for intern/office/job reasons, or are not willing to use it at all.

Forget not that, using an app, does not mean you can no longer use the Command line.

###Installation

Download the executable for your OS at this link: [https://720kb.github.io/ndm](https://720kb.github.io/ndm) 

If you want to install a newer version or the same repo version (which may not be released yet), you can run these commands:

```bash
git clone git@github.com:720kb/ndm.git ndm

cd ndm

git checkout master

npm install

npm start
```

Then if you want to make your own executable, all you have to do is to use [electron-packager](https://github.com/electron-userland/electron-packager)

###Develop

_Setup_

`git checkout master && npm install`

_Run app_

`npm start`

###Contribute

We'll be much grateful if you help us making this project to grow up. 
Feel free to contribute by forking, opening issues, pull requests etc.

Doors are open wide.

###License
The MIT License (MIT)

Copyright (c) 2015 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

###FAQ
**_Is ndm stable?_**

The first releases are not guaranteed to be very stable, some problem/bug may happen.

Just give it time, have some patience and, if you would, please contribute by forking, PR and/or creating issues, your help is always appreciated.

**_Do i have to worry about anything when using ndm?_**

Actually not, not really.
ndm does not run any malicious or env/system breaking commands in background.

**_Why is so slow on my pc?_**

ndm speed depends exclusively on your pc/device specs and npm commands speed.
We can't do much to speed up npm commands and charge at the moment.
Wishing npm will be faster in the next releases.