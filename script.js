const pageContent = document.getElementById('page-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.querySelector('.progress');

let currentPage = 0;
const pages = [
    '# Experiência profissional e expertises: Ao longo dos últimos dez anos, tive a oportunidade de trabalhar em diversas empresas, desenvolvendo e implementando sistemas de informação para melhorar processos e otimizar o desempenho das equipes. Minha principal expertise está na análise de requisitos, no design de sistemas e na programação, utilizando diversas linguagens como JavaScript, Java, Python e PL/SQL. Além disso, possuo experiência em integração de sistemas e análise de dados.',
    '# Interesses para evolução no atendimento de serviços: Continuar me desenvolvendo profissionalmente, buscando sempre novas tecnologias e metodologias que possam contribuir para a evolução dos serviços que presto. Estou sempre atento às tendências do mercado e às necessidades dos clientes, buscando formas inovadoras de atender às demandas e superar as expectativas.',
    '# Em resumo, estou comprometido em oferecer soluções inovadoras e eficientes para os desafios de nossos clientes, buscando sempre a excelência e a satisfação dos mesmos. Estou sempre em busca de novas formas de evoluir e aprimorar meu trabalho, garantindo que possamos atender às demandas do mercado de forma eficaz e eficiente.',
];

function updatePage() {
    pageContent.textContent = pages[currentPage];
    progressBar.style.width = `${(currentPage / (pages.length - 1)) * 100}%`;
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
});

// Alternar tema
const body = document.body;
const themeToggle = document.getElementById('toggle-theme');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '🌙':'☀️' ;
});