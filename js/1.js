function win() {
    
    let wiElement = document.getElementById('start');
    if (wiElement.style.display === "none" || wiElement.style.display === "") {
        wiElement.style.display = "block";
    } else {
        wiElement.style.display = "none";
        
    }
}
function admin()
{
    let upside=document.getElementById("upside");
    let adminmoreE=document.getElementById("adminmore");
    if(adminmoreE.style.display ==="none" ||adminmoreE ===""){
        adminmoreE.style.display="block";
        upside.style.marginBottom="45px";
    }
    else{
        adminmoreE.style.display="none";
        upside.style.marginBottom="195px";
    }
}
function searchmore()
{
  
    let search=document.getElementById("searchmore");
    if(search.style.display ==="none" ||search ===""){
        search.style.display="flex";
    }
    else{
        search.style.display="none";
    }
}
function  recyclebin()
        {
            document.getElementById("profile").src="recyclebinfullicon2.jpg";
        }
        function  desktop()
        {
            document.getElementById("profile").src="deskicon.png";
        }
function documents()
{
    var demo=document.getElementById("profile").src="documentsicon.png"
}
function download()
{
    document.getElementById("profile").src="downloadicon.png";
}
function localdiskc()
{
    document.getElementById("profile").src="localdiskcicon.jpg";
}
function localdiskd()
{
    document.getElementById("profile").src="localdiskdicon.jpg";
}
function pictures()
{
    document.getElementById("profile").src="picturesicon.png";
}
function thispc()
{
    document.getElementById("profile").src="thispc.jpg";
}
