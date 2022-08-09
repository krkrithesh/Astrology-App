var arr= [];
var ans= [];

var topEnter=document.getElementById("top-enter");
var topClear=document.getElementById("top-clear");
var topClearAll=document.getElementById("top-clear-all");

var sunButton=document.getElementById("sun");
sunButton.addEventListener("click", () => {
    collectInput("sun");
})

var moonButton=document.getElementById("moon");
moonButton.addEventListener("click", () => {
    collectInput("moon");
})

var marsButton=document.getElementById("mars");
marsButton.addEventListener("click", () => {
    collectInput("mars");
})

var mercuryButton=document.getElementById("mercury");
mercuryButton.addEventListener("click", () => {
    collectInput("mercury");
})

var jupiterButton=document.getElementById("jupiter");
jupiterButton.addEventListener("click", () => {
    collectInput("jupiter");
})

var venusButton=document.getElementById("venus");
venusButton.addEventListener("click", () => {
    collectInput("venus");
})

var saturnButton=document.getElementById("saturn");
saturnButton.addEventListener("click", () => {
    collectInput("saturn");
})

var rahuButton=document.getElementById("rahu");
rahuButton.addEventListener("click", () => {
    collectInput("rahu");
})

var ketuButton=document.getElementById("ketu");
ketuButton.addEventListener("click", () => {
    collectInput("ketu");
})

//Enter
topEnter.addEventListener("click", () => {
    processingLoad(arr);
    //arr=[];
    ans=[];
});

//Clear
topClear.addEventListener("click",() => {
    clearTopInput();
    arr=[];
});

//Clear all
topClearAll.addEventListener("click",() => {
    clearAllInput();
    arr=[];
});

//Collecting input from boxes
function collectInput(starName){
    var inputs=document.getElementsByClassName(`${starName}`);
    for(var i=0;i<inputs.length;i++)
    {
        arr.push(parseInt(inputs[i].value));
    }
    var dispName=starName.charAt(0).toUpperCase() + starName.slice(1)+" ";
    document.getElementById("input-box").value+=dispName;
}

//Main logic for clearing
function clearTopInput(){
    arr=[];
    var cl=document.getElementById("answer");
    var cl2=document.getElementById("input-box");
    cl.replaceChildren();
    cl2.value="";
}

function clearAllInput(){
    var inputs=document.getElementsByClassName("box");
    for(var i=0;i<inputs.length;i++)
        inputs[i].value="";
    var cl=document.getElementById("answer");
    var cl2=document.getElementById("input-box");
    cl.replaceChildren();
    cl2.value="";
}

//The main logic
function processingLoad(arr){
    var cnt= new Array(13).fill(0);
    for(var i of arr)
    {
        if(isNaN(i))
            continue;
        cnt[i]++;
    }
    var p1=12;
    while(p1>=0){
        if(cnt[p1-1]==0)
            multiplePush(ans,p1,cnt[p1]);
        else if(cnt[p1]>cnt[p1-1])
            multiplePush(ans,p1,cnt[p1]-cnt[p1-1]);
        p1--;
    }
    ans.sort(function(a,b){return a-b});
    console.log(ans);
    addToDOM(ans);
}

//Adding answer to webpage
function addToDOM(ans){
    var html="";
    html+=`${ans[0]}`;
    for(var i=1;i<ans.length;i++)
    {
        html+=", "+ans[i];
    }
    document.getElementById("answer").innerHTML=html;
}

//Helper for pushing
function multiplePush(ans,p1,times){
    while(times-->0)
        ans.push(p1);
}
