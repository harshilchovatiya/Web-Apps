document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('addData');
    const socialButton = document.getElementById('addSocialLinks');
    const socialicons = document.getElementById('social-icons');
    const fillForm = document.getElementById('fillData');
    var div = document.createElement("div");


    let namesList = getDataLocally("ProductData");

    if (!namesList) {
        // If no data is found in local storage, initialize namesList with some default values.
        namesList = ['First'];
        storeDataLocally("ProductData", namesList);
    }

    function Linkcss() {
        let head = document.getElementsByTagName('HEAD')[0];
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style.css';
        head.appendChild(link);
    }

    function generateCard(array, index) {
        const codee = `<div class="container">
        <div class="wrapper">
          <div class="banner-image"> </div>
          <h1>${array[index]}</h1>
          <p>Lorem ipsum dolor sit amet, <br/>
            consectetur adipiscing elit.</p>
         </div>
         <div class="button-wrapper"> 
         <button class="btn outline">DETAILS</button>
         <button class="btn fill" onclick="">BUY NOW</button>
         </div>
           </div>
       </div>`;
        return codee
    }

    function displayCards() {
        for (let i = 0; i < namesList.length; i++) {
            div.innerHTML += generateCard(namesList, i);
        }
        div.innerHTML += `<button id="deletebtn" onclick="deleteCard()"}>Click Here Delete</button>`
        document.getElementById("main").appendChild(div);
        Linkcss();
    }

    window.deleteCard = function () {
        div.innerHTML = "";
        namesList.pop();
        console.log(namesList);
        displayCards();
        storeDataLocally("ProductData", namesList);
    }

    // button.addEventListener("click", addButton);

    function addButton(productname) {
        const productName = productname;
        addDataTolist(productName);
        displayCards();
        storeDataLocally("ProductData", namesList);
        console.log("Product added: " + productName);
        button.parentNode.removeChild(button);
        fillForm.parentNode.removeChild(fillForm);
    }

    // fillForm.addEventListener("submit", function (event) {
    //     event.preventDefault();
    //     const producutname = this.elements.pname.value;
    //     addButton(producutname);
    // });

    function addDataTolist(productName) {
        namesList.push(productName);
    }

    function storeDataLocally(arrayName, array) {
        let string = JSON.stringify(array);
        localStorage.setItem(arrayName, string);
    }

    function getDataLocally(arrayName) {
        let retString = localStorage.getItem(arrayName);
        let retArray = JSON.parse(retString);
        return retArray || [];
    }
    // displayCards();


    // social Icons Link Css Files

    function LinkSocialcss() {
        let head = document.getElementsByTagName('HEAD')[0];
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'src/social.css';
        head.appendChild(link);
        Iconcds()
        console.log("Css Added");
    }

    function Iconcds() {
        let head = document.getElementsByTagName('HEAD')[0];
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css';
        head.appendChild(link);
        console.log("CDN is added");

    }

    /// Add Icons Stacicaly ///
    AddSocialIconsStatic();
    function AddSocialIconsStatic() {
        function generateSocialIcons() {
            const socialCodes = `<div class="wrapper-icon">
            <a href="#" class="icon facebook">
              <div class="tooltip">Facebook</div>
              <span><i class="fab fa-facebook-f"></i></span>
            </a>
            <a href="#" class="icon twitter">
              <div class="tooltip">Twitter</div>
              <span><i class="fab fa-twitter"></i></span>
            </a>
            <a href="#" class="icon instagram">
              <div class="tooltip">Instagram</div>
              <span><i class="fab fa-instagram"></i></span>
            </a>
            <a href="#" class="icon github">
              <div class="tooltip">Github</div>
              <span><i class="fab fa-github"></i></span>
            </a>
            <a href="#" class="icon youtube">
              <div class="tooltip">Youtube</div>
              <span><i class="fab fa-youtube"></i></span>
            </a>
          </div>`;
            return socialCodes
        }
        // socialActivies();
        function socialActivies() {
            console.log("Cliked");
            LinkSocialcss();
            div.innerHTML += generateSocialIcons();
            document.getElementById("main").appendChild(div);
        }
        socialButton.addEventListener("click", socialActivies);
    }




    //// Fianl Social Icons Functions are here  
    AddSocialsDynamicaly();
    function AddSocialsDynamicaly() {
        const socialFields = document.getElementById("socialFields");
        const addSocialField = document.getElementById("addSocialField");
        const previewButton = document.getElementById("preview");
        const maxSocialFields = 5;

        addSocialField.addEventListener("click", () => {
            if (socialFields.querySelectorAll(".social-field").length < maxSocialFields) {
                // Create a new social media field
                const newField = document.createElement("div");
                newField.classList.add("social-field");
                newField.innerHTML = `
                    <label for="socialSelect">Select Social Media:</label>
                    <select class="socialSelect">
                        <option value="Website">Website</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Youtube">Youtube</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Github">Github</option>
                        <option value="Whatsapp">Whatsapp</option>
                        <option value="Location">Location</option>
                    </select>
                    <input class="linkInput" type="text" placeholder="Enter Link">
                `;
                socialFields.appendChild(newField);
            }
        });

        previewButton.addEventListener("click", () => {
            const socialSelects = document.querySelectorAll(".socialSelect");
            const linkInputs = document.querySelectorAll(".linkInput");
            var iconList = document.createElement('iconList');
            iconList.innerHTML = "";


            for (let i = 0; i < socialSelects.length; i++) {
                const socialMedia = socialSelects[i].value;
                const link = linkInputs[i].value;

                const icon = document.createElement("a");
                icon.className = `icon ${socialMedia.toLowerCase()}`;
                icon.href = link;
                if (socialMedia !== "Website" && link) {
                    icon.innerHTML = `
                            <div class="tooltip">${socialMedia}</div>
                            <span><i class="fab fa-${socialMedia.toLowerCase()}"></i></span>
                        `;
                }
                if (socialMedia === "Website" && link) {
                    icon.innerHTML = `
                            <div class="tooltip">${socialMedia}</div>
                            <span><i class="fas fa-globe"></i></span>
                        `;
                }
                if (socialMedia === "Location" && link) {
                    icon.innerHTML = `
                            <div class="tooltip">${socialMedia}</div>
                            <span><i class="fas fa-map-marked-alt"></i></span>
                        `;
                }

                iconList.appendChild(icon);

            }

            console.log(iconList.innerHTML);

            socialIconsAdd(iconList.innerHTML);

            function generateSocialIconscode(code) {
                var coess = `<div class="wrapper-icon" id="iconList">${code}</div>`;
                return coess;
            }
            function socialIconsAdd(code) {
                console.log("Cliked");
                LinkSocialcss();
                div.innerHTML += generateSocialIconscode(code);
                socialicons.appendChild(div);
            }
        });

    }

    ///


});