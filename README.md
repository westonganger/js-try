# JS-try [![Build Status](https://api.travis-ci.org/westonganger/js-try.svg?branch=master)](https://travis-ci.org/westonganger/js-try)

<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 

JS-try is a Javascript implementation of the try method from Rails for safe navigation.

# Install

#### Yarn, NPM, or Bower
```javascript
yarn add js-try

npm install js-try

bower install js-try
```

#### Rails
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

#### Examples
```javascript
var str = null;

Try(str); // => false

str.try('length'); // => false

Try(str).try('length'); // => false

str = 'foobar';

Try(str); // => 'foobar'

str.try('length'); // => 6

Try(str).try('length'); // => 6
```


# Credits
Created by Weston Ganger - @westonganger

<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 
