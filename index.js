fetch("https://my-json-server.typicode.com/membae/realestate/House1")
    .then((res) => res.json())
    .then((data) => {
        const list3 = document.getElementById("sec3");       
        const fragment = document.createDocumentFragment(); // Use DocumentFragment
       
        data.forEach((element) => {
            // Create main container for each house listing
            const houseContainer = document.createElement("div");
            houseContainer.classList.add("house-container");

            // Create container for image and specifications
            const flexContainer = document.createElement("div");
            flexContainer.classList.add("flex-container");

            // Image container
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("image-container");

            // Create and append the image
            const mainpic = document.createElement("img");
            mainpic.src = element.mainpic;
            mainpic.classList.add("house-image");
            imgDiv.appendChild(mainpic);


            const living=document.createElement("div")
            living.id="living"
            const kibed =document.createElement("div")
            kibed.id="kibed"

            const living_room=document.createElement("img")
            living_room.src=element.living_room;
            living_room.id="living_room"
            living.appendChild(living_room)


            const kitchen = document.createElement("img");
            kitchen.src = element.kitchen;
            kitchen.id="kitchen"
            kibed.appendChild(kitchen)

            const bedroom = document.createElement("img");
            bedroom.src = element.bedroom;
            bedroom.id="bedroom"
            kibed.appendChild(bedroom)

            living.appendChild(kibed)
            imgDiv.appendChild(living)
       
            // Append image container to flex container
            flexContainer.appendChild(imgDiv);

            // Details container
            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("details");

            // Create and append the title
            const title = document.createElement("h2");
            title.textContent = element.title;
            detailsDiv.appendChild(title);

            // Create and append location
            const location = document.createElement("p");
            location.textContent = `Location: ${element.location}`;
            detailsDiv.appendChild(location);

            // Create and append slots
            const slots = document.createElement("p");
            slots.textContent = `Slots: ${element.slots}`;
            detailsDiv.appendChild(slots);

            // Create and append available slots
            const availableSlots = document.createElement("p");
            availableSlots.textContent = `Available slots: ${element.slots - element.taken_slots}`;
            detailsDiv.appendChild(availableSlots);

            // Create "Buy a house" button
            const buyBtn = document.createElement("button");
            buyBtn.textContent = "Buy a house";
            buyBtn.classList.add("action-button");
            buyBtn.addEventListener('click', () => {
                if (element.taken_slots < element.slots) {
                    element.taken_slots++;
                    availableSlots.textContent = `Available slots: ${element.slots - element.taken_slots}`;
                    alert("You just got yourself a house");
                    if (element.taken_slots >= element.slots) {
                        buyBtn.textContent = "SOLD OUT!";
                        buyBtn.disabled = true;
                    }
                }
            });
            detailsDiv.appendChild(buyBtn);

            // Create "Add to Cart" button
            const cartBtn = document.createElement("button");
            cartBtn.textContent = "Add to Cart";
            cartBtn.classList.add("action-button");
            cartBtn.addEventListener('click', () => addToCart(element));
            detailsDiv.appendChild(cartBtn);           


            // Create and append description
            const description = document.createElement("p");
            description.textContent = `Description: ${element.description}`;
            detailsDiv.appendChild(description);

            // Append details container to flex container
            flexContainer.appendChild(detailsDiv);

            // Append flex container to house container
            houseContainer.appendChild(flexContainer);

            // Append house container to fragment
            fragment.appendChild(houseContainer);
            

        });

        // Append fragment to main list container
        list3.appendChild(fragment);
     });


    fetch("https://my-json-server.typicode.com/membae/realestate/house2")
    .then((res) => res.json())
    .then((data) => {
        const list2 = document.getElementById("sec2");
        const frag2=document.createDocumentFragment();
       
        data.forEach((element) => {
            // Create main container for each house listing
            const houseContainer = document.createElement("div");
            houseContainer.classList.add("house-container");

            // Create container for image and specifications
            const flexContainer = document.createElement("div");
            flexContainer.classList.add("flex-container");

            // Image container
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("image-container");

            // Create and append the image
            const mainpic = document.createElement("img");
            mainpic.src = element.mainpic;
            mainpic.classList.add("house-image");
            imgDiv.appendChild(mainpic);


            const living=document.createElement("div")
            living.id="living"
            const kibed =document.createElement("div")
            kibed.id="kibed"

            const living_room=document.createElement("img")
            living_room.src=element.living_room;
            living_room.id="living_room"
            living.appendChild(living_room)


            const kitchen = document.createElement("img");
            kitchen.src = element.kitchen;
            kitchen.id="kitchen"
            kibed.appendChild(kitchen)

            const bedroom = document.createElement("img");
            bedroom.src = element.bedroom;
            bedroom.id="bedroom"
            kibed.appendChild(bedroom)

            living.appendChild(kibed)
            imgDiv.appendChild(living)

            // Append image container to flex container
            flexContainer.appendChild(imgDiv);

            // Details container
            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("details");

            // Create and append the title
            const title = document.createElement("h2");
            title.textContent = element.title;
            detailsDiv.appendChild(title);

            // Create and append location
            const location = document.createElement("p");
            location.textContent = `Location: ${element.location}`;
            detailsDiv.appendChild(location);

            // Create and append slots
            const slots = document.createElement("p");
            slots.textContent = `Slots: ${element.slots}`;
            detailsDiv.appendChild(slots);

            // Create and append available slots
            const availableSlots = document.createElement("p");
            availableSlots.textContent = `Available slots: ${element.slots - element.taken_slots}`;
            detailsDiv.appendChild(availableSlots);

            // Create "Buy a house" button
            const buyBtn = document.createElement("button");
            buyBtn.textContent = "Buy a house";
            buyBtn.classList.add("action-button");
            buyBtn.addEventListener('click', () => {
                if (element.taken_slots < element.slots) {
                    element.taken_slots++;
                    availableSlots.textContent = `Available slots: ${element.slots - element.taken_slots}`;
                    alert("You just got yourself a house");
                    if (element.taken_slots >= element.slots) {
                        buyBtn.textContent = "SOLD OUT!";
                        buyBtn.disabled = true;
                    }
                }
            });
            detailsDiv.appendChild(buyBtn);

            // Create "Add to Cart" button
            const cartBtn = document.createElement("button");
            cartBtn.textContent = "Add to Cart";
            cartBtn.classList.add("action-button");
            cartBtn.addEventListener('click', () => addToCart(element));
            detailsDiv.appendChild(cartBtn);

            // Create and append description
            const description = document.createElement("p");
            description.textContent = `Description: ${element.description}`;
            detailsDiv.appendChild(description);

            // Append details container to flex container
            flexContainer.appendChild(detailsDiv);

            // Append flex container to house container
            houseContainer.appendChild(flexContainer);

            // Append house container to fragment
            frag2.appendChild(houseContainer)
            

        });

        list2.appendChild(frag2)
        
    });



    fetch("https://my-json-server.typicode.com/membae/realestate/house3")
    .then((res) => res.json())
    .then((data) => {
        const list1 = document.getElementById("sec1");
        const frag1=document.createDocumentFragment();

        data.forEach((element) => {
            // Create main container for each house listing
            const houseContainer = document.createElement("div");
            houseContainer.classList.add("house-container");

            // Create container for image and specifications
            const flexContainer = document.createElement("div");
            flexContainer.classList.add("flex-container");

            // Image container
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("image-container");

            // Create and append the image
            const mainpic = document.createElement("img");
            mainpic.src = element.mainpic;
            mainpic.classList.add("house-image");
            imgDiv.appendChild(mainpic);


            const living=document.createElement("div")
            living.id="living"
            const kibed =document.createElement("div")
            kibed.id="kibed"

            const living_room=document.createElement("img")
            living_room.src=element.living_room;
            living_room.id="living_room"
            living.appendChild(living_room)


            const kitchen = document.createElement("img");
            kitchen.src = element.kitchen;
            kitchen.id="kitchen"
            kibed.appendChild(kitchen)

            const bedroom = document.createElement("img");
            bedroom.src = element.bedroom;
            bedroom.id="bedroom"
            kibed.appendChild(bedroom)



            living.appendChild(kibed)
            imgDiv.appendChild(living)

            // Append image container to flex container
            flexContainer.appendChild(imgDiv);

            // Details container
            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("details");

            // Create and append the title
            const title = document.createElement("h2");
            title.textContent = element.title;
            detailsDiv.appendChild(title);

            // Create and append location
            const location = document.createElement("p");
            location.textContent = `Location: ${element.location}`;
            detailsDiv.appendChild(location);

            // Create and append slots
            const slots = document.createElement("p");
            slots.textContent = `Slots: ${element.slots}`;
            detailsDiv.appendChild(slots);

            // Create and append available slots
            const availableSlots = document.createElement("p");
            availableSlots.textContent = `Available slots: ${element.slots - element.taken_slots}`;
            detailsDiv.appendChild(availableSlots);

            // Create "Buy a house" button
            const buyBtn = document.createElement("button");
            buyBtn.textContent = "Buy a house";
            buyBtn.classList.add("action-button");
            buyBtn.addEventListener('click', () => {
                if (element.taken_slots < element.slots) {
                    element.taken_slots++;
                    availableSlots.textContent = `Available slots: ${element.slots - element.taken_slots}`;
                    alert("You just got yourself a house");
                    if (element.taken_slots >= element.slots) {
                        buyBtn.textContent = "SOLD OUT!";
                        buyBtn.disabled = true;
                    }
                }
            });
            detailsDiv.appendChild(buyBtn);

            // Create "Add to Cart" button
            const cartBtn = document.createElement("button");
            cartBtn.textContent = "Add to Cart";
            cartBtn.classList.add("action-button");
            cartBtn.addEventListener('click', () => addToCart(element));
            detailsDiv.appendChild(cartBtn);

            // Create and append description
            const description = document.createElement("p");
            description.textContent = `Description: ${element.description}`;
            detailsDiv.appendChild(description);

            // Append details container to flex container
            flexContainer.appendChild(detailsDiv);

            // Append flex container to house container
            houseContainer.appendChild(flexContainer);

            // Append house container to fragment
            frag1.appendChild(houseContainer)
            

        });

      
        list1.appendChild(frag1)

    });
    //creare show cart btn
    
