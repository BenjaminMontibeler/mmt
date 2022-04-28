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



var y = true;
img2 = document.getElementById("brnja");

            function enlargeImg2() {
                if(y){
                    img2.style.width = "35%";
                    img2.style.height = "auto";
                    img2.style.transition = "width 0.5s ease";
                }
                else{
                    img2.style.width = "10%";
                    img2.style.height = "auto";
                    img2.style.transition = "width 0.5s ease";
                }
                y=!y
            }
            


            var modal = document.getElementById("myModal");

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById("myImg");
            var modalImg = document.getElementById("img01");
            img.onclick = function(){
              modal.style.display = "block";
              modalImg.src = this.src;
              
            }
            
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close1")[0];
            
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
              modal.style.display = "none";
            }




            var modal2 = document.getElementById("myModal2");

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img2 = document.getElementById("myImg2");
            var modalImg2 = document.getElementById("img02");
            img2.onclick = function(){
              modal2.style.display = "block";
              modalImg2.src = this.src;
            }
            
            // Get the <span> element that closes the modal
            var span2 = document.getElementsByClassName("close2")[0];
            
            // When the user clicks on <span> (x), close the modal
            span2.onclick = function() {
              modal2.style.display = "none";
            }
