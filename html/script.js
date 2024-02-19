$(function () {
    function Notify(type, title, message, time, pos, sound) {
        type = type.toLowerCase();

        if (!sound) sound = false;
        if (!pos) pos = "top-left";
        if (!time) time = 5000;

        const container = $("<div>").addClass("notify");
        const typeName = $('<div>').addClass("type-name").text(type);
        const header = $("<div>").addClass("header").html(`<i class="fa-solid ${GetIcon(type)}"></i><span>${title}</span>`);
        const msg = $("<div>").addClass("message").html(`<p>${message}</p>`);
        const dots = $("<div>").addClass("dots");
        const dot1 = $("<div>").addClass("dot");
        const dot2 = $("<div>").addClass("dot");
        const dot3 = $("<div>").addClass("dot");
        const Audio = $('<audio>')
        const AudioSRC = $('<source>').attr({
            'src': 'sounds/sound.mp3',
            'type': 'audio/mpeg'
        })
        AudioSRC.volume = .5
        Audio.append(AudioSRC);

        $(container).css(`--MainColor`, `var(--${type})`)

        dots.append(dot1, dot2, dot3);

        if (sound) {
            Audio[0].play();
        }

        container.append(typeName, header, msg, dots, Audio);

        $(`.${pos}`).append(container);
        setTimeout(function () {
            container.css('animation', `hideNotifiction${pos.split("-")[1].charAt(0).toUpperCase() + pos.split("-")[1].slice(1)} .3s`)
            setTimeout(function () {
                container.remove()
            }, 250);
        }, time);
    }

    const GetIcon = (type) => {
        switch (type) {
            case "success":
                return "fa-check";
            case "error":
                return "fa-exclamation";
            case "info":
                return "fa-info";
            case "warning":
                return "fa-triangle-exclamation";
        }
    };


    window.addEventListener("message", (e) => {
        if (e.data.action === 'notify') {
            Notify(e.data.type, e.data.title, e.data.message, e.data.time, e.data.postion, e.data.sound)
        }
    })
});