// Define your cart array to hold items
let cart = [];

// Function to add item to cart
function addToCart(item) {
    cart.push(item);
    alert(`${item.title} has been added to the cart.`);
    renderCart(); // Update cart display
}

// Function to render cart info
function renderCart() {
    const cartDropdownContent = document.getElementById("cart-dropdown-content");

    // Clear previous content
    cartDropdownContent.innerHTML = "";

    // Update cart items display
    if (cart.length === 0) {
        cartDropdownContent.innerHTML = "<p>The cart is empty.</p>";
    } else {
        const fragment = document.createDocumentFragment(); // Use DocumentFragment
        const cartList = document.createElement("ul");

        cart.forEach((item, index) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = item.title;

            // Create a 'Remove' button for each cart item
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener("click", () => removeFromCart(index));
            cartItem.appendChild(removeBtn);

            cartList.appendChild(cartItem);
        });

        fragment.appendChild(cartList);
        cartDropdownContent.appendChild(fragment); // Append fragment to cart dropdown content
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    renderCart(); // Re-render the cart to update the display
}

// Function to create and insert "Show Cart" button
function insertShowCartButton() {
    const cartDropdown = document.querySelector(".cart-dropdown");

    // Create the button element
    const showCartButton = document.createElement("button");
    showCartButton.textContent = "Show Cart";
    showCartButton.classList.add("cart-dropdown-btn");

    // Append the button to the cart container
    cartDropdown.appendChild(showCartButton);

    // Event listener for showing cart dropdown
    showCartButton.addEventListener("click", function() {
        const cartDropdownContent = document.getElementById("cart-dropdown-content");
        cartDropdownContent.classList.toggle("show");
    });
}

// Dummy data to simulate fetching real estate listings
const dummyData = [];

// Simulate fetching real estate listings and adding to cart
dummyData.forEach(item => addToCart(item));

// Insert "Show Cart" button dynamically
insertShowCartButton();


document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const serviceID = 'service_hpfe08l';
        const templateID = 'template_6meieuc';

        // Use emailjs to send the form data
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Message sent successfully!');
            }, (err) => {
                alert('Failed to send message. Error: ' + JSON.stringify(err));
            });

    });


    
