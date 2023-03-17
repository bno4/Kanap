// Déclaration de la variable de stock des clés/valeurs du local storage + conversion JSON > JS
let objectInLocalStorage = JSON.parse(window.localStorage.getItem("cartProduct"));
// écoute du localstorage
console.log(objectInLocalStorage);


const cartState = document.querySelector('#cart__items');

if (objectInLocalStorage === null) {
    console.log("panier vide");
    const emptyCart = document.createElement('div');
    emptyCart.innerText = `Le panier est vide`;
    cartState.appendChild(emptyCart);

} else {
    //Si un produit est dans le panier boucle for pour pacourir le localstorage
    let productsInCart = [];
    for (let i = 0; i < objectInLocalStorage.length; i++) {
        console.log(objectInLocalStorage.length + ` éléments dans le panier`);

        productsInCart = productsInCart.innerHTML += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
        <div class="cart__item__img">
          <img src="${objectInLocalStorage[i].imageUrl}" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>Nom du produit</h2>
            <p>Vert</p>
            <p>42,00 €</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>`;

    }


};