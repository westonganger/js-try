# JS-Try
<a href="https://badge.fury.io/js/js-try" target="_blank"><img height="21" style='border:0px;height:21px;' border='0' src="https://badge.fury.io/js/js-try.svg" alt="NPM Version"></a>
<a href='https://github.com/westonganger/js-try/actions' target='_blank'><img src="https://github.com/westonganger/js-try/actions/workflows/test.yml/badge.svg?branch=master" style="max-width:100%;" height='21' style='border:0px;height:21px;' border='0' alt="CI Status"></a>
<a href='https://www.npmjs.org/package/js-try' target='_blank'><img height='21' style='border:0px;height:21px;' src='https://img.shields.io/npm/dt/js-try.svg?label=NPM+Downloads' border='0' alt='NPM Downloads' /></a>
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='22' style='border:0px;height:22px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a>

JS-Try is a Javascript implementation of the try method from Rails for safe navigation.

# Install

#### Yarn, NPM, or Bower
```javascript
yarn add js-try

npm install js-try

bower install js-try
```

#### Rails / Bundler

```ruby
# Gemfile
source 'https://rails-assets.org' do
  gem 'rails-assets-js-try'
end


# app/assets/javascripts/application.js
/*
 *= require js-try
*/
```

# Usage
#### Require/Import
```javascript
var Try = require('js-try');
// or
import { Try } from 'js-try';
```

#### Basic Examples
```javascript
Try(undefined) == false;
Try(null) == false;
Try(false) == false;
Try(true) == true;
Try(0) == 0;
Try('') == '';
Try('foobar') == 'foobar';
Try([]) == [];
Try({}) == {};

false.try('length') == false;
true.try('length') == false;

''.try('length') == 0;
''.try('foobar') == false;
'foobar'.try('charAt', 3) == 'b';
''.try('badMethod').try('anotherBadMethod'); == false

var x = 0;
x.try('toString') == '0';
x.try('foobar') == false;

[].try('sort') == [];
[].try('foobar') == false;
[1,2,3].try(2) == 3;
[1,2,3].try(3) == false;

{}.try('toString') == "[object Object]";
{}.try('foobar') == false;
{foo: 'bar'}.try('foo') == 'bar';
{foo: 'bar'}.try('bar') == false;
```

# Credits
Created by Weston Ganger - [@westonganger](https://github.com/westonganger)

For any consulting or contract work please contact me via my company website: [Solid Foundation Web Development](https://solidfoundationwebdev.com)

## Similar Libraries Created By Me
- [Rearmed-JS](https://github.com/westonganger/rearmed-js)
- [Rearmed-CSS](https://github.com/westonganger/rearmed-css)
- [Rearmed Ruby](https://github.com/westonganger/rearmed-rb)
- [Rearmed Rails](https://github.com/westonganger/rearmed_rails)
