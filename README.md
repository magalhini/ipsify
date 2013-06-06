ipsify
======

Generate Lorem Ipsum paragraphs based on placeholders.


## What is is

Instead of copy pasting dummy text, you can just write a placeholder with the number of desired 'Lorem Ipsum' paragraphs,
and they will be inserted in your elements. Just that.

## Why?

I'm lazy, and I was bored.

## How to use

By default, the placeholder is:

```
{li#}
```

Where # is the number of paragraphs to insert.
So if you want 3 paragraphs, just write:

```
{li3}
```

* 1) Include the script and initialize it.
* 2) Put your placeholders in your document.
* 3) Rejoice!

```js
  <script src="ipsify.js"></script>
  <script>var foo = new Ipsify();</script>
```
