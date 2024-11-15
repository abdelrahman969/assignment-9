

// array off quote 

 quotes = [

    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "--Franklin D. Roosevelt"
    },

    {
        quote: "In the end, it's not the years in your life that count, it's the life in your years.",
        author: "--Abraham Lincoln"
    },

    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "--Winston Churchill"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "--George Eliot"
    },


];

function generateQuote() {
    // math.random ---> use to generate randomm number bettwen 0-1    
    //  math.floor ---> use to make random number to عدد صحيح مش كسر يعني 
     randomIndex = Math.floor(Math.random() * quotes.length);
     randomQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = `${randomQuote.quote}`;
    document.getElementById("author").textContent = ` ${randomQuote.author}`;
}