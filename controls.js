let controls = {
    "preview" : {
        "background-color" : null,
        "text-color" : null,
    },
    "scrollbar" : {
        "width" : {
            "box" : null,
            "range" : null,
        },
        "height" : {
            "box" : null,
            "range" : null,
        },
    },
    "scrollbar-track" : {
        "background-color" : {
            "box" : null,
            "alpha" : {
                "box" : null,
                "range" : null,
            },
        },
        "border-radius" : {
            "box" : null,
            "range" : null,
        },
    },
    "scrollbar-corner" : {
        "background-color" : {
            "box" : null,
            "alpha" : {
                "box" : null,
                "range" : null,
            },
        },
        "border-radius" : {
            "box" : null,
            "range" : null,
        },
    },
    "scrollbar-thumb" : {
        "background-color" : {
            "box" : null,
            "alpha" : {
                "box" : null,
                "range" : null,
            },
        },
        "background-clip" : null,
        "border-radius" : {
            "box" : null,
            "range" : null,
        },
        "border" : {
            "width" : {
                "box" : null,
                "range" : null,
            },
            "style" : null,
            "color" : {
                "box" : null,
                "alpha" : {
                    "box" : null,
                    "range" : null,
                },
            },
        },
    },
    "scrollbar-thumb:hover" : {
        "background-color" : null,
    },
    "scrollbar-thumb:active" : {
        "background-color" : null,
    },
};

