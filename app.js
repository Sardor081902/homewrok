// console.log("hi");

const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")
const input1  = document.querySelector("#input1")
const icon1 = document.querySelector("#icon1")
const input2  = document.querySelector("#input2")
const icon2 = document.querySelector("#icon2")

icons = [icon1,icon2]

// input1.addEventListener('input', ()=>{
//     if(icon1.classList.contains('act'))text1.innerText = input1.value;
// });



function texts(it, ic, target) {
    if (!it || !ic || !target) return;

    it.addEventListener("input", () => {
        if (ic.id.includes('act')) {
            target.innerText = it.value;
        }
    });
}




texts(input1, icon1, text1);
texts(input2, icon2, text2);


