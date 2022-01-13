document.addEventListener("DOMContentLoaded", function() {
            var btn = document.getElementById("reservebtn");
            var myModal = new bootstrap.Modal(document.getElementById("modalReserve"));
            btn.onclick = function(){
                myModal.show()
            }
        });
        document.addEventListener("DOMContentLoaded", function() {
            var btn = document.getElementById("login");
            var myModal = new bootstrap.Modal(document.getElementById("modalLogin"));
            btn.onclick = function(){
                myModal.show()
            }
        });