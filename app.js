const bt1 = document.querySelector('.bt1');
const input1 = document.getElementById('input1');
const bt1_del = document.getElementById('bt1_del');

const bt2 = document.querySelector('.bt2');
const input2 = document.getElementById('input2');
const bt2_del = document.getElementById('bt2_del');

const bt3 = document.querySelector('.bt3');
const input3 = document.getElementById('input3');
const bt3_del = document.getElementById('bt3_del');

const bt4 = document.querySelector('.bt4');
const input4 = document.getElementById('input4');
const bt4_del = document.getElementById('bt4_del')


function texts(it, i, c) {
    if (!it || !i || !c) return;

    it.addEventListener("click", () => {
        it.classList.toggle("act");

        if (it.classList.contains("act")) {
            c.style.visibility = "visible";
            i.style.visibility = "visible";
            i.focus();
        } else {
            c.style.visibility = "hidden";
            i.style.visibility = "hidden";
        }
    });

    c.addEventListener("click", () => {
        i.value = ""; 
        i.focus();    
    });
}


texts(bt1, input1, bt1_del);
texts(bt2, input2, bt2_del);
texts(bt3, input3, bt3_del);
texts(bt4, input4, bt4_del);
~