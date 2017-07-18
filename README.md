# JS-Try [![Build Status](https://api.travis-ci.org/westonganger/js-try.svg?branch=master)](https://travis-ci.org/westonganger/js-try)

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
