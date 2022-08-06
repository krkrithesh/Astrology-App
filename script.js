var arr= [];
var ans= [];

var topEnter=document.getElementById("top-enter");
var topClear=document.getElementById("top-clear");
var bottomEnter=document.getElementById("bottom-enter");
var bottomClear=document.getElementById("bottom-clear");

//Enter
topEnter.addEventListener("click", () => {
    collectTopInput();
    arr=[];
});

//Clear
topClear.addEventListener("click",() => {
    clearTopInput();
    arr=[];
});

bottomEnter.addEventListener("click", () => {
    collectBottomInput();
    arr=[];
});

bottomClear.addEventListener("click", () => {
    clearBottomInput();
    arr=[];
});

//Collecting input from boxes
function collectTopInput(){
    var inputs=document.getElementsByClassName("box");
    for(var i=0;i<inputs.length;i++)
    {
        arr.push(parseInt(inputs[i].value));
    }
    processingLoad(arr);
    ans=[];
}

//Collecting input from plain text
function collectBottomInput(){
    var boxText=document.getElementById("large-box").value;
    var line=boxText.trim().split(/\s+/);
    for(var i=0;i<line.length;i++)
    {
        arr.push(parseInt(line[i]));
    }
    processingLoad(arr);
    ans=[];
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

//Main logic for clearing
function clearTopInput(){
    var inputs=document.getElementsByClassName("box");
    for(var i=0;i<inputs.length;i++)
        inputs[i].value="";
    var cl=document.getElementById("answer");
    cl.replaceChildren();
}

//Main logic for clearing plain text
function clearBottomInput(){
    var clBot=document.getElementById("large-box");
    clBot.value="";
    var cl=document.getElementById("answer");
    cl.replaceChildren();
}
