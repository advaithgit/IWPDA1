document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("profileForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get all form elements that are required
        const requiredElements = form.querySelectorAll("[required]");

        let isValid = true;

        requiredElements.forEach(function (element) {
            const parentDiv = element.closest('.col-md-6') || element.closest('.col-12');
            let errorDiv = parentDiv.querySelector('.custom-error');
            
            // If there's already an error message, remove it
            if (errorDiv) {
                errorDiv.remove();
            }

            if (!element.value) {
                isValid = false;
                errorDiv = document.createElement('div');
                errorDiv.className = 'custom-error';
                errorDiv.style.color = 'red';
                errorDiv.style.marginTop = '5px';
                errorDiv.textContent = "Please fill out this field.";

                parentDiv.appendChild(errorDiv);
                element.classList.add("is-invalid");
            } else {
                element.classList.remove("is-invalid");
            }
        });

        // If the form is valid, you can submit it or do further processing
        if (isValid) {
            alert("Form submitted successfully!");
            // form.submit(); // Uncomment this line to submit the form
        }
    });
});