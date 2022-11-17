// basic js setup
let unread = document.querySelectorAll(".unread")
let markAll = document.getElementById("mark-all")
let notification = document.querySelector(".btn")

notification.textContent = unread.length



// mark all as read
markAll.addEventListener("click", () => {
    unread.forEach((unread) => {
        unread.classList.remove("unread")
    })
   const newUnread = document.querySelectorAll(".unread")
            notification.textContent = newUnread.length
})

 // click on any of the unread 
unread.forEach((unread) => {
        unread.addEventListener("click", () => {
            unread.classList.remove("unread")
            const newUnread = document.querySelectorAll(".unread")
            notification.textContent = newUnread.length
            
        })
    })

 



