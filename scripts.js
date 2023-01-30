function createCard(imgUrl, brand, name, price, description, productType){

    // let mainDiv = document.getElementById('container');
    let card = document.createElement('div');
    card.className = 'card'
    card.classList.add('card')
    // console.log(mainDiv)

    let img = document.createElement('img');
    img.className = 'card-img-top'
    img.src = imgUrl
    img.classList.add('card-img-top')

    console.log(card, img)

    let cardText = document.createElement('div')
    cardText.className = 'card-body'
    cardText.classList.add('card-body')
    card.appendChild(cardText);

   
    let newBrand  = document.createElement('h5');
    newBrand.textContent = brand;
    newBrand.classList.add('card-title')

    let newName = document.createElement('h5');
    newName.textContent = name;
    newName.classList.add('card-title')

    let newPrice = document.createElement('p');
    newPrice.textContent = price;
    newPrice.classList.add('card-text')

    let newDescr = document.createElement('p');
    newDescr.textContent = description;
    newDescr.classList.add('card-text')

    let newProdTyp = document.createElement('p');
    newProdTyp.textContent = productType;
    newProdTyp.classList.add('card-text');

    let buttDel = document.createElement('button')
    buttDel.textContent = 'Delete'
    buttDel.classList.add('btn-danger')

    // let newCard = document.createElement('div');
    // newCard.className = "container";

    // let styleCard = document.createElement("div");
    // styleCard.className = "flex-card";

    cardText.append(newBrand, newName, newPrice, newDescr, newProdTyp, buttDel)

    card.append(img, cardText);
    return(card)
}

createCard()

console.log(createCard)


async function getData() {
    const requestURL = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    // Pasitikrinimui    
    console.log(data);
   

    for(let i = 0; i < data.length; i++){
        const elm = data[i]
        console.log(elm)
        return elm
    }

    // let imgUrl = data[0].image_link
    // console.log(imgUrl)

    //  console.log(data[0].image_link
    //    )
    // //  console.log(data[0].id)
    //  console.log(data[0].brand)
    //  console.log(data[0].name)
    //  console.log(data[0].price)
    //  console.log(data[0].description)
    //  console.log(data[0].product_type)

    return data;

}

getData()


function appendCard(card){
    let parent = document.querySelector('#container')
    parent.append(card)
}

appendCard()


let btn = document.querySelector("button");
btn.addEventListener('click', function () {
    getData().then(data => {

        let { image_link, brand, name, price, description, productType } = data;

       let card = createCard(image_link, brand, name, price, description, productType);
        console.log(card);

        appendCard(card);

    }).catch(error => {
        console.log(error);
    })
})


