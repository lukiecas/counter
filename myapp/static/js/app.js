const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');


const button = document.getElementById('lucas-plus');
const button1 = document.getElementById('lucas-min');
const button2 = document.getElementById('anna-plus');
const button3 = document.getElementById('anna-min');
const button4 = document.getElementById('elisa-plus');
const button5 = document.getElementById('elisa-min');
let myData;
fetch('/get-data/')
  .then(response => response.json())
  .then(data => {
    myData = data;
    console.log('Data stored: ', myData[0]['count']);
    button.textContent = 'Lucas plus (' + myData[0]['count'] + ')';
    
    button2.textContent = 'anna plus (' + myData[1]['count'] + ')';
    
    button4.textContent = 'elisa plus (' + myData[2]['count'] + ')';
    
  })
  .catch(error => {
    console.error('Error:', error);
  });


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
document.getElementById("lucas-plus").addEventListener("click", function() {
    
    const dataToSend = {
        p_id: '1',
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
    fetch('/get-data/')
  .then(response => response.json())
  .then(data => {
    myData = data;
    console.log('Data stored: ', myData[0]['count']);
    button.textContent = 'Lucas plus (' + myData[0]['count'] + ')';
    
    button2.textContent = 'anna plus (' + myData[1]['count'] + ')';
    
    button4.textContent = 'elisa plus (' + myData[2]['count'] + ')';
    
  })
  .catch(error => {
    console.error('Error:', error);
  });

    })
    .catch(error => {
    console.error('Error while adding count:', error);
    });
      
    
});
document.getElementById("lucas-min").addEventListener("click", function() {
    // Your JavaScript code here
    const dataToSend = {
        p_id: '1',
        amount: -1
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
    fetch('/get-data/')
  .then(response => response.json())
  .then(data => {
    myData = data;
    console.log('Data stored: ', myData[0]['count']);
    button.textContent = 'Lucas plus (' + myData[0]['count'] + ')';
    
    button2.textContent = 'anna plus (' + myData[1]['count'] + ')';
    
    button4.textContent = 'elisa plus (' + myData[2]['count'] + ')';
    
  })
  .catch(error => {
    console.error('Error:', error);
  });

    })
    .catch(error => {
    console.error('Error while adding count:', error);
    });
});
document.getElementById("anna-plus").addEventListener("click", function() {
    // Your JavaScript code here
    const dataToSend = {
        p_id: '2',
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
    fetch('/get-data/')
  .then(response => response.json())
  .then(data => {
    myData = data;
    console.log('Data stored: ', myData[0]['count']);
    button.textContent = 'Lucas plus (' + myData[0]['count'] + ')';
    
    button2.textContent = 'anna plus (' + myData[1]['count'] + ')';
    
    button4.textContent = 'elisa plus (' + myData[2]['count'] + ')';
    
  })
  .catch(error => {
    console.error('Error:', error);
  });

    })
    .catch(error => {
    console.error('Error while adding count:', error);
    });
});
document.getElementById("anna-min").addEventListener("click", function() {
    // Your JavaScript code here
    const dataToSend = {
        p_id: '2',
        amount: -1
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
    fetch('/get-data/')
  .then(response => response.json())
  .then(data => {
    myData = data;
    console.log('Data stored: ', myData[0]['count']);
    button.textContent = 'Lucas plus (' + myData[0]['count'] + ')';
    
    button2.textContent = 'anna plus (' + myData[1]['count'] + ')';
    
    button4.textContent = 'elisa plus (' + myData[2]['count'] + ')';
    
  })
  .catch(error => {
    console.error('Error:', error);
  });

    })
    .catch(error => {
    console.error('Error while adding count:', error);
    });
});
document.getElementById("elisa-plus").addEventListener("click", function() {
    // Your JavaScript code here
    const dataToSend = {
        p_id: '3',
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
    fetch('/get-data/')
  .then(response => response.json())
  .then(data => {
    myData = data;
    console.log('Data stored: ', myData[0]['count']);
    button.textContent = 'Lucas plus (' + myData[0]['count'] + ')';
    
    button2.textContent = 'anna plus (' + myData[1]['count'] + ')';
    
    button4.textContent = 'elisa plus (' + myData[2]['count'] + ')';
    
  })
  .catch(error => {
    console.error('Error:', error);
  });

    })
    .catch(error => {
    console.error('Error while adding count:', error);
    });
});
document.getElementById("elisa-min").addEventListener("click", function() {
    // Your JavaScript code here
    const dataToSend = {
        p_id: '3',
        amount: -1
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
    fetch('/get-data/')
  .then(response => response.json())
  .then(data => {
    myData = data;
    console.log('Data stored: ', myData[0]['count']);
    button.textContent = 'Lucas plus (' + myData[0]['count'] + ')';
    
    button2.textContent = 'anna plus (' + myData[1]['count'] + ')';
    
    button4.textContent = 'elisa plus (' + myData[2]['count'] + ')';
    
  })
  .catch(error => {
    console.error('Error:', error);
  });

    })
    .catch(error => {
    console.error('Error while adding count:', error);
    });
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