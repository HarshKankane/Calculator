// const toggle_btn = document.querySelector('#checkbox')

// toggle_btn.addEventListener("change" , () =>
// {
//     if(toggle_btn.checked)
//         {
//             document.body.classList.add('dark-mode')
//         }
//         else
//         {
//             document.body .classList .remove('dark-mode')

//         }
// })


// Get the toggle button and the container
const toggle_btn = document.querySelector('#checkbox');
const container = document.querySelector('.container');

// Function to toggle dark mode
toggle_btn.addEventListener("change", () => {
    if (toggle_btn.checked) {
        container.classList.add('dark-mode');
    } else {
        container.classList.remove('dark-mode');
    }
});

function calculateSquare() {
    display.value = Math.pow(parseFloat(display.value), 2);
}