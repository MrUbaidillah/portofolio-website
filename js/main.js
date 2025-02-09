// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
  
    if (burger && navLists) {
      burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
      });
    } else {
      console.error("Burger menu or navigation list not found!");
    }
  };
  
  navSlide();
  
  // Clear form before unload
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const responseMessage = document.getElementById("response-message");
  
    if (!form) {
      console.error("Form not found!");
      return;
    }
  
    if (!responseMessage) {
      console.error("Element #response-message not found!");
      return;
    }
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Mencegah halaman refresh setelah submit
  
      // Ambil nilai input form
      const name = document.querySelector("input[name='name']").value;
      const email = document.querySelector("input[name='email']").value;
      const message = document.querySelector("textarea[name='message']").value;
  
      // Data untuk dikirim ke API
      const formData = {
        to: "mr.ubaidillah120@gmail.com", // Hardcoded email tujuan
        name: name,
        subject: "Permintaan Kerja Sama",
        text: message,
      };
  
      try {
        // Kirim request ke API
        const response = await fetch("https://lumoshive-academy-email-api.vercel.app/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "0540540540540540540540540540540540540540540540540540540540540540",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          responseMessage.innerText = "Message successfully sent!";
          responseMessage.style.color = "#5174e8";
          form.reset();
        } else {
          throw new Error(result.message || "Failed to send message.");
        }
      } catch (error) {
        responseMessage.innerText = "An error occurred: " + error.message;
        responseMessage.style.color = "#f17474";
      }
    });
  });
  