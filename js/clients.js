const clients = document.querySelectorAll(".client_col img");

clients.forEach(client => {
    client.onmouseenter = () => {
        client.classList.add("fluid-dragon-piece");
        setTimeout(() => {
            client.classList.remove("fluid-dragon-piece");
        }, 1000);
    }
});