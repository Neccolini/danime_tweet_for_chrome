function elt(name, attributes) {
    var node = document.createElement(name);
    if (attributes) {
        for (var attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                node.setAttribute(attr, attributes[attr]);
            }
        }
    }
    for (var i = 2; i < arguments.length; i++) {
        var child = arguments[i];
        if (typeof child == "string") {
            child = document.createTextNode(child);
        }
        node.appendChild(child);
    }
    return node;
}
console.log("danimestore");

var video =$("#video").get(0);


video.addEventListener("play",function(){
    console.log("started");
    var twitterbutton = document.getElementsByClassName("twitter-share-button twitter-share-button-rendered twitter-tweet-button");
    console.log(twitterbutton.length);
    for(var i=0;i<twitterbutton.length;i++){
        if(twitterbutton[i]){
            twitterbutton[i].parentNode.removeChild(twitterbutton[i]);
        }
    }
})
video.addEventListener("ended",function(){
        var animeTitle = $(".pauseInfoTxt1").text();
        var animeEpisodeNumber = $(".pauseInfoTxt2").text();
        var text = animeTitle + " " + animeEpisodeNumber + "を視聴しました！ #dアニメストア";
        var url = location.href.replace(/sc_d_pc\?partId=(\d{5})(\d{3})/, 'ci_pc?workId=$1&partId=$1$2');

        var script = elt("script", {
            "src": "https://platform.twitter.com/widgets.js",
            "charset": "utf-8"
        });
        var element = elt("a", {
            "href": "https://twitter.com/share?ref_src=twsrc%5Etfw",
            "class": "twitter-share-button",
            "data-text": text,
            "data-url": url,
            "data-lang": "ja",
            "data-show-count": "false",
        }, "Tweet");
    
    var nextButtonAfter = document.getElementsByClassName("nextButtonAfter");
    nextButtonAfter[0].appendChild(script);
    nextButtonAfter[0].appendChild(element);
    if(document.getElementsByClassName("nextBody show").length==0){
    var addToMylist = document.getElementById("addToMylist");
    addToMylist.appendChild(script);
    addToMylist.appendChild(element);
    }
})