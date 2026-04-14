// Navigation Function
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    const target = document.getElementById(sectionId);
    if(target) target.classList.add('active');

    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
        const icon = li.querySelector('.fa-chevron-right');
        if(icon) icon.remove();
    });

    const activeBtn = document.getElementById('btn-' + sectionId);
    if(activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.innerHTML += ' <i class="fas fa-chevron-right"></i>';
    }
}

// Modal Functions
function openModal(imgSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("fullCertImage");
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}