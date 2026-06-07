// навигация-кружочки
const dots = document.querySelectorAll('.dot');
const sections = {
    hero: document.getElementById('hero'),
    features: document.getElementById('features'),
    docs: document.getElementById('docs')
};

// добавляем подсказки
const titles = { hero: 'Главная', features: 'Возможности', docs: 'Документация' };
dots.forEach(dot => {
    const section = dot.dataset.section;
    if (section && titles[section]) {
        dot.setAttribute('data-title', titles[section]);
    }
});

// клик по кружочку — скролл
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const sectionId = dot.dataset.section;
        if (sectionId && sections[sectionId]) {
            sections[sectionId].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// обновление активного кружочка при скролле
function updateActiveDot() {
    const scrollPos = window.scrollY + 150;
    let active = 'hero';
    
    if (sections.docs && sections.docs.offsetTop <= scrollPos) {
        active = 'docs';
    } else if (sections.features && sections.features.offsetTop <= scrollPos) {
        active = 'features';
    } else {
        active = 'hero';
    }
    
    dots.forEach(dot => {
        if (dot.dataset.section === active) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveDot);
window.addEventListener('resize', updateActiveDot);
updateActiveDot();

//КЛЯНУСЬ JS НАВАЙБКОДИЛ