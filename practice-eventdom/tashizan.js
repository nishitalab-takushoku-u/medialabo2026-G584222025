function keisann(){
    let i = document.querySelector('input[name="left"]');
    let j = document.querySelector('input[name="right"]');
    let n = i.value;
    let m = j.value;
    let p = document.querySelector('span#answer');
    p.textContent = Number(n) + Number(m);
}
b = document.querySelector('button#calc');
b.addEventListener('click', keisann);