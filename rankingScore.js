//pubpub implementation of the wilson score
//adds fairness and quality indicators

/**
 * Wilson score interval sort
 * (popularized by reddit's best comment system)
 * http://www.evanmiller.org/how-not-to-sort-by-average-rating.html
 */

 export function getScore(authorReplied, replies, commentText, upvotes, downvotes, randomSeed, authors) {

   //upvotes and downvotes?

   const didAuthorReply = authorReplied;
   const didIncludeLink = includedLink(commentText);
   const amountReplies = replies;
   const wilsonLowerScore = wilsonScore;
   const yays = upvotes ? upvotes : 0;
   const nays = downvotes ? downvotes : 0;

   var n = yays + nays;

   if (n === 0) {
     return 0;
   }

   const z=1.96;
   let p = yays / n, zzfn = z*z / (4*n);


   let upperScore = (p + 2*zzfn + z*Math.sqrt((zzfn / n + p*(1 - p))/n)) / (1 + 4*zzfn)
   let lowerScore = wilsonLowerScore(yays, nays);

   if (didAuthorReply) {
     lowerScore = lowerScore + (wilsonLowerScore(yays + 3, nays) - lowerScore);
   }

   if (didIncludeLink) {
     lowerScore = lowerScore + (wilsonLowerScore(yays + 1, nays) - lowerScore);
   }

   if (amountReplies>0) {

     const normalReplies = 2*Math.log(replies)

     lowerScore = lowerScore + (wilsonLowerScore(yays + normalReplies, nays) - lowerScore);

   }

   if (upperScore > 1) {

     upperScore = 1;
   }

   const interval = (upperScore-lowerScore)/3;
   const random = randomSeed*interval;

   lowerScore=lowerScore+random;

   return lowerScore;
 }


 export function includedLink(commentText) {

  const hasLink = commentText.indexOf('http')

 	if (hasLink > 0) {
 		return true;
 	}
 }
