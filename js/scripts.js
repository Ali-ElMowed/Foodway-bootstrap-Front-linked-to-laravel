
let resto_cards = document.getElementById('resto-cards');



let data = new FormData();

fetch('http://127.0.0.1:8000/api/restaurants',
    {
        method: 'GET'
    }

)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let card = '';
        for (let i = 0; i < data.restos.length; i++) {
            let restaurant = data.restos[i];
            console.log(restaurant);
            let restaurant_name = restaurant.resto_name;
            let restaurant_id = restaurant.id;
            let restaurant_description = restaurant.description;
            let restaurant_phone = restaurant.phone_number;
            let restaurant_city = restaurant.city_id;
            let restaurant_category = restaurant.cat_id;

            card=`
            <div class="col-md-4 mb-5">
                    <div class="card h-100">
                        <div class="card-body">
                            <img src="./assets/images/resto.png" class="card-img-top">
                            <h2 class="card-title">${restaurant_name}</h2>
                            <p class="card-text">${restaurant_description}</p>
                        </div>
                        <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
            `;
            
            resto_cards.innerHTML += card;

    
        }
    
    })
       
            

