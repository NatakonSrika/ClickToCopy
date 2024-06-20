const btn =document.querySelector(".btn")
const cupon = document.querySelector(".cupon");

 btn.addEventListener("click",(e)=>{
    cupon.select()
    cupon.setSelectionRange(0,999999999)
    navigator.clipboard.writeText(cupon.value);
    btn.textContent="คัดลอกคูปองแล้ว"
    setTimeout(()=>{
        btn.textContent="คัดลอก"
    },3000)
 })
