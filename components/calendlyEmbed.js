import React, { useEffect } from "react";

const CalendlyEmbed = () => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head.appendChild(script);
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/emerge-digital-rami/free-digital-discovery-emerge-digital?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0e0b0b&text_color=ffffff&primary_color=ed185c"
            style={ {
                minWidth: 400,
                height: 511,
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
            } }
        />
    );
};

export default CalendlyEmbed;
