const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
document.getElementById("lucas-plus").addEventListener("click", function() {
    
    const dataToSend = {
        name: 'test',
        amount: 1
    };
    fetch('/add-p1/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    console.log('count was added succesfully:', data);
    })
    .catch(error => {
    console.error('Error while adding count:', error);
    });
      
    
});
document.getElementById("lucas-min").addEventListener("click", function() {
    // Your JavaScript code here
    alert("Button clicked!");
});
document.getElementById("anna-plus").addEventListener("click", function() {
    // Your JavaScript code here
    alert("Button clicked!");
});
document.getElementById("anna-min").addEventListener("click", function() {
    // Your JavaScript code here
    alert("Button clicked!");
});
document.getElementById("elisa-plus").addEventListener("click", function() {
    // Your JavaScript code here
    alert("Button clicked!");
});
document.getElementById("elisa-min").addEventListener("click", function() {
    // Your JavaScript code here
    alert("Button clicked!");
});
// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}