var items = [{

        "Name": "aayush",
        "Number": "19",
        "Type": "Picures",
        "thumbnail": "/images/aayush/photograph/kumarphoto1.jpeg"
    }, {

        "Name": "aditya",
        "Number": "22",
        "Type": "Picures",
        "thumbnail": "/images/aditya/photograph/aditya4.jpeg"
    },
    {

        "Name": "aheli",
        "Number": "4",
        "Type": "Picures",
        "thumbnail": "/images/aheli/photograph/Aheli1.jpeg"
    },
    {

        "Name": "ajita aparajita",
        "Number": "13",
        "Type": "Picures",
        "thumbnail": "/images/AjitaAparajita/photograph/aa8.jpg"
    }, {

        "Name": "arkadeep",
        "Number": "6",
        "Type": "Picures",
        "thumbnail": "/images/arkadeep/photograph/arkadeepphoto5.jpg"
    }, {

        "Name": "arkojit",
        "Number": "6",
        "Type": "Picures",
        "thumbnail": "/images/arkojit/photograph/arko_ganga.jpeg"
    }, {

        "Name": "arpan",
        "Number": "11",
        "Type": "Picures",
        "thumbnail": "/images/arpan/photograph/arpan11.jpeg"
    },
    {

        "Name": "deadshot",
        "Number": "17",
        "Type": "Picures",
        "thumbnail": "/images/deadshot/photograph/deadshot9.jpg"
    },
    {

        "Name": "debadyuti",
        "Number": "1",
        "Type": "Picure",
        "thumbnail": "/images/debadyuti/photograph/debadyuti1.png"
    },
    {

        "Name": "debosmita",
        "Number": "11",
        "Type": "Picures",
        "thumbnail": "/images/debosmita/photograph/deb11.jpg"
    },
    {

        "Name": "kousheya",
        "Number": "6",
        "Type": "Picures",
        "thumbnail": "/images/kousheya/photograph/dodo2.jpeg"
    },
    {

        "Name": "kritika",
        "Number": "1",
        "Type": "Picures",
        "thumbnail": "/images/kritika/photograph/kritika1.jpg"
    }, {

        "Name": "parthib",
        "Number": "13",
        "Type": "Picures",
        "thumbnail": "/images/parthib/photograph/parthibphoto10.jpeg"
    },
    {

        "Name": "sambhabi",
        "Number": "1",
        "Type": "Picures",
        "thumbnail": "/images/sambhabi/photograph/Shambhabiphoto2.jpeg"
    },
    {

        "Name": "swapnil",
        "Number": "3",
        "Type": "Picures",
        "thumbnail": "/images/swapnil/photograph/swapnil1.jpeg"
    }

]

myFunction(items);

function myFunction(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<div class="card"><img class="lazy" data-src="' + arr[i].thumbnail + ' "alt="' + arr[i].Name + '"><div class="cardContent"><p id="first">' + arr[i].Name + '</p><p>' + arr[i].Number + " " + arr[i].Type + '</p><a role="link" class="btn btn_card " href="/path/catalog/photography/' + arr[i].Name + '.html">SEE MORE</a></div></div>'
    }
    document.getElementById("divCard").innerHTML = out;
}