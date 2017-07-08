var quotes = [

'Imagination is more important than knowledge. - Albert Einstein',
'When something is important enough, you do it even if the odds are not in your favor. - Elon Musk',
'Stay hungry, Stay foolish - Steve Jobs',
'Your most unhappy customers are your greatest source of learning. - Bill Gates',
'I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress. - Mark Zuckerberg'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
