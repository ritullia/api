console.log('veikia')

function createCard(imgUrl, brand, name, price, description, productType){

    let mainDiv = document.getElementById('container');
    let card = document.createElement('div');
    card.className = 'card'
    card.classList.add('card')

    mainDiv.appendChild(card)

    console.log(mainDiv)

    let img = document.createElement('img');
    img.className = 'card-img-top'
    img.src = imgUrl
    console.log("kazkas")

    card.appendChild(img)

   
}

createCard()



async function getData() {
    const requestURL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    // Pasitikrinimui    
    console.log(data);

    for(let i =0; i < data.length; i++){
        const elm = data[i]
        console.log(elm)
    }

     console.log(data[0].api_featured_image)
    //  console.log(data[0].id)
     console.log(data[0].brand)
     console.log(data[0].name)
     console.log(data[0].price)
     console.log(data[0].description)
     console.log(data[0].product_type)

    return data;

}

getData()





