const insert = document.querySelector('.insert');

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <div class ='key'>
    ${e.key===' ' ? 'space' : e.key}
    <small>e.key</small>
    </div>

    <div class ='key'>
    ${e.keyCode}
    <small>e.keycode</small>
    </div>
    `
})