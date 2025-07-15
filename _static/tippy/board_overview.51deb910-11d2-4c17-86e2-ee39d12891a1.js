selector_to_html = {"a[href=\"references.html#j12\"]": "<img alt=\"_images/J12_top.png\" id=\"j12\" src=\"_images/J12_top.png\"/>", "a[href=\"#id4\"]": "<figure class=\"align-default\" id=\"id4\">\n<img alt=\"\" src=\"_images/job_io_map.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 3 </span><span class=\"caption-text\"><span class=\"caption-text\">\nJetson Orin Baseboard interface map</span><a class=\"headerlink\" href=\"#id4\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>", "a[href=\"#id5\"]": "<figure class=\"align-default\" id=\"id5\">\n<img alt=\"\" src=\"_images/debug_toolkit_jumper_configuration.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 4 </span><span class=\"caption-text\"><span class=\"caption-text\">\nDebug Toolkit Jumper configuration for writing the USB-C PD configuration file.</span><a class=\"headerlink\" href=\"#id5\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>", "a[href=\"references.html#j9\"]": "<img alt=\"_images/job_tag_connect_plugged_scaled.png\" id=\"j9\" src=\"_images/job_tag_connect_plugged_scaled.png\"/>", "a[href=\"references.html#d3\"]": "<img alt=\"_images/D3_bottom.png\" id=\"d3\" src=\"_images/D3_bottom.png\"/>", "a[href=\"references.html#j6\"]": "<img alt=\"_images/J6_top.png\" id=\"j6\" src=\"_images/J6_top.png\"/>", "a[href=\"references.html#j3\"]": "<img alt=\"_images/J3_bottom.png\" id=\"j3\" src=\"_images/J3_bottom.png\"/>", "a[href=\"#id6\"]": "<figure class=\"align-default\" id=\"id6\">\n<img alt=\"\" src=\"_images/job_tag_connect_plugged.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 5 </span><span class=\"caption-text\"><span class=\"caption-text\">\nJetson Orin Baseboard with Tag-Connect plugged for PD controller flashing.</span><a class=\"headerlink\" href=\"#id6\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>", "a[href=\"references.html#j4\"]": "<img alt=\"_images/J4_top.png\" id=\"j4\" src=\"_images/J4_top.png\"/>"}
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
