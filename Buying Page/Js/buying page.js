document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var menu = document.getElementById('menu').value;
    var email = document.getElementById('email').value;
    var quantity = document.getElementById('quantity').value;
  
    // Simulate purchase process (you may replace this with your actual backend logic)
    setTimeout(function() {
      var responseDiv = document.getElementById('response');
      responseDiv.innerHTML = `<p>Purchase successful!</p>
                               <p>Name: ${name}</p>
                               <p>Email: ${email}</p>
                               <p>Quantity: ${quantity}</p>
                               <p>Name Menu: ${menu}</p>
                               <p>After This You Can Click Payments On Above</p>`;
    }, 1000);
  });
  