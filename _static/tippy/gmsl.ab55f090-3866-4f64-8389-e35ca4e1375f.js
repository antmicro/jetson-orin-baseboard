selector_to_html = {"a[href=\"getting_started.html\"]": "<h1 class=\"tippy-header\" id=\"getting-started-guide\" style=\"margin-top: 0;\">Getting started guide<a class=\"headerlink\" href=\"#getting-started-guide\" title=\"Link to this heading\">\u00b6</a></h1><p>This manual will guide you through the initial setup of the open hardware <a class=\"reference external\" href=\"https://github.com/antmicro/jetson-orin-baseboard\">Jetson Orin Baseboard</a>.\nIt describes the basic steps required to assemble the board with required peripheral accessories, write a compiled Board Support Package (BSP) to the processing module and get it booted.\nIf you want to learn more about the Jetson Orin Baseboard itself, go to the <a class=\"reference internal\" href=\"board_overview.html\"><span class=\"std std-doc\">Board Overview</span></a> section.\nThat section also includes an <a class=\"reference internal\" href=\"board_overview.html#io-map\"><span class=\"std std-ref\">I/O map</span></a> that may come in handy when locating interface connectors mentioned in this guide.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'top-start', maxWidth: 1200, interactive: false, duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
