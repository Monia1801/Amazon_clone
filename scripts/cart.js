export const cart=[];

export function addToCart(productId){
  let itemFound;
  cart.forEach((item)=>{
    if(productId===item.productId) itemFound=item;
  });

  if(itemFound) itemFound.quantity+=1;
  else{
    cart.push({
    productId: productId,
    quantity: 1,
    });
  }
}