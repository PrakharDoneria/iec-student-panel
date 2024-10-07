document.getElementById('studentForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const section = document.getElementById('section').value;
    const roll_number = document.getElementById('roll_number').value;
    const mobile_number = document.getElementById('mobile_number').value;

    const classNumber = year + section.toUpperCase();

    const studentData = [{
        name: name,
        class: classNumber,
        roll_number: roll_number,
        mobile_number: mobile_number
    }];

    try {
        const response = await fetch('https://iec-group-of-institutions.onrender.com/add_students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData)
        });

        const result = await response.json();
        if (response.ok) {
            Swal.fire({
                title: 'Success!',
                text: result.message || 'Student added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: result.error || 'Failed to add student.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Error adding student. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});

const images = ['assets/bg1.jpg', 'assets/bg2.jpg', 'assets/bg3.jpg'];

let currentIndex = Math.floor(Math.random() * images.length);
const backgroundDiv = document.querySelector('.background');

function changeBackgroundImage() {
    backgroundDiv.style.opacity = '0'; 
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        backgroundDiv.style.backgroundImage = `url(${images[currentIndex]})`;
        backgroundDiv.style.opacity = '1';
    }, 1500); 
}

backgroundDiv.style.backgroundImage = `url(${images[currentIndex]})`;

setInterval(changeBackgroundImage, 3000);
