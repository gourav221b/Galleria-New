var quotes = [{
        "name": "Success is going from failure to failure without losing your enthusiasm.",
        "cite": "Winston Churchill",
    }, {
        "name": "If you can dream it, you can achieve it",
        "cite": "Zig Ziglar",
    },
    {
        "name": "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
        "cite": "St. Jerome",
    }, {
        "name": "It does not matter how slowly you go as long as you do not stop.",
        "cite": "Confucius",
    }, {
        "name": "There are three methods to gaining wisdom. The first is reflection, which is the highest. The second is limitation, which is the easiest. The third is experience, which is the bitterest.",
        "cite": "Confucius",
    }, {
        "name": "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
        "cite": "Stephen Hawking"
    }, {
        "name": "The first question which the priest and the Levite asked was: 'If I stop to help this man, what will happen to me?' But... the good Samaritan reversed the question: 'If I do not stop to help this man, what will happen to him?'",
        "cite": "Martin Luther King, Jr.",
    }, {
        "name": "March on. Do not tarry. To go forward is to move toward perfection. March on, and fear not the thorns, or the sharp stones on life's path.",
        "cite": "Khalil Gibran",
    }, {
        "name": "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.",
        "cite": "Maimonides",
    }, {
        "name": "The Way Get Started Is To Quit Talking And Begin Doing.",
        "cite": "Walt Disney",
    }, {
        "name": "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
        "cite": "Winston Churchill"
    }, {
        "name": "Don’t Let Yesterday Take Up Too Much Of Today",
        "cite": "Will Rogers",
    }, {
        "name": "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
        "cite": "Anonymous",
    }, {
        "name": "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        "cite": "Steve Jobs",
    }, {
        "name": "Rejection is a part of any man’s life. If you can’t accept and move past rejection, or at least use it as writing material – you’re not a real man.",
        "cite": "Jiraiya",
    }, {
        "name": "A place where someone still thinks about you is a place you can call home.",
        "cite": "Jiraiya"
    }, {
        "name": "In society, those who don’t have many abilities, tend to complain more.",
        "cite": "Kakashi Hatake",
    }

]

myFunction(quotes);

function myFunction(arr) {
    var out = "";

    var max = quotes.length;
    var i = Math.floor(Math.random() * (max + 1)) + 1;

    out += '<p id="first">Food for thought <br><br><blockquote>"' + arr[i].name + '"<br> <cite> -' + arr[i].cite + '</cite></blockquote>';

    document.getElementById("quoteDiv").innerHTML = out;
}