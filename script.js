const toggle = document.querySelector('#switch')
const basicPriceDisplay = document.querySelector('#basicPriceDisplay')
const premiumPriceDisplay = document.querySelector('#premiumPriceDisplay')
const masterPriceDisplay = document.querySelector('#masterPriceDisplay')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('checked')
    if (toggle.classList.contains('checked')) {
        basicPriceDisplay.textContent = '$19.99'
        premiumPriceDisplay.textContent = '$24.99'
        masterPriceDisplay.textContent = '$39.99'

    }
    else {
        basicPriceDisplay.textContent = '$199.99'
        premiumPriceDisplay.textContent = '$249.99'
        masterPriceDisplay.textContent = '$399.99'
    }
})

{/* <h3 id="basicPriceDisplay">$19.99</h3>
          <!-- &dollar;199.99 -->
          <h3 id="premiumPriceDisplay">$24.99</h3>
          <!-- &dollar;249.99 -->
          <h3 id="masterPriceDisplay">$39.99</h3>
          <!-- &dollar;399.99 --> */}