**simple_english**
reduce the complexity of written english

[demo](https://s3.amazonaws.com/spencermounta.in/nlp_comprimise/index.html)

#Justification
A working NLP library can be satisfactory with a breathtaking lightness.
By [Zipfs law](http://www.businessinsider.com/zipfs-law-and-the-most-common-words-in-english-2013-10):
>The [top 10 words](http://www.businessinsider.com/zipfs-law-and-the-most-common-words-in-english-2013-10) account for 25% of our language.

>The top 100 words account for 50% of our language.

>The top 50,000 words account for 95% of our language.

The trade-offs for processing english are way more profound than the [80/20 rule](http://en.wikipedia.org/wiki/80/20_rule).
On the [Penn treebank](http://www.cis.upenn.edu/~treebank/), for example, the following is possible:

* choosing all nouns: **33% correct**
* using a 1 thousand word lexicon: **45% correct**
* using a 1 thousand word lexicon, and falling back to nouns: **70% correct**
* using a 1 thousand word lexicon, common suffix regexes, and falling back to nouns: **74% correct**

The process is to get curated data, find the patterns, list the exceptions.
bada-bing, bada-BOOM.

#Usage
## Server-side
>npm install simple_english

```javascript
simple("well as a matter of fact, the went at full blast.")
//"well actually, they went at top speed"
```

## Client-side
```javascript
<script src"https://s3.amazonaws.com/spencermounta.in/simple_english/client_side/simple.min.js"</script>
<script>
  simple("well as a matter of fact, the went at full blast.")
  //"well actually, they went at top speed"
</script>
```


## Licence
[go-fer-it.](http://www.wtfpl.net/txt/copying/)