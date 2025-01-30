(function () {
   "use strict";
   const root = document.documentElement;
   const eventPP = document.querySelector("#js-eventPP");

   if (eventPP) {
    const evenOpenBtn = document.querySelector("#js-pizzaOpenBtn");

    evenOpenBtn.addEventListener("click", function () {
        root.classList.add("show-pizza-popup");
    });

    eventPP.addEventListener("click", function (event) {
        if (event.target === this)
        {
            root.classList.remove("show-pizza-popup");
        }
    });
   }
})();