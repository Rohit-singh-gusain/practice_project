document.addEventListener('DOMContentLoaded', function() {
    const modelSelect = document.getElementById('modelSelect');
    const carImage = document.getElementById('carImage');
    const carModel = document.getElementById('carModel');
    const carDescription = document.getElementById('carDescription');
    const carSpecs = document.getElementById('carSpecs');
    
    // Lamborghini models data with reliable image URLs
    const models = {
        aventador: {
            name: "Aventador SVJ",
            image: "https://cdn.motor1.com/images/mgl/7ZvGj/s1/lamborghini-aventador-ultimae.webp",
            description: "The Aventador SVJ represents the pinnacle of Lamborghini's V12 legacy, combining extraordinary performance with avant-garde design. With its naturally aspirated 6.5L V12 engine producing 759 horsepower, the SVJ accelerates from 0-100 km/h in just 2.8 seconds.",
            specs: [
                { name: "Engine", value: "6.5L V12" },
                { name: "Horsepower", value: "759 HP" },
                { name: "0-100 km/h", value: "2.8 seconds" },
                { name: "Top Speed", value: "350 km/h" },
                { name: "Torque", value: "531 lb-ft" },
                { name: "Transmission", value: "7-speed ISR" }
            ]
        },
        huracan: {
            name: "Huracán EVO",
            image: "https://cdn.motor1.com/images/mgl/7moR4/s1/lamborghini-huracan-evo.webp",
            description: "The Huracán EVO represents the evolution of the most successful V10-powered Lamborghini ever. Its 5.2L naturally aspirated V10 engine delivers 640 horsepower, with 0-100 km/h acceleration in 2.9 seconds.",
            specs: [
                { name: "Engine", value: "5.2L V10" },
                { name: "Horsepower", value: "640 HP" },
                { name: "0-100 km/h", value: "2.9 seconds" },
                { name: "Top Speed", value: "325 km/h" },
                { name: "Torque", value: "442 lb-ft" },
                { name: "Transmission", value: "7-speed dual-clutch" }
            ]
        },
        urus: {
            name: "Urus Performante",
            image: "https://cdn.motor1.com/images/mgl/0x2J3e/s1/lamborghini-urus-performante.webp",
            description: "The Urus Performante is the super SUV that redefines expectations, combining the soul of a super sports car with the functionality of an SUV. Its 4.0L twin-turbo V8 produces 666 horsepower, with 0-100 km/h in 3.3 seconds.",
            specs: [
                { name: "Engine", value: "4.0L Twin-Turbo V8" },
                { name: "Horsepower", value: "666 HP" },
                { name: "0-100 km/h", value: "3.3 seconds" },
                { name: "Top Speed", value: "306 km/h" },
                { name: "Torque", value: "627 lb-ft" },
                { name: "Transmission", value: "8-speed automatic" }
            ]
        }
    };
    
    // Function to update car details
    function updateCarDetails(model) {
        const modelData = models[model];
        
        carImage.src = modelData.image;
        carImage.alt = `Lamborghini ${modelData.name}`;
        carModel.textContent = `Lamborghini ${modelData.name}`;
        carDescription.textContent = modelData.description;
        
        // Update specs
        carSpecs.innerHTML = '';
        modelData.specs.forEach(spec => {
            const specItem = document.createElement('div');
            specItem.className = 'spec-item';
            specItem.innerHTML = `<h3>${spec.name}</h3><p>${spec.value}</p>`;
            carSpecs.appendChild(specItem);
        });
    }
    
    // Event listener for model selection
    modelSelect.addEventListener('change', function() {
        updateCarDetails(this.value);
    });
    
    // Initialize with first model
    updateCarDetails(modelSelect.value);
});