# my-website

Make your website as easy as 1 - 2 - 3.

1. npm i -g parcel-bundler
2.
index.html:
```
<script src="website.js"></script>
```
website.js:
```
import MyWebsite from 'my-website';
<MyWebsite />;
```
.babelrc:
```
{
  "presets": [
    ["@babel/preset-react", {
      "pragma": "MyWebsite.createElement"
    }]
  ],
}
```
3. `parcel run index.html`

and you're done!

## Features:
* plug-and-play: no CSS or HTML needed
* no dependencies‡

## Advanced options
You can customize your website simply by passing in props:
```
import MyWebsite from 'my-website';
<MyWebsite animations={false} title="My Awesome Website" header="This website is more awesome" />;
```

## Non-JSX Version
If you want to be even more lightweight, you can use this:
1.
```
website.js
import MyWebsite from 'my-website';

MyWebsite({
    title: "My super-lightweight website",
});
```

2.
index.html
```
<script src="website.js"></script>
```

3.
`parcel index.html`


inspired by https://twitter.com/wongmjane/status/1274713940505681921

‡ (other than something that can run jsx)
‡‡ (there is a non-jsx version)