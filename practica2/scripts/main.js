let numeroActual = 0;
let numeroMaximo = 50;

function generateDivs(n) {
    // Get a reference to the container where you want to append the divs
    const container = document.getElementById('divNumero');
  
    // Check if the container exists
    if (container) {
      // Loop to generate n div elements
      for (let i = 0; i < n; i++) {
        // Create a new div element
        const div = document.createElement('div');
        
        // Add some content or styling to the div (optional)
        div.textContent = `${i + 1}`;
        div.classList.add('container-numero');
  
        // Append the div to the container
        container.appendChild(div);
      }
    } else {
      console.error('Container not found.');
    }
  }
  
  // Call the function with the desired number of divs
  generateDivs(numeroMaximo); // Replace 25 with the desired number of divs