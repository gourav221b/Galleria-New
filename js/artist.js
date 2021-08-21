var items = [{

        "Name": "aayush",
        "Number": "7",
        "Type": "Sketches & Digital Art",
        "thumbnail": "/images/aayush/art/kumar7.jpeg"
    },
    {

        "Name": "arya",
        "Number": "1",
        "Type": "Sketch",
        "thumbnail": "/images/arya/art/arya1.jpeg"
    },
    {

        "Name": "anagha",
        "Number": "1",
        "Type": "Sketch",
        "thumbnail": "/images/anagha/art/anagha1.jpg"
    }, {

        "Name": "anupama",
        "Number": "6",
        "Type": "Sketches",
        "thumbnail": "/images/anupama/art/anu6.jpeg"
    },
    {

        "Name": "aritra",
        "Number": "2",
        "Type": "paintings",
        "thumbnail": "/images/aritra/art/aritra2.jpg"
    }, {

        "Name": "arkadeep",
        "Number": "6",
        "Type": "Paintings",
        "thumbnail": "/images/arkadeep/art/arkadeep6.jpeg"
    }, {

        "Name": "godhuli",
        "Number": "14",
        "Type": "Drawings",
        "thumbnail": "/images/godhuli/art/godhuli14.jpeg"
    },
    {

        "Name": "gourav",
        "Number": "35",
        "Type": "Sketches",
        "thumbnail": "/images/gourav/art/kakashi.jpeg"
    },
    {

        "Name": "hridya",
        "Number": "11",
        "Type": "Drawings",
        "thumbnail": "/images/hridya/art/hridya3.png"
    },
    {

        "Name": "jeet",
        "Number": "6",
        "Type": "Drawings",
        "thumbnail": "/images/jeet/art/jeet6.jpg"
    },
    {

        "Name": "parthib",
        "Number": "6",
        "Type": "Drawings",
        "thumbnail": "/images/parthib/art/parthib6.jpeg"
    },{

        "Name": "preeti",
        "Number": "9",
        "Type": "Drawings",
        "thumbnail": "/images/preeti/preeti1.jpg"
    },
    {

        "Name": "prodipto",
        "Number": "2",
        "Type": "Sketches",
        "thumbnail": "/images/prodipto/art/prodipto1.jpeg"
    }, {

        "Name": "riyanka",
        "Number": "1",
        "Type": "Sketch",
        "thumbnail": "/images/riyanka/art/riyanka1.jpeg"
    },
    {

        "Name": "rudranshu",
        "Number": "1",
        "Type": "Sketch",
        "thumbnail": "/images/rudranshu/art/rudranshu1.jpeg"
    },
    {

        "Name": "sambhabi",
        "Number": "4",
        "Type": "Drawings",
        "thumbnail": "/images/sambhabi/art/sambhabi1.jpeg"
    },
    {

        "Name": "sayandip",
        "Number": "6",
        "Type": "Drawings",
        "thumbnail": "/images/sayandip/art/sayandip1.jpeg"
    },
    {

        "Name": "soumyadeep",
        "Number": "3",
        "Type": "Sketches",
        "thumbnail": "/images/soumyadeep/art/soumyadeep1.jpg"
    },
    {
        "Name": "swastik",
        "Number": "4",
        "Type": "Digital Art",
        "thumbnail": "/images/swastik/art/BlackAdam1.jpg"
    }, {
        "Name": "trisha",
        "Number": "24",
        "Type": "Paintings",
        "thumbnail": "/images/trisha/art/12.jpeg"
    }


]

myFunction(items);

function myFunction(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<div class="card"><img class="lazy" data-src="' + arr[i].thumbnail + ' "alt="' + arr[i].Name + '"><div class="cardContent"><p id="first">' + arr[i].Name + '</p><p>' + arr[i].Number + " " + arr[i].Type + '</p><a role="link" class="btn btn_card " href="/path/catalog/art/' + arr[i].Name + '.html">SEE MORE</a></div></div>'
    }
    document.getElementById("divCard").innerHTML = out;
}