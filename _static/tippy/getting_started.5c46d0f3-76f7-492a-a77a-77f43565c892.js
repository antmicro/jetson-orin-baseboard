selector_to_html = {"a[href=\"references.html#j12\"]": "<img alt=\"_images/J12_top.png\" id=\"j12\" src=\"_images/J12_top.png\"/>", "a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<img alt=\"\" src=\"_images/job_ready_for_flashing.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 2 </span><span class=\"caption-text\"><span class=\"caption-text\">\nJetson Orin Baseboard ready for flashing.</span><a class=\"headerlink\" href=\"#id2\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>", "a[href=\"references.html#j5\"]": "<img alt=\"_images/J5_top.png\" id=\"j5\" src=\"_images/J5_top.png\"/>", "a[href=\"references.html#d11\"]": "<img alt=\"_images/D11_top.png\" id=\"d11\" src=\"_images/D11_top.png\"/>", "a[href=\"references.html#j10\"]": "<img alt=\"_images/J10_top.png\" id=\"j10\" src=\"_images/J10_top.png\"/>", "a[href=\"references.html#j2\"]": "<img alt=\"_images/J2_bottom.png\" id=\"j2\" src=\"_images/J2_bottom.png\"/>", "a[href=\"references.html#j6\"]": "<img alt=\"_images/J6_top.png\" id=\"j6\" src=\"_images/J6_top.png\"/>", "a[href=\"references.html#j15\"]": "<img alt=\"_images/J15_top.png\" id=\"j15\" src=\"_images/J15_top.png\"/>", "a[href=\"references.html#j3\"]": "<img alt=\"_images/J3_bottom.png\" id=\"j3\" src=\"_images/J3_bottom.png\"/>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<img alt=\"\" src=\"_images/job_power_connection.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 1 </span><span class=\"caption-text\"><span class=\"caption-text\">\nJetson Orin Baseboard DC power connection with polarity marking (red: vcc, black: gnd).</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>", "a[href=\"references.html#j4\"]": "<img alt=\"_images/J4_top.png\" id=\"j4\" src=\"_images/J4_top.png\"/>", "a[href=\"references.html#d53\"]": "<img alt=\"_images/D53_top.png\" id=\"d53\" src=\"_images/D53_top.png\"/>", "a[href=\"board_overview.html\"]": "<h1 class=\"tippy-header\" id=\"board-overview\" style=\"margin-top: 0;\">Board overview<a class=\"headerlink\" href=\"#board-overview\" title=\"Link to this heading\">\u00b6</a></h1><p>Jetson Orin Baseboard is an open hardware board design supporting NVIDIA Jetson Orin NX and Orin Nano family of SoMs.\nThe board design files were created in KiCad 8.x.\nThe board is a versatile development kit which can be easily adopted in order to make it usable in commercial applications for autonomous vehicles, industry, agriculture, medicine or space.\nYou can find out more about the Jetson Orin Baseboard in this <a class=\"reference external\" href=\"https://antmicro.com/blog/2023/05/jetson-orin-baseboard-1-1-with-orin-nano/\">blog article</a>, or by visiting Antmicro\u2019s portals listed below:</p>"}
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
