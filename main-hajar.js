btnscroll = document.getElementById('btnscroll');
window.onscroll = function(){
    if(scrollY >=200){
        btnscroll.style.display='block';
    }else{
        btnscroll.style.display='none'
    }
}
btnscroll.onclick =  function(){
    scroll({
            left:0,
            top:0,
            behavior:"smooth"
        })
}
people = document.getElementsByClassName('people')
if(people.style.top == '530px'){
    people.style.position == 'fixed';
}

function demanderImportPhoto(className) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(readerEvent) {
                const image = new Image();
                image.src = readerEvent.target.result;
                image.onload = function() {
                    const div = document.querySelector(`.${className}`);
                    div.innerHTML = '';
                    div.appendChild(image);
                };
            };
            reader.readAsDataURL(file);
        }
    });
    fileInput.click();
}





