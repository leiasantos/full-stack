const guests = document.querySelector("ul")

// convidado 1
const guest1 = document.createElement("li")
guest1.classList.add("guest")
guest1.textContent = "Juliano"

// convidado 2
const guest2 = document.createElement("li")
guest2.classList.add("guest")
guest2.textContent = "Ricardo"

// adiciona na lista
guests.append(guest1)
guests.append(guest2)

console.log(guest1, guest2)