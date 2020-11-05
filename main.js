function showNextInfoItemLeft(id) {
    document.getElementById("about-info-"+id).style.display = "none";
    let nextId;
    if (id === document.getElementsByClassName("about-info").length){
        nextId = 1;
    } else {
        nextId = id+1;
    }
    document.getElementById("about-info-"+nextId).style.display = "flex";
}

function showNextInfoItemRight(id) {
    document.getElementById("about-info-"+id).style.display = "none";
    let nextId;
    if (id === 1){
        nextId = document.getElementsByClassName("about-info").length;
    } else {
        nextId = id-1;
    }
    document.getElementById("about-info-"+nextId).style.display = "flex";
}

function closeOPCModal() {
    document.getElementById("modal-op").style.display = "none";
    for (let i=1;i<=document.getElementsByClassName("opc-info").length;i++){
        document.getElementById("opc-"+[i]).style.display = "flex";
    }
}

function openOPCModal(id) {
    document.getElementById("modal-op").style.display = "grid";
    for (let i=1;i<=document.getElementsByClassName("opc-info").length;i++){
        document.getElementById("opc-info-"+[i]).style.display = "none";
        document.getElementById("opc-"+[i]).style.display = "none";
    }
    document.getElementById("opc-info-"+[id]).style.display = "block";
    document.getElementById("operation-fields-container").scrollIntoView();

}

function openLinkInfo(id){
    if (document.getElementById("ex-"+id).style.display == "flex"){        
        for (let i=1;i<=document.getElementsByClassName("explanation").length; i++){
            document.getElementById("ex-"+i).style.display = "none";
        }
        return;
    }
    for (let i=1;i<=document.getElementsByClassName("explanation").length; i++){
        document.getElementById("ex-"+i).style.display = "none";
    }
    document.getElementById("ex-"+id).style.display = "flex";
    // document.getElementById("links-container").scrollIntoView();

}

function closeFloatingMessage(id) {
    document.getElementById("wrapper").classList.value = document.getElementById("wrapper").classList.value + " out-effect";
    setTimeout(()=>{
        document.getElementById("wrapper").classList.value = "scroll-wrapper";
        document.getElementById(id).classList.value = "noselect dont-display";
    }, 1000);
    setTimeout(()=>{
        document.getElementById('floating-message-1').style.display = "none";
    },1000);
}

function displayMessage(id) {
    document.getElementById(id).classList.value = document.getElementById(id).classList.value + " floating-message";
    document.getElementById("wrapper").classList.value = document.getElementById("wrapper").classList.value + " in-effect";

}

function displayRecommendations() {
    document.getElementById("recommendations-container").scrollIntoView();
    closeFloatingMessage('floating-message-1');
    setTimeout(()=>{
        document.getElementById('floating-message-1').style.display = "none";
    },1000);
}

function navigateSite(id){
    document.getElementById(id).scrollIntoView();
}


//----------old contact effect------------

// let isIconClicked = false;
// let toggleIcon = false;

// function openIcon(){
//     if (window.innerWidth > 600){


//         if( toggleIcon=== true ){
//             closeIcon();
//             return;
//         }
//         const img1 = document.getElementById("cont-btn-closed");
//         const img2 = document.getElementById("cont-btn-open");
//         if (isIconClicked === false){
//             isIconClicked = true;
//             setTimeout(()=>{
//                 img1.style.display = "none";
//                 img2.style.display = "flex";
//                 img1.classList = "cont-btn-closed";
//                 img2.classList = "cont-btn-closed";
//             }, 500);
//             return;
//         }
        
//         if (isIconClicked === true){
//             img2.style.display = "flex";
//             img1.style.display = "none";
//             toggleIcon = true;
//             closeIcon();
//             return;
//         }
        

//     }
    
// }

// function closeIcon(){
//     if (window.innerWidth > 600){
        
//             const img1 = document.getElementById("cont-btn-closed");
//             const img2 = document.getElementById("cont-btn-open");
//             img2.style.display = "none";
//             img1.style.display = "flex";
        
//             img1.classList = "cont-btn-closed open-icon-effect";
//             img2.classList = "cont-btn-closed open-icon-effect";
        
//             isIconClicked = false;
//             toggleIcon = false;
   
//     }

    
// }

// function scrollToContactInfo() {
//     document.getElementsByClassName("last-section")[0].scrollIntoView();
//     isIconClicked = false;
// }

//----------old contact effect------------


function scrollToContactInfoEx() {
    document.getElementsByClassName("last-section")[0].scrollIntoView();
}

function setCurTime() {
    let curTime = new Date();
    let hour = curTime.getHours();
    let minutes = curTime.getMinutes();
    if(hour < 10){
        hour="0"+hour;
    }
    if(minutes < 10){
        minutes="0"+minutes;
    }
    curTime = hour+":"+minutes;
    document.getElementById("curTime").innerText = curTime;
}


function scrollMessages() {
    let rec = document.getElementById("recommendations-container");
    let pxToScrollBy = 10;
    let msTimeInterval = 5;
    let secondsIndex = rec.scrollHeight/pxToScrollBy*msTimeInterval;
    let end = setInterval(()=>{
        rec.scrollBy(0,pxToScrollBy);
        switchScrollBtns();
    } ,msTimeInterval);
    setTimeout(()=>{
        clearInterval(end);
        if(document.getElementById("lastDate").innerText !== "היום"){
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה"
            }, 100);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה."
            }, 300);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה.."
            }, 500);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה..."
            }, 700);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה"
            }, 900);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה."
            }, 1100);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה.."
            }, 1300);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה..."
            }, 1500);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה"
            }, 1700);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה."
            }, 1900);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "יוחאי אהרונוב מקליד/ה.."
            }, 2100);
            setTimeout(()=>{
                document.getElementById("lastDate").innerText = "היום"
                document.getElementById("hostMessage").style.display = "grid";
                rec.scrollTop = rec.scrollHeight;
            },2300);
            
        }
    }, secondsIndex-(msTimeInterval*2));
    return;
}

function scrollMessagesUp() {

    let rec = document.getElementById("recommendations-container");
    rec.scrollTo(0,0);

}

function closeNavBar(){
    document.getElementById("nav-checkbox").checked = true;
}

function switchScrollBtns(){
    if(document.getElementById("recommendations-container").scrollTop<document.getElementById("recommendations-container").scrollHeight-document.getElementById("recommendations-container").style.height){
        document.getElementById("scrollDownIcon").style.display = "none";
        document.getElementById("scrollUpIcon").style.display = "block";
        return;
    }
}

function switchScrollBtnsBack() {
    if (document.getElementById("recommendations-container").scrollTop <= 11){
        document.getElementById("scrollDownIcon").style.display = "block";
        document.getElementById("scrollUpIcon").style.display = "none";
        return;
    }
}


setCurTime();