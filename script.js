document.addEventListener("DOMContentLoaded", function() {
    const handlePersonalInfoFormSubmit = function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        guardarDatosEnJSON(jsonData);
    };

    const handleFamilyFormSubmit = function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        guardarDatosEnJSON(jsonData);
    };

    const handleHealthConditionsFormSubmit = function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const jsonData = {};

        formData.forEach((value, key) => {
            if (key !== 'diabetes' && key !== 'hipertension' && key !== 'epulmonar') {
                jsonData[key] = value;
            } else {
                jsonData[key] = formData.has(key);
            }
        });

        guardarDatosEnJSON(jsonData);
    };

    const handleHospitalizationFormSubmit = function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        guardarDatosEnJSON(jsonData);
    };

    const personalInfoForm = document.getElementById('personal-info-form');
    personalInfoForm.addEventListener('submit', handlePersonalInfoFormSubmit);

    const familyForm = document.getElementById('family-form');
    familyForm.addEventListener('submit', handleFamilyFormSubmit);

    const healthConditionsForm = document.getElementById('health-conditions-form');
    healthConditionsForm.addEventListener('submit', handleHealthConditionsFormSubmit);

    const hospitalizationForm = document.getElementById('hospitalization-form');
    hospitalizationForm.addEventListener('submit', handleHospitalizationFormSubmit);
});

function guardarDatosEnJSON(datos) {
    let existingData = sessionStorage.getItem('storedData');
    existingData = existingData ? JSON.parse(existingData) : [];

    existingData.push(datos);

    sessionStorage.setItem('storedData', JSON.stringify(existingData));
}