let productsHTML='';
products.forEach((value)=>{
    productsHTML+=`
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src=${value.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${value.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${value.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              ${value.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(value.priceCents / 100).toFixed(2)}
          </div>
        </div>`
});

document.querySelector('.products-grid').innerHTML=productsHTML;