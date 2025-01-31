(function () {
   "use strict";
   const root = document.documentElement;
   const pizzaMW = document.querySelector("div.modal-window");

   if (pizzaMW) {
    const pizzaOpenBtn = document.querySelectorAll("button.pizza__btn");

    for (let Btn of pizzaOpenBtn) {
        Btn.addEventListener("click", function () {
        root.classList.add("show-pizza_modal-window");
    });
    
    pizzaMW.addEventListener("click", function (event) {
        if (event.target === this){
            root.classList.remove("show-pizza_modal-window");
        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.key === "Escape" || event.keyCode === 27) {
            root.classList.remove("show-pizza_modal-window");
        }
    });
    }
   }
})();