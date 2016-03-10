# PostCSS Hover [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.svg">

[PostCSS] plugin to remove every :hover selector.
Attempts to solve [this issue] for shared styles built separately for different platforms.

[PostCSS]:                    https://github.com/postcss/postcss
[ci-img]:                     https://travis-ci.org/RoundingWellOS/postcss-hover.svg
[ci]:                         https://travis-ci.org/RoundingWellOS/postcss-hover
[this issue]:                 https://www.nczonline.net/blog/2012/07/05/ios-has-a-hover-problem/

```css
.button {
    background: blue;
}
.button:hover {
    background: red;
}

// multiline selectors
.link:hover,
.link.selected {
	background: green;
}
```

```css
.button {
    background: blue;
}

.link.selected {
	background: green;
}
```

## Usage

```js
postcss([ require('postcss-hover') ])
```

See [PostCSS] docs for examples for your environment.
