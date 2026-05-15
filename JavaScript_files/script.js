const text = "Frontend Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(() => {
            document.getElementById("typing").innerHTML = "";
            index = 0;
            typeEffect();
        }, 1000);
    }
}

if (document.getElementById("typing")) {
    typeEffect();
}

function showDetails(id) {
    document.querySelectorAll(".details").forEach(d => {
        d.style.display = "none";
    });

    const element = document.getElementById(id);
    if (element) {
        element.style.display = "block";
    }
}

function showCertificates(tabId, event) {

    let containers =
        document.querySelectorAll('.certificate-container');

    let buttons =
        document.querySelectorAll('.tab-btn');

    containers.forEach(container => {
        container.classList.remove('active-tab');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document
        .getElementById(tabId)
        .classList.add('active-tab');

    event.target.classList.add('active');
}

function openModal(file) {

    document
        .getElementById('certificateModal')
        .style.display = 'flex';

    document
        .getElementById('certificateFrame')
        .src = file;
}

function closeModal() {

    document
        .getElementById('certificateModal')
        .style.display = 'none';

    document
        .getElementById('certificateFrame')
        .src = "";
}
if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "vy-QG46V9fkbBTTrW",
    });

}

const form = document.getElementById("contact-form");
const msg = document.getElementById("msg");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        msg.innerText = "Sending...";

        emailjs.sendForm(
            "service_2rysplo",
            "template_6xfktrg",
            this
        )
            .then(() => {

                msg.innerText = "Message Sent Successfully!";

                form.reset();

            })
            .catch(() => {

                msg.innerText = "Failed to Send Message";

            });

    });

}