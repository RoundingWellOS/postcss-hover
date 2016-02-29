# PostCSS Hover [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.svg">

[PostCSS] plugin to add `:focus` selector to every `:hover`.

[PostCSS]:                    https://github.com/postcss/postcss
[ci-img]:                     https://travis-ci.org/RoundingWellOS/postcss-hover.svg
[ci]:                         https://travis-ci.org/RoundingWellOS/postcss-hover

```css
.button {
    background: blue;
}
.button:hover {
    background: red;
}
```

```css
.button {
    background: blue;
}
```

## Usage

```js
postcss([ require('postcss-hover') ])
```

See [PostCSS] docs for examples for your environment.
