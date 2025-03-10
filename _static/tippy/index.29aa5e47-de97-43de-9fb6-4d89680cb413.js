selector_to_html = {"a[href=\"gmsl.html\"]": "<h1 class=\"tippy-header\" id=\"gmsl\" style=\"margin-top: 0;\">GMSL<a class=\"headerlink\" href=\"#gmsl\" title=\"Link to this heading\">\u00b6</a></h1><p>This manual will guide you through the setup of the open hardware GMSL Deserializer and Serializer boards together with Jetson Orin Baseboard.\nIt describes the basic steps required to run a simple demo that captures feed from the connected OV5640 sensor.</p>", "a[href=\"board_overview.html\"]": "<h1 class=\"tippy-header\" id=\"board-overview\" style=\"margin-top: 0;\">Board overview<a class=\"headerlink\" href=\"#board-overview\" title=\"Link to this heading\">\u00b6</a></h1><p>Jetson Orin Baseboard is an open hardware board design supporting NVIDIA Jetson Orin NX and Orin Nano family of SoMs.\nThe board design files were created in KiCad 8.x.\nThe board is a versatile development kit which can be easily adopted in order to make it usable in commercial applications for autonomous vehicles, industry, agriculture, medicine or space.\nYou can find out more about the Jetson Orin Baseboard in this <a class=\"reference external\" href=\"https://antmicro.com/blog/2023/05/jetson-orin-baseboard-1-1-with-orin-nano/\">blog article</a>, or by visiting Antmicro\u2019s portals listed below:</p>", "a[href=\"getting_started.html\"]": "<h1 class=\"tippy-header\" id=\"getting-started-guide\" style=\"margin-top: 0;\">Getting started guide<a class=\"headerlink\" href=\"#getting-started-guide\" title=\"Link to this heading\">\u00b6</a></h1><p>This manual will guide you through the initial setup of the open hardware <a class=\"reference external\" href=\"https://github.com/antmicro/jetson-orin-baseboard\">Jetson Orin Baseboard</a>.\nIt describes the basic steps required to assemble the board with required peripheral accessories, write a compiled Board Support Package (BSP) to the processing module and get it booted.\nIf you want to learn more about the Jetson Orin Baseboard itself, go to the <a class=\"reference internal\" href=\"board_overview.html\"><span class=\"std std-doc\">Board Overview</span></a> section.\nThat section also includes an <a class=\"reference internal\" href=\"board_overview.html#io-map\"><span class=\"std std-ref\">I/O map</span></a> that may come in handy when locating interface connectors mentioned in this guide.</p>"}
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
