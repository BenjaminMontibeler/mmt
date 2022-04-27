var x = true;
img = document.getElementById("lora");
            // Function to set image dimensions
            function enlargeImg() {
                if(x){
                    img.style.width = "60%";
                    img.style.height = "auto";
                    img.style.transition = "width 0.5s ease";
                }
                else{
                    img.style.width = "20%";
                    img.style.height = "auto";
                    img.style.transition = "width 0.5s ease";
                }
                x=!x
            }
            