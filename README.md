# Retina support for Meteor

![Meteor logo](https://d14jjfgstdxsoz.cloudfront.net/meteor-logo.png)



This is just a simple package for retina support when Templates get (reactive) rendered.

## How to

**Add the Meteor Package**

`meteor add visudare:retina`

**Configure retina and init**

Set your Retina Settings shortname in **/client**

`Retina({retinajs: true, attribute : 'data-retina'});`

**How to use in template**

When `retinajs` is set to true every image will be replaced with an @2x image (image.jpg will be replaced by image@2x.jpg if it exists).

When you setup the `attribute` property you can set this attribute to your image tag and when the devie supports retina the script will use the URL in this attribute for the new image src.

E.g.

`<img src="/my_image.jpg" data-retina="/my_retina_image.jpg" />`


**Retina default Settings**

The default settings for the Retina is:

`retinajs`:`true`
`attribute`:`false`


**Retinajs Reference here:** 

<http://imulus.github.io/retinajs/>