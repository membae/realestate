// Fetch data from your API or JSON file
fetch("http://localhost:3000/House")
    .then((res) => res.json())
    .then((data) => {
        const list = document.getElementById("sec1");

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
            const btn = document.createElement("button");
            btn.textContent = "Buy a house";
            btn.addEventListener('click', () => {
                if (element.taken_slots < element.slots) {
                    element.taken_slots++;
                    availableSlots.textContent = `Available slots: ${element.slots - element.taken_slots}`;
                    alert("You just got yourself a house");
                    if (element.taken_slots >= element.slots) {
                        btn.textContent = "SOLD OUT!";
                        btn.disabled = true;
                    }
                }
            });
            detailsDiv.appendChild(btn);

            // Create and append description
            const description = document.createElement("p");
            description.textContent = `Description: ${element.description}`;
            detailsDiv.appendChild(description);

            // Append details container to flex container
            flexContainer.appendChild(detailsDiv);

            // Append flex container to house container
            houseContainer.appendChild(flexContainer);

            // Append house container to main list container
            list.appendChild(houseContainer);
        });
    });

let cart = [];

function addToCart(item) {
    cart.push(item);
    alert(`${item.title} has been added to the cart.`);
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = ""; // Clear the current cart contents

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>The cart is empty.</p>";
    } else {
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

        cartContainer.appendChild(cartList);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    renderCart(); // Re-render the cart to update the display
}

document.getElementById('contact-form')
.addEventListener('submit', function(event) {
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