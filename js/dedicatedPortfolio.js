window.onload = () => {
// List of portfolio details to dynamically change the page
    const portfolioDetails = {
        1: {
            title: "Chaumet",
            paragraph: "Chaumet is a renowned luxury brand known for its exquisite jewelry and watches. With a rich heritage dating back to 1780, Chaumet offers a wide range of meticulously crafted pieces that embody elegance, sophistication, and timeless beauty. From dazzling diamond rings to stunning tiaras and high-end timepieces, Chaumet caters to individuals who appreciate the finest craftsmanship and exquisite design.",
        },
        2: {
            title: "UAE-Pavilion",
            paragraph: "Pavilion stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        3: {
            title: "Hisense",
            paragraph: "Hisense is a leading global electronics brand that offers a wide range of cutting-edge consumer electronics and home appliances. Known for their innovative technology and high-quality products, Hisense provides televisions, refrigerators, air conditioners, washing machines, and more. With a focus on delivering superior performance, energy efficiency, and user-friendly features, Hisense caters to the needs of modern households and ensures an enhanced entertainment and living experience.",
        },
        4: {
            title: "Al-Ain",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        5: {
            title: "Hyundai",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        6: {
            title: "Lamborghini",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        7: {
            title: "Roxy-Cinemas",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        8: {
            title: "LG",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        9: {
            title: "Genesis",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        10: {
            title: "Genesis",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        11: {
            title: "Genesis",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        12: {
            title: "Balade",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        13: {
            title: "Jaeger-LeCoultre",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
        14: {
            title: "MOTN",
            paragraph: "Al-Ain stuff and all dat cool jazz. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, repellendus est architecto omnis eos iusto cupiditate magnam voluptatibus et porro, ullam voluptas! Excepturi voluptas esse cum atque quibusdam aut corporis!",
        },
    }

// Retrieve Existing document elements
    let pageId = document.querySelector("meta[portfId]").getAttribute("portfId");
    let dedicatedPortfolioContent = document.querySelector("#dedicated-portfolio-content");

// Write page content
    dedicatedPortfolioContent.innerHTML = `
        <div class="title__wrap">
            <p class="title">${portfolioDetails[pageId].title.replace("-"," ")}</p>
            <img src="https://d3i7ke5fj3tp7c.cloudfront.net/images/particle.svg" alt="particle" height="8px"
                class="ms-1" />
            <div class="subtitle__wrap">
                <hr style="width: 12%" />
            </div>
        </div>
    
        <p>${portfolioDetails[pageId].paragraph}</p>
    
        <div id="hero-video-wrapper">
            <video id="hero-video" autoplay loop muted playsinline
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Header_Video.mp4"
                type="video/mp4" ondblclick="goFullScreen('hero-video')"></video>
        </div>
    
        <div id="artworks">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_001.jpg"
                alt="" height="400" width="400">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_002.jpg"
                alt="" height="400" width="400">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_003.jpg"
                alt="" height="400" width="400">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_004.jpg"
                alt="" height="400" width="400">
            <img draggable="false" class="previews"
                src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_005.jpg"
                alt="" height="400" width="400">
                <div id="showcase">
                <img draggable="false" id="test" width="1400" height="1866" src="#" alt="">
                </div>
                </div>
                `
    // <img draggable="false" class="previews"
    //     src="https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio_dedicated_pages/${portfolioDetails[pageId].title}_Image_006.jpg"
    //     alt="" height="400" width="400">
                
//Retrieve dynamically written document elements
    let artworks = document.querySelector("#artworks");
    let previews = document.querySelectorAll(".previews");
    let showcase = document.querySelector("#showcase>img");

// Add Click function to preview images
    previews.forEach(preview => {
        preview.addEventListener("mouseenter", function () {
            preview.scrollIntoView(true)
            showcase.src = preview.src;
            showcase.style.maxHeight = "5000px";
        })
    });
    artworks.addEventListener("mouseleave", function () {
        showcase.style.maxHeight = "0px";
    })
}

