const bt1 = document.querySelector('.bt1');
const input1 = document.getElementById('input1');
const bt1_del = document.getElementById('bt1_del');

const list = document.querySelector('.list')
const add = document.querySelector('.add')


// const bt2 = document.querySelector('.bt2');
// const input2 = document.getElementById('input2');
// const bt2_del = document.getElementById('bt2_del');

// const bt3 = document.querySelector('.bt3');
// const input3 = document.getElementById('input3');
// const bt3_del = document.getElementById('bt3_del');

// const bt4 = document.querySelector('.bt4');
// const input4 = document.getElementById('input4');
// const bt4_del = document.getElementById('bt4_del')


function texts(bt, input, bt_del, add, list) {
    if (!bt || !input || !bt_del || !add || !list) return;

    bt.addEventListener("click", () => {
        bt.classList.add("act");

        if (bt.classList.contains("act")) {
            bt_del.style.visibility = "visible";
            input.style.visibility = "visible";
            add.style.visibility = "visible";
            input.focus();
        } else {
            bt_del.style.visibility = "hidden";
            input.style.visibility = "hidden";
            add.style.visibility = "hidden";
        }
    });

    bt_del.addEventListener("click", () => {
        list.innerHTML = ` `;
        input.focus();
    });

    add.addEventListener("click", () => {

        let li = document.createElement("li");
        if (li.textContent.trim() !== ""){
            li.textContent = input.value;
            li.id = li.textContent
        }else{
            
        }


        li.addEventListener("click", () => {
            li.remove()
        })

        list.appendChild(li);

        input.value = "";
        bt.click();
    });
}


texts(bt1, input1, bt1_del, add, list);
// texts(bt2, input2, bt2_del);
// texts(bt3, input3, bt3_del);
// texts(bt4, input4, bt4_del);
