document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_8zf1f6x", "template_kou8urm", this)
      .then(() => alert("Mensagem enviada com sucesso!"))
      .catch((error) => alert("Erro ao enviar: " + error));
  });

