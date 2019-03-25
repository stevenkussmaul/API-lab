"use strict";

$(document).ready(() => {

    $(".select").change( () => {
        let userChoice = $( ".select" ).val();
        console.log(userChoice);
        // return x;
    });    

    switch (userChoice) {
        case datahoarders:
            subreddit = "S";
            break;
        case aww:
            subreddit = "Sunday";
            break;
        case wholesomeMemes:
            subreddit = "Sunday";
            break;
        case dataIsBeautiful:
            subreddit = "Sunday";
            break;
    }

    const data = $.get("https://www.reddit.com/r/aww.json").then( (result) => {
        let newThing = result.data.children;
        console.log(data);
        console.log(result);
        console.log(newThing);
    });

 
    // data.done(function(data) { console.log("success got data", data); });

    //from giffy
    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });

    //from stackexchange
    // var promise1 = $.get("https://www.reddit.com/r/aww.json").then(function (result2) {
    //     console.log(result2); // suppose result === "xyz"
    //     console.log(promise1);
    //     //return result;
    // });


    // var xhr = $.get("https://www.reddit.com/r/aww.json");
    // xhr.done(function(data) { console.log("success got data", data); });
    // console.log(data);
    // console.log(data.children.data.preview);
































    // $.get("https://www.reddit.com/r/aww.json").then((response) => {

    //     let arg = response.data.children;
    //     console.log(response);
    //     console.log(arg);


    //     for (let i=0; i < arg.length;i++) {
    //         console.log(arg[i]);
    //         console.log(arg[i].data.author);
    //         $("body").append(`
    //         <section>
    //             <h3>${arg[i].data.title}</h3>
    //             <p>${arg[i].data.author}</p>
    //             <p><img src="${arg[i].data.preview.images["0"].source.url}" class="img"></p>
    //             <p>${arg[i].data.ups}</p>
    //             <p>${arg[i].data.ups}</p>
    //             <p>${arg[i].data.ups}</p>
    //         </section>
    //         `)

    //     }

    //     // for (let index of arg) {
    //     //     console.log(arg[index]);
    //     //     // expected output: 1
          
    //     // }
          


    // });

    //data.children[2].data.author
    //data.children[8].data.ups
    //data.children[5].data.url
    //data.children[5].data.title
    //


});