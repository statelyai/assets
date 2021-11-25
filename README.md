# Stately Assets

Brand and other non-code assets.

## Logos

PNG logos are all optimised with lossless compression before being added to this repository.

SVG logos in the `/svg-optimised-for-web` folder are all optimised for use on the web. These `.svg` files do not have `<title>` attributes, so please ensure they have accessible names added when you’re using them on the web. Read below for [alternative text suggestions](#alternative-text).

### Logomarks

Logomarks are the icon part of the logo. The logomarks in the `/logos` folder have the ideal space/padding in the image for use in avatars. Do not crop the logomark image if using in a square or round frame.

### Alternative text

| Logo             | Use                          | Alternative text |
|------------------|------------------------------|------------------|
| Stately logo     | Any                          |`alt="Stately"`   |
| Stately logomark | Alongside the word “Stately” |`alt=""`          |
| Stately logomark | Without the word “Stately”   |`alt="Stately"`   |
| XState Logo      | Any                          |`alt="XState"`    |
| XState logomark  | Alongside the word “XState”  |`alt=""`          |
| XState logomark  | Without the word “XState”    |`alt="XState"`    |

## Fonts

The `ttcommons.woff2` font is a variable web font.

## Favicons

The `/favicons` folder requires all the [favicons needed for a modern site](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs).

1. Copy the favicons and web manifest in the `/public` folder into your or site’s `/public` or root folder.
2. Add the HTML from `meta.html` into your site’s `<head>`.