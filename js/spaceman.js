window.onload = function () {
    console.log("Ready")
    var spaceman = document.querySelector("#orbit-astronaut");
    spaceman.style.position = "absolute";

    var clicks = 0;

    spaceman.addEventListener("click", function (e) {
        clicks += 1;
        if (clicks % 4 == 0) {
            if (e.target.style.position == "fixed") {
                e.target.style.position = "absolute";
            } else if (e.target.style.position == "absolute") {
                e.target.style.position = "fixed";
            } else {
                e.target.style.position = "absolute";
            }
        }
    })
}

function activateBlackHole() {
    window.alert("Why did you do that...🤦‍♂️ \n\n RIP 💀")

    //Add some styles to the page
    var styleNode = document.createElement("style");

    styleNode.id = "blackhole";
    styleNode.type = "text/css";
    styleNode.textContent = ".vortex-removed{visibility: hidden;} .vortex-attracted{ animation: attraction 2.1s infinite linear; } @keyframes attraction {from {transform: rotate(0deg) scale(1);}to { transform: rotate(359deg) scale(0);}};";

    document.head.appendChild(styleNode);
    document.body.style['overflow-x'] = 'hidden';

    //Get all the elements of the page
    var all_elements = document.querySelectorAll('*:not(html, head, title, link, meta, script, style, noscript, body, li, p, span)');
    all_elements = Array.from(all_elements);

    //Get the screen dimension
    var screen_width = Math.min(document.body.scrollWidth, window.innerWidth);
    var screen_height = Math.max(document.body.scrollHeight, window.innerHeight);

    //Start the loop
    var recursion = 0;


    document.onmousemove = (mouse) => {

        if (all_elements.length == 0 || recursion > 20) return;

        //Select a random element
        var random = Math.floor(Math.random() * all_elements.length);
        var el = all_elements[random];

        var childs = el.querySelectorAll('*:not(.vortex-flagged)');

        //If the element is invalid or if it has too many childs retry
        if (typeof el == 'undefined' || childs.length > 100) {
            recursion++;
            absorbElement();
            return;
        } else {
            resursion = 0;
        }

        //Flag all the child so they can't be selected on the next iterations
        childs.forEach(function (node) {
            node.classList.add('vortex-flagged');
        });

        //Clone the element and hide the original
        var el_width = el.offsetWidth;
        var el_height = el.offsetHeight;
        var el_offset_x = el.offsetLeft;
        var el_offset_y = el.offsetTop;

        var el_clone = el.cloneNode(true);
        el_clone.classList.add('vortex-attracted');
        el.classList.add('vortex-removed');
        el.classList.add('vortex-flagged');

        document.body.appendChild(el_clone);

        //Style the cloned element
        el_clone.style["position"] = "absolute";
        el_clone.style["width"] = el_width + 'px';
        el_clone.style["height"] = el_height + 'px';
        el_clone.style["top"] = el_offset_y + 'px';
        el_clone.style["left"] = el_offset_x + 'px';
        el_clone.style["transition"] = 'all 2s ease-out';
        el_clone.style["transform-origin"] = 'center';
        el_clone.style["z-index"] = 999999;

        //Start the animation
        setTimeout(function () {
            el_clone.style['top'] = ((mouse.clientY) - (el_height / 2)) + 'px';
            el_clone.style['left'] = ((mouse.clientX) - (el_width / 2)) + 'px';
        }, 1);

        //Remove the clone after it has been absorbed
        setTimeout(function () {
            el_clone.parentNode.removeChild(el_clone);
        }.bind(null, el_clone), 2000);

        //Reduce the set of available elements
        all_elements = all_elements.filter(function (node) {
            return !node.classList.contains('vortex-flagged');
        });

        setTimeout(absorbElement, 50);
    }
}

function drop(event) {
    var data = event.dataTransfer.getData("orbit-astronaut");
    if (data == "orbit-astronaut") {
        activateBlackHole();
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("orbit-astronaut", event.target.id)
}