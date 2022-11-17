// basic js setup
let unread = document.querySelectorAll("#unread")
let markAll = document.getElementById("mark-all")
let notifBtn = document.querySelector(".btn")

//mark all as read
markAll.addEventListener("click", () => {
    unread.forEach((unread) => {
        unread.classList.remove("unread")
    })
    notifBtn.textContent = 0 
})


// click on any of the unread

