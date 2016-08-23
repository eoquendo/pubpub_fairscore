# decay
[![npm status](http://img.shields.io/npm/v/decay.svg)](https://www.npmjs.org/package/decay)
[![build status](https://secure.travis-ci.org/clux/decay.svg)](http://travis-ci.org/clux/decay)
[![dependency status](https://david-dm.org/clux/decay.svg)](https://david-dm.org/clux/decay)
[![coverage status](http://img.shields.io/coveralls/clux/decay.svg)](https://coveralls.io/r/clux/decay)

This library houses a modified version of the Reddit "Best" algorithm which is based on the Wilson Score. In addition to, we are incorporating a "fairness value" and other quality indicators to the algorithm

  1. Wilson Score -
  2. Fairness Value - a value that will randomize the comments order based on the amount of overlapping there between the wilson score intervals of different comments
  3. Quality Indicators - other factors that either indicate or increase the quality of comments

![Wilson score equation](https://github.com/clux/decay/raw/master/rating-equation.png)

```

## Usage
bestScore_pubpub exports 1 scoring function.

Two of these algorithms decay with time, and the other is based purely on statistical popularity.

```js
// 1. zero decay
var wilsonScore = decay.wilsonScore(zScore);
var score = wilsonScore(upVotes, downVotes);

```

## Parameter Explanation
### 1. Wilson Score
AKA Reddit's *[Best](http://blog.reddit.com/2009/10/reddits-new-comment-sorting-system.html)* comment sorting system.

Statistically, the wilson score interval returns  of the [Wilson Score interval](http://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval) at the alpha level based on supplied Z score.

The optional `zScore` parameter can be passed as to the exported `wilsonScore` factory.
The Z score is a statistical value which roughly means how many standard deviations of safety you want, so it maps directly onto the confidence level of the Wilson Score interval.

It will default to `z=1.96` if left out, representing a `95%` confidence level in the lower bound. Otherwise, values through `1.0` (69%), to `3.3` (99.9%) good alternatives.

### 2. Fairness value


### 3.Quality Indicators



## Installation

```bash
$ npm install decay
```

## License
MIT License
