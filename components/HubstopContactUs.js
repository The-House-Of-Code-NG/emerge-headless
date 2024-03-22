import {useEffect} from "react";

export const HubstopContactUs = () => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://js.hsforms.net/forms/embed/v2.js"
        );
        head.appendChild(script);

        script.addEventListener("load", () => {
            if(window.hbspt) {
                hbspt.forms.create({
                    region: "na1",
                    portalId: "7177031",
                    formId: "0f04c3a4-94a0-4a0b-9d17-e135e64e0ab3",
                    target: 'contact-us'
                });
            }
        })
    }, []);

    return (
        <div className="w-full h-full">
            <div id="contact-us" />
        </div>
    )
}
