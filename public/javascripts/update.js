
//redirect to Technical/ID with query of password
document.querySelector("#updateButton").addEventListener('click', function(){
        window.open("/Technical/"+document.querySelector("#updateText").value+"&update=yes");
});
