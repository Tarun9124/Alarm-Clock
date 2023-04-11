let h = document.getElementById("hour")
const selectitem = document.querySelectorAll("select")
let alrtime;
let ring = new Audio("./ringtone.mp3")

setInterval(function () {
    let d = new Date()
    h.innerHTML = d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds()
})

for (let i = 24; i > 0; i--) {
    selectitem[0].firstElementChild.insertAdjacentHTML("afterend", `<option>${i}</option>`)
}

for (let i = 59; i >= 0; i--) {
    selectitem[1].firstElementChild.insertAdjacentHTML("afterend", `<option>${i}</option>`)
}

for (let i = 59; i >= 0; i--) {
    selectitem[2].firstElementChild.insertAdjacentHTML("afterend", `<option>${i}</option>`)
}
let flag
let start = document.getElementById("set")
start.addEventListener("click", (e) => {
    e.preventDefault()
    let givenTime = `${selectitem[0].value}:${selectitem[1].value}:${selectitem[2].value}`;
    if (givenTime.includes("Hour") || givenTime.includes("Minute") || givenTime.includes("Second")) {
        start.disabled = false
        stop.disabled = false
        test("Please, select a valid time to set Alarm !")
        flag = 0
    }
    // alert(givenTime) 
    else {
        flag = 1
        start.disabled = true
        st.disabled = false
        test("Alarm SET!!")
        setInterval(function () {
            let d = new Date()
            let ad = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            // alert(ad)
            if (givenTime === ad) {
                ring.play()
                ring.loop = true
            }
        })
    }
})

let st = document.getElementById("stop")
st.addEventListener("click", (e) => {
    e.preventDefault()
    if (flag == 1) {
        start.disabled = false
        st.disabled = false
        ring.pause()
    }
    else {
        start.disabled = false
        st.disabled = false
    }
})

function test(msg) {
    let err = document.getElementById("error")
    err.innerHTML = msg
    err.style.display = "block";
    setTimeout(() => {
        err.style.display = "none";
    }, 4000);
}

