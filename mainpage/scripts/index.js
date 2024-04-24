document.addEventListener("DOMContentLoaded", function(event) {

    let intro = document.getElementById('intro');
    let introBut = document.getElementById('introbut');
    let introduce = document.getElementById("introduce");
    //let introBut2 = document.getElementById('introbut2');
    
    introBut.addEventListener('click', (event) => {
        //introduce.style.display = "block";
        //intro.style.display = "none";
        location.href = '1_chose.html';
    });

    //introBut2.addEventListener("click", (event)=>{
        //location.href = '1_chose.html';
    //})

});
