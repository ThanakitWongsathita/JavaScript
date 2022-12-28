function createQuote(quote, callback)
{
    let myQuote = "like i always say, "+quote;
    callback(myQuote);
}

function logQuote(quote)
{
    console.log(quote+' yes..');
}

createQuote("you will getting better!",logQuote);