const f_name = document.querySelector("#f-name");
const email = document.querySelector("#f-email");
const phone = document.querySelector("#f-phone");
const message = document.querySelector("#f-message");
const button = document.querySelector("#f-button");

function sendToWhatsapp(name, email, phone, message) {
   const text = `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;
   const textCodified = encodeURIComponent(text);
   const whatsappNumber = "5581996852057";
   const url = `https://wa.me/${whatsappNumber}?text=${textCodified}`;

   window.open(url, "_blank");
}

function validateForm() {
   if (f_name.value && email.value && phone.value && message.value) {
      sendToWhatsapp(f_name.value, email.value, phone.value, message.value);
   }
}

button.addEventListener("click", validateForm);