sl.onAllLoaded(() => {
    
    controls.preview["background-color"] = qs("#preview-background-input");
    on(controls.preview["background-color"], "input", function () {
        qs("#preview-card").style.setProperty("--preview-bg", this.value);
    });
    
    controls.preview["text-color"] = qs("#preview-text-color-input");
    on(controls.preview["text-color"], "input", function () {
        qs("#preview-card").style.setProperty("--preview-text-color", this.value);
    });
    
    
    controls.scrollbar.width.box   = qs("#scrollbar-width-input");
    controls.scrollbar.width.range = qs("#scrollbar-width-range");
    syncNumberInputAndRange(controls.scrollbar.width.box, controls.scrollbar.width.range);
    on([controls.scrollbar.width.box, controls.scrollbar.width.range], "input", function () {
        if (!["", NaN].includes(this.value)) {
            css.scrollbar.width = this.value + "px";
        }
    });
    
    controls.scrollbar.height.box   = qs("#scrollbar-height-input");
    controls.scrollbar.height.range = qs("#scrollbar-height-range");
    syncNumberInputAndRange(controls.scrollbar.height.box, controls.scrollbar.height.range);
    on([controls.scrollbar.height.box, controls.scrollbar.height.range], "input", function () {
        if (!["", NaN].includes(this.value)) {
            css.scrollbar.height = this.value + "px";
        }
    });
    
    
    controls["scrollbar-track"]["background-color"].box         = qs("#track-background-input");
    controls["scrollbar-track"]["background-color"].alpha.box   = qs("#track-background-alpha-input");
    controls["scrollbar-track"]["background-color"].alpha.range = qs("#track-background-alpha-range");
    on(controls["scrollbar-track"]["background-color"].box, "input", function () {
        css["scrollbar-track"]["background-color"] = getBackground(
            controls["scrollbar-track"]["background-color"].box,
            controls["scrollbar-track"]["background-color"].alpha.box,
        );
    });
    syncNumberInputAndRange(
        controls["scrollbar-track"]["background-color"].alpha.box,
        controls["scrollbar-track"]["background-color"].alpha.range,
    );
    on(controls["scrollbar-track"]["background-color"].alpha.box, "input", () => {
        css["scrollbar-track"]["background-color"] = getBackground(
            controls["scrollbar-track"]["background-color"].box,
            controls["scrollbar-track"]["background-color"].alpha.box,
        );
    });
    on(controls["scrollbar-track"]["background-color"].alpha.range, "input", () => {
        css["scrollbar-track"]["background-color"] = getBackground(
            controls["scrollbar-track"]["background-color"].box,
            controls["scrollbar-track"]["background-color"].alpha.box,
        );
    });
    
    controls["scrollbar-track"]["border-radius"].box   = qs("#track-radius-input");
    controls["scrollbar-track"]["border-radius"].range = qs("#track-radius-range");
    on([
        controls["scrollbar-track"]["border-radius"].box,
        controls["scrollbar-track"]["border-radius"].range,
    ], "input", function () {
        if (!["", NaN].includes(this.value)) {
            css["scrollbar-track"]["border-radius"] = this.value + "px";
        }
    });
    syncNumberInputAndRange(
        controls["scrollbar-track"]["border-radius"].box,
        controls["scrollbar-track"]["border-radius"].range,
    );
    
    
    controls["scrollbar-corner"]["background-color"].box         = qs("#corner-background-input");
    controls["scrollbar-corner"]["background-color"].alpha.box   = qs("#corner-background-alpha-input");
    controls["scrollbar-corner"]["background-color"].alpha.range = qs("#corner-background-alpha-range");
    syncNumberInputAndRange(
        controls["scrollbar-corner"]["background-color"].alpha.box,
        controls["scrollbar-corner"]["background-color"].alpha.range,
    );
    on(controls["scrollbar-corner"]["background-color"].box, "input", function () {
        css["scrollbar-corner"]["background-color"] = getBackground(
            controls["scrollbar-corner"]["background-color"].box,
            controls["scrollbar-corner"]["background-color"].alpha.box,
        );
    });
    on(controls["scrollbar-corner"]["background-color"].alpha.box, "input", () => {
        css["scrollbar-corner"]["background-color"] = getBackground(
            controls["scrollbar-corner"]["background-color"].box,
            controls["scrollbar-corner"]["background-color"].alpha.box,
        );
    });
    on(controls["scrollbar-corner"]["background-color"].alpha.range, "input", () => {
        css["scrollbar-corner"]["background-color"] = getBackground(
            controls["scrollbar-corner"]["background-color"].box,
            controls["scrollbar-corner"]["background-color"].alpha.box,
        );
    });
    
    controls["scrollbar-corner"]["border-radius"].box   = qs("#corner-radius-input");
    controls["scrollbar-corner"]["border-radius"].range = qs("#corner-radius-range");
    on([
        controls["scrollbar-corner"]["border-radius"].box,
        controls["scrollbar-corner"]["border-radius"].range,
    ], "input", function () {
        if (!["", NaN].includes(this.value)) {
            css["scrollbar-corner"]["border-radius"] = this.value + "px";
        }
    });
    syncNumberInputAndRange(
        controls["scrollbar-corner"]["border-radius"].box,
        controls["scrollbar-corner"]["border-radius"].range,
    );
    
    
    controls["scrollbar-thumb"]["background-color"].box         = qs("#thumb-background-input");
    controls["scrollbar-thumb"]["background-color"].alpha.box   = qs("#thumb-background-alpha-input");
    controls["scrollbar-thumb"]["background-color"].alpha.range = qs("#thumb-background-alpha-range");
    syncNumberInputAndRange(
        controls["scrollbar-thumb"]["background-color"].alpha.box,
        controls["scrollbar-thumb"]["background-color"].alpha.range,
    );
    on(controls["scrollbar-thumb"]["background-color"].box, "input", function () {
        css["scrollbar-thumb"]["background-color"] = getBackground(
            controls["scrollbar-thumb"]["background-color"].box,
            controls["scrollbar-thumb"]["background-color"].alpha.box,
        );
    });
    on(controls["scrollbar-thumb"]["background-color"].alpha.box, "input", () => {
        css["scrollbar-thumb"]["background-color"] = getBackground(
            controls["scrollbar-thumb"]["background-color"].box,
            controls["scrollbar-thumb"]["background-color"].alpha.box,
        );
    });
    on(controls["scrollbar-thumb"]["background-color"].alpha.range, "input", () => {
        css["scrollbar-thumb"]["background-color"] = getBackground(
            controls["scrollbar-thumb"]["background-color"].box,
            controls["scrollbar-thumb"]["background-color"].alpha.box,
        );
    });
    
    controls["scrollbar-thumb"]["border-radius"].box   = qs("#thumb-radius-input");
    controls["scrollbar-thumb"]["border-radius"].range = qs("#thumb-radius-range");
    on([
        controls["scrollbar-thumb"]["border-radius"].box,
        controls["scrollbar-thumb"]["border-radius"].range,
    ], "input", function () {
        if (!["", NaN].includes(this.value)) {
            css["scrollbar-thumb"]["border-radius"] = this.value + "px";
        }
    });
    syncNumberInputAndRange(
        controls["scrollbar-thumb"]["border-radius"].box,
        controls["scrollbar-thumb"]["border-radius"].range,
    );
    
    controls["scrollbar-thumb"]["border"]["width"].box   = qs("#thumb-border-width-input");
    controls["scrollbar-thumb"]["border"]["width"].range = qs("#thumb-border-width-range");
    on([
        controls["scrollbar-thumb"]["border"]["width"].box,
        controls["scrollbar-thumb"]["border"]["width"].range,
    ], "input", function () {
        if (!["", NaN].includes(this.value)) {
            css["scrollbar-thumb"]["border"]["width"] = this.value + "px";
        }
    });
    syncNumberInputAndRange(
        controls["scrollbar-thumb"]["border"]["width"].box,
        controls["scrollbar-thumb"]["border"]["width"].range,
    );
    
    controls["scrollbar-thumb"]["border"]["style"] = qs("#thumb-border-style-select");
    on([
        controls["scrollbar-thumb"]["border"]["style"],
    ], "input", function () {
        css["scrollbar-thumb"]["border"]["style"] = this.value;
    });
    
    controls["scrollbar-thumb"]["border"]["color"].box         = qs("#thumb-border-color-input");
    controls["scrollbar-thumb"]["border"]["color"].alpha.box   = qs("#thumb-border-color-alpha-input");
    controls["scrollbar-thumb"]["border"]["color"].alpha.range = qs("#thumb-border-color-alpha-range");
    syncNumberInputAndRange(
        controls["scrollbar-thumb"]["border"]["color"].alpha.box,
        controls["scrollbar-thumb"]["border"]["color"].alpha.range,
    );
    on(controls["scrollbar-thumb"]["border"]["color"].box, "input", function () {
        css["scrollbar-thumb"]["border"]["color"] = getBackground(
            controls["scrollbar-thumb"]["border"]["color"].box,
            controls["scrollbar-thumb"]["border"]["color"].alpha.box,
        );
    });
    on(controls["scrollbar-thumb"]["border"]["color"].alpha.box, "input", () => {
        css["scrollbar-thumb"]["border"]["color"] = getBackground(
            controls["scrollbar-thumb"]["border"]["color"].box,
            controls["scrollbar-thumb"]["border"]["color"].alpha.box,
        );
    });
    on(controls["scrollbar-thumb"]["border"]["color"].alpha.range, "input", () => {
        css["scrollbar-thumb"]["border"]["color"] = getBackground(
            controls["scrollbar-thumb"]["border"]["color"].box,
            controls["scrollbar-thumb"]["border"]["color"].alpha.box,
        );
    });
    
    controls["scrollbar-thumb"]["background-clip"] = qs("#thumb-background-clip-select");
    on([
        controls["scrollbar-thumb"]["background-clip"],
    ], "input", function () {
        css["scrollbar-thumb"]["background-clip"] = this.value;
    });
    
    
    on([
        controls.scrollbar.width.box,
        controls.scrollbar.width.range,
        
        controls.scrollbar.height.box,
        controls.scrollbar.height.range,
        
        controls["scrollbar-track"]["background-color"].box,
        controls["scrollbar-track"]["background-color"].alpha.box,
        controls["scrollbar-track"]["background-color"].alpha.range,
        
        controls["scrollbar-track"]["border-radius"].box,
        controls["scrollbar-track"]["border-radius"].range,
        
        controls["scrollbar-corner"]["background-color"].box,
        controls["scrollbar-corner"]["background-color"].alpha.box,
        controls["scrollbar-corner"]["background-color"].alpha.range,
        
        controls["scrollbar-corner"]["border-radius"].box,
        controls["scrollbar-corner"]["border-radius"].range,
        
        controls["scrollbar-thumb"]["background-color"].box,
        controls["scrollbar-thumb"]["background-color"].alpha.box,
        controls["scrollbar-thumb"]["background-color"].alpha.range,
        
        controls["scrollbar-thumb"]["border-radius"].box,
        controls["scrollbar-thumb"]["border-radius"].range,
        
        controls["scrollbar-thumb"]["border"]["width"].box,
        controls["scrollbar-thumb"]["border"]["width"].range,
        
        controls["scrollbar-thumb"]["border"]["style"],
        
        controls["scrollbar-thumb"]["border"]["color"].box,
        controls["scrollbar-thumb"]["border"]["color"].alpha.box,
        controls["scrollbar-thumb"]["border"]["color"].alpha.range,
        
        controls["scrollbar-thumb"]["background-clip"],
        
        qs("#css-selector"),
        
    ], "input", function () {
        applyCSS();
        outputCSS();
    });
    
});

function outputCSS() {
    let cssOutput = qs("#css-output");
    let cssSelector = qs("#css-selector");
    cssOutput.textContent = generateCSSText(cssSelector.value);
    hljs.highlightAll();
}
