# TeemrSocialShare

Social sharing dialogs and popover provider for [Angular.js](http://angularjs.org/) applications.


## Install

You can download all necessary TeemrSocialShare files manually or install using bower:

bower install angular-textshare

## Usage

You need only to include ``angular-textshare.js`` and  ``angular-textshare.css`` (as minimal setup) to your project and then you can start using ``TeemrSocialShare`` provider in your directives, controllers and services. For example in controllers:

```javascript
var app = angular.module('exampleApp', ['TeemrSocialShare']);

Add the teemr-social-share directive to an element like 
<div data-teemr-social-share>

All selected text within this div will now be tweetable..
```

## License

MIT Licensed

Copyright (c) 2013-2015, teemr.works <info@teemr.works>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

