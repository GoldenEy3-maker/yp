const Users = [
  {
    id: 1,
    "first-name": "Данил",
    "last-name": "Королев",
    "middle-name": "Николаевич",
  },
]

const Products = [
  {
    id: 1,
    title:
      "СКОРАЯ ПОМОЩЬ ПАНТЕНОЛ СПРЕЙ ДЛЯ ЛИЦА И ТЕЛА ПРИ СОЛНЕЧНЫХ ОЖОГАХ 130,0",
    description:
      "Вода, Пропан, подсолнечник, глицирин, Д-пантенол, Стеариновая кислота, цетеариловый спирт, этиловый спирт, триэтаноламин, аллантоин, ланолин, экстракт проса, экстракт хмеля, подорожника экстракт, зверобоя экстракт, ромашки экстракт, лавсонии экстракт, Метилпарабен, Пропилпарабен.",
    price: 176,
  },
  {
    id: 2,
    title: "Циновит гель для душа 150 мл",
    description:
      "Гель для душа Циновит – это прекрасный выбор для людей, которые хотят заботиться о своей коже. Благодаря уникальному составу на основе Цинк пиритиона -Климбазола -Мочевины, гель эффективно увлажняет, успокаивает и защищает кожу от воздействия окружающей среды. Он легко наносится и хорошо пенится, образуя мягкую и нежную пену, которая приятно пахнет. Гель для душа Циновит очищает кожу от загрязнений, сохраняя при этом ее естественный баланс влаги. Регулярное использование данного средства позволит сохранить кожу гладкой, упругой и здоровой.",
    price: 314,
  },
  {
    id: 3,
    title: "Липобейз эмульсия для тела 400 мл",
    description:
      "Липобэйз - это эмульсия для тела, предназначенная для усиления естественного обменного процесса кожи и улучшения её внешнего состояния. Продукт содержит в своем составе ценные масла (виноградной косточки, авокадо, жожоба), которые увлажняют и питают кожу, а также протеины пшеницы, которые способствуют упругости и эластичности кожи. Эмульсия обладает легкой текстурой, которая быстро впитывается и не оставляет липкости на коже. Рекомендуется использовать ежедневно после душа или купания. Объем - 400 мл.",
    price: 558,
  },
]

const Promos = [
  {
    id: 1,
    title: "Липобейз эмульсия для тела 400 мл",
    description:
      "Липобэйз - это эмульсия для тела, предназначенная для усиления естественного обменного процесса кожи и улучшения её внешнего состояния. Продукт содержит в своем составе ценные масла (виноградной косточки, авокадо, жожоба), которые увлажняют и питают кожу, а также протеины пшеницы, которые способствуют упругости и эластичности кожи. Эмульсия обладает легкой текстурой, которая быстро впитывается и не оставляет липкости на коже. Рекомендуется использовать ежедневно после душа или купания. Объем - 400 мл.",
    price: 558,
  },
  {
    id: 2,
    title:
      "СКОРАЯ ПОМОЩЬ ПАНТЕНОЛ СПРЕЙ ДЛЯ ЛИЦА И ТЕЛА ПРИ СОЛНЕЧНЫХ ОЖОГАХ 130,0",
    description:
      "Вода, Пропан, подсолнечник, глицирин, Д-пантенол, Стеариновая кислота, цетеариловый спирт, этиловый спирт, триэтаноламин, аллантоин, ланолин, экстракт проса, экстракт хмеля, подорожника экстракт, зверобоя экстракт, ромашки экстракт, лавсонии экстракт, Метилпарабен, Пропилпарабен.",
    price: 176,
  },
  {
    id: 3,
    title: "Циновит гель для душа 150 мл",
    description:
      "Гель для душа Циновит – это прекрасный выбор для людей, которые хотят заботиться о своей коже. Благодаря уникальному составу на основе Цинк пиритиона -Климбазола -Мочевины, гель эффективно увлажняет, успокаивает и защищает кожу от воздействия окружающей среды. Он легко наносится и хорошо пенится, образуя мягкую и нежную пену, которая приятно пахнет. Гель для душа Циновит очищает кожу от загрязнений, сохраняя при этом ее естественный баланс влаги. Регулярное использование данного средства позволит сохранить кожу гладкой, упругой и здоровой.",
    price: 314,
  },
]

const index = 0

const dataUser = document.querySelector("[data-user]")

dataUser.innerHTML = `${Users[index]["first-name"]} ${Users[index]["last-name"]} ${Users[index]["middle-name"]}`

const editForm = document.querySelector("[data-edit-form]")

editForm[0].value = Users[index]["first-name"]
editForm[1].value = Users[index]["last-name"]
editForm[2].value = Users[index]["middle-name"]

editForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const id = 1

  const newUser = Users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        "first-name": editForm[0].value,
        "last-name": editForm[1].value,
        "middle-name": editForm[2].value,
      }
    }

    return user
  })

  dataUser.innerHTML = `${newUser[0]["first-name"]} ${newUser[0]["last-name"]} ${newUser[0]["middle-name"]}`
})

const cart = document.querySelector("[data-cart-list]")

const deleteProduct = (id) => {
  const newProducts = Products.filter((product) => product.id !== id)

  cart.innerHTML = ""

  if (newProducts.length > 0) {
    for (const product of newProducts) {
      cart.innerHTML += `
        <li style='padding: 1em'>
          <h5>${product.title}</h5>
          <p>${product.description}</p>
          <span>${new Intl.NumberFormat("ru", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(product.price)}</span>
          <button onclick="deleteProduct(${product.id})">Удалить</button>
        </li>
        <hr style='height: 2px; background-color: white'/>
      `
    }
  }
}

if (Products.length > 0) {
  for (const product of Products) {
    cart.innerHTML += `
      <li style='padding: 1em'>
        <h5>${product.title}</h5>
        <p>${product.description}</p>
        <span>${new Intl.NumberFormat("ru", {
          style: "currency",
          currency: "RUB",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(product.price)}</span>
        <button onclick="deleteProduct(${product.id})">Удалить</button>
      </li>
      <hr style='height: 2px; background-color: white'/>
    `
  }
}

const promoList = document.querySelector("[data-promo-list]")

if (Promos.length > 0) {
  for (const promo of Promos) {
    promoList.innerHTML += `
    <li style='padding: 1em'>
      <h5>${promo.title}</h5>
      <p>${promo.description}</p>
      <span>${new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(promo.price)}</span>
    </li>
    <hr style='height: 2px; background-color: white'/>
  `
  }
}
