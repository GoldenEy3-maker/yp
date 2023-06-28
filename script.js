const Users = [
  {
    id: 1,
    "first-name": "Данил",
    "last-name": "Королев",
    "middle-name": "Николаевич",
  },
]

const id = 0

const dataUser = document.querySelector("[data-user]")

dataUser.innerHTML = `${Users[id]["first-name"]} ${Users[id]["last-name"]} ${Users[id]["middle-name"]}`

const editForm = document.querySelector("[data-edit-form]")

editForm[0].value = Users[id]["first-name"]
editForm[1].value = Users[id]["last-name"]
editForm[2].value = Users[id]["middle-name"]

editForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const newUser = Users.map((user) => {
    if (user.id === 1) {
      return {
        ...user,
        "first-name": editForm[0].value,
        "last-name": editForm[1].value,
        "middle-name": editForm[2].value,
      }
    }

    return user
  })

  console.log(newUser[0])

  dataUser.innerHTML = `${newUser[id]["first-name"]} ${newUser[id]["last-name"]} ${newUser[id]["middle-name"]}`
})
