fetch("http://localhost:3000/House")
.then((res)=>res.json())
.then((data)=>{
    data.forEach(element => {

        const list=document.getElementById("sec1");
        const inerlist=document.createElement("div")
        const imgdiv=document.createElement("div")
        imgdiv.id="imgdiv"
        inerlist.id="sec2";
        



        const title=document.createElement("h2")
        title.textContent=element.title
        title.id="title"
        inerlist.appendChild(title)

        const mainpic=document.createElement("img")
        mainpic.src=element.mainpic;
        mainpic.id="mainpic";
        imgdiv.appendChild(mainpic)

        const location=document.createElement("p")
        location.textContent=`Location:${element.location}`
        location.id="location"
        inerlist.appendChild(location)


        const slots=document.createElement("p")
        slots.textContent=`Slots:${element.slots}`
        slots.id="slots"
        inerlist.appendChild(slots)

        const available_slots=document.createElement("p")
        available_slots.textContent=`Available slots:${element.slots-element.taken_slots}`
        available_slots.id="available_slots"
        inerlist.appendChild(available_slots)


        const btn=document.createElement("button")
        btn.id="btn"
        btn.textContent="buy a house"
        btn.addEventListener('click', () => {
            if (element.taken_slots < element.slots) {
                element.taken_slots++;
                available_slots.textContent = `Available slots: ${element.slots - element.taken_slots}`;
                alert("You just got yourself a house");
                if (element.taken_slots >= element.slots) {
                    btn.textContent = "SOLD OUT!";
                    btn.disabled = true;
                }
            } 
           
        });
        inerlist.appendChild(btn);
       


        


        // const kitchen=document.createElement("img")
        // kitchen.src=element.kitchen;
        // kitchen.id="kichen";
        // inerlist.appendChild(kitchen)


        // const bedroom=document.createElement("img")
        // bedroom.src=element.bedroom;
        // bedroom.id="bedroom";
        // inerlist.appendChild(bedroom)


        const description=document.createElement("p")
        description.textContent=`Description:${element.description}`
        description.id="description"
        inerlist.appendChild(description)

        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.addEventListener("click", () => addToCart(element));
        inerlist.appendChild(addToCartBtn);


        

        list.appendChild(imgdiv)
        list.appendChild(inerlist)
       

    });
})

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

document.getElementById('contact-form').addEventListener('submit', function(event) {
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