function Sidebar() {
    const sidebarDiv = document.querySelector("#sidebar");
    sidebarDiv.innerHTML = "";
}

function Content() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

export const DOMHandler = (() => {
    
    function initiatePage() {
        Sidebar();
        Content();
    }

    return {
        initiatePage
    }
})();