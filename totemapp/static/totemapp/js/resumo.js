const cursos = {
    'autocad': {
        titulo: 'AutoCAD 2D aplicado a Construção Civil',
        descricao: 'O Curso de Aperfeiçoamento Profissional AutoCAD 2D aplicado a Construção Civil tem por objetivo o desenvolvimento de competências relativas à elaboração de desenhos técnicos de Construção Civil, utilizando software AutoCAD, na plataforma 2D, de acordo com as normas técnicas e representações normalizadas.',
        cargaHoraria: '48 horas',
        programacao: ['Desenho assistido por computador', 'Interface do programa', 'Edição', 'Teste', 'Teste', 'Teste', 'Teste'],
        requisitos: ['Conhecimentos básicos de informática', 'Noções de desenho técnico']
    },
    'outroCurso': {
        titulo: 'Alimentos Funcionais',
        descricao: 'O curso de Aperfeiçoamento Profissional de Alimentos Funcionais tem por objetivo o desenvolvimento de capacidades relativas ao aperfeiçoamento de acadêmicos, docentes, pesquisadores, profissionais das indústrias da área de alimentos e o público no geral sobre alimentos funcionais, bem como sobre as substâncias bioativas contidas nestes alimentos, visando sua aplicação na indústria de alimentos, de acordo com os seus requisitos legais.',
        cargaHoraria: '20 horas',
        programacao: ['Conteúdo do curso 1', 'Conteúdo do curso 2'],
        requisitos: ['Requisito 1', 'Requisito 2']
    }
};

// Variável para armazenar o event listener do acordeão
let accordionEventListener;

// Função para abrir o modal e preencher o conteúdo
function abrirModal(cursoId) {
    const curso = cursos[cursoId];

    // Atualiza o conteúdo do modal
    document.getElementById('modal-titulo').innerText = curso.titulo;
    document.getElementById('modal-descricao').innerText = curso.descricao;
    document.getElementById('modal-carga').innerText = 'CARGA HORÁRIA: ' + curso.cargaHoraria;

    // Armazena o cursoId nos botões dos acordeões
    const programacaoButton = document.querySelector('#flush-headingOne .accordion-button');
    const requisitosButton = document.querySelector('#flush-headingTwo .accordion-button');
    programacaoButton.dataset.cursoId = cursoId;
    requisitosButton.dataset.cursoId = cursoId;

    // Remove os event listeners anteriores dos acordeões (apenas do conteúdo interno)
    const accordionFlushExample = document.getElementById('accordionFlushExample');
    const accordionContent = accordionFlushExample.innerHTML;
    accordionFlushExample.innerHTML = accordionContent;

    // Abre o modal
    const modal = document.getElementById('modalResumo');
    modal.style.display = 'flex';
    setTimeout(function() {
        modal.classList.add('open');
    }, 10);

    // Adiciona o event listener ao botão "Fechar"
    const modalCloseButton = document.getElementById('modal-close');
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', function() {
            fecharModal('modalResumo');
        });
    }

    // Preenche o conteúdo dos acordeões imediatamente ao abrir o modal
    preencherConteudoAcordeao(cursoId, 'flush-collapseOne', 'modal-programacao', 'programacao');
    preencherConteudoAcordeao(cursoId, 'flush-collapseTwo', 'modal-requisitos', 'requisitos');

}

// Função para preencher o conteúdo de um acordeão
function preencherConteudoAcordeao(cursoId, collapseId, contentId, dataKey) {
    const curso = cursos[cursoId];
    const contentDiv = document.getElementById(contentId);
    contentDiv.innerHTML = '<ul>' + curso[dataKey].map(item => `<li>${item}</li>`).join('') + '</ul>';
}

// Função para fechar o modal (adaptada para receber o ID do modal)
function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('open');
    setTimeout(function() {
        modal.style.display = 'none';
    }, 300);
}

// Adiciona listeners de evento aos botões "Saiba mais"
document.querySelectorAll('.saiba-mais').forEach(function(button) {
    button.addEventListener('click', function() {
        const cursoId = this.getAttribute('data-id');
        abrirModal(cursoId);
    });
});

// Seleciona todos os botões "Estou interessado"
const botoesInteressado = document.querySelectorAll('.interessado');

// Adiciona um event listener a cada botão "Estou interessado"
botoesInteressado.forEach(botao => {
    botao.addEventListener('click', function() {
        const modal = document.getElementById('modalInteressado');
        modal.style.display = 'flex';
        setTimeout(function() {
            modal.classList.add('open');
        }, 10);
    });
});


// Adiciona listeners de evento para fechar os modais ao clicar fora
window.addEventListener('click', function(event) {
    const modalResumo = document.getElementById('modalResumo');
    const modalInteressado = document.getElementById('modalInteressado');

    if (event.target === modalResumo) {
        fecharModal('modalResumo');
    } else if (event.target === modalInteressado) {
        fecharModal('modalInteressado');
    }
});

// Adiciona listeners de evento para os botões de fechar (X)
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const modalId = this.closest('.modal').id;
        fecharModal(modalId);
    });
});


// Acordeão para Programação e Requisitos
document.getElementById('accordionFlushExample').addEventListener('shown.bs.collapse', function(event) {
    const accordionCollapse = event.target;
    const button = accordionCollapse.previousElementSibling.querySelector('.accordion-button');

    // Obtém o cursoId do atributo de dados do botão do acordeão
    const cursoId = button.dataset.cursoId || 'autocad'; // Use um valor padrão se não encontrar o atributo
    const curso = cursos[cursoId];

    // Atualiza a programação ou os requisitos, dependendo do acordeão aberto
    if (accordionCollapse.id === 'flush-collapseOne') {
        const programacaoDiv = document.getElementById('modal-programacao');
        programacaoDiv.innerHTML = '<ul>' + curso.programacao.map(item => `<li>${item}</li>`).join('') + '</ul>';
    } else if (accordionCollapse.id === 'flush-collapseTwo') {
        const requisitosDiv = document.getElementById('modal-requisitos');
        requisitosDiv.innerHTML = '<ul>' + curso.requisitos.map(item => `<li>${item}</li>`).join('') + '</ul>';
    }
});



// Seleciona os modais e o botão de fechar
const modalConfirmacao = document.getElementById("modalConfirmacao");
const modalInteressado = document.getElementById("modalInteressado");
const closeModalBtn = document.querySelector(".close-modal");

// Seleciona o formulário
const form = document.querySelector("form");

// Função para abrir o modal de confirmação ao clicar no botão "Enviar"
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Abre o modal de confirmação
    modalConfirmacao.classList.add('open');

    // Fecha o modal de "Estou Interessado"
    modalInteressado.classList.remove('open');

    // Limpa os campos do formulário
    form.reset();
});

// Função para fechar o modal de confirmação ao clicar no X
closeModalBtn.addEventListener("click", function() {
    // Fecha o modal de confirmação
    modalConfirmacao.classList.remove('open');

    // Fecha também o modal de interesse caso ele ainda esteja aberto
    modalInteressado.classList.remove('open');
});

// Adiciona event listeners aos botões "Estou interessado"
document.querySelectorAll('.interessado').forEach(botao => {
    botao.addEventListener('click', function() {
        // Abre o modal "Estou Interessado"
        modalInteressado.classList.add('open');
    });
});

// Adiciona listeners de evento para fechar os modais ao clicar fora
window.addEventListener('click', function(event) {
    if (event.target === modalInteressado) {
        modalInteressado.classList.remove('open');
    }
    if (event.target === modalConfirmacao) {
        modalConfirmacao.classList.remove('open');
    }
});

// Adiciona listeners de evento para os botões de fechar (X) de outros modais
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const modalId = this.closest('.modal').id;
        document.getElementById(modalId).classList.remove('open');
    });
});



// Função para animar o dropdown
document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', function () {
        const currentMenu = this.nextElementSibling; // Pega o dropdown correspondente ao botão

        // Fecha todos os dropdowns antes de abrir o selecionado
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== currentMenu) {
                menu.style.height = '0'; // Fecha todos os outros dropdowns
            }
        });

        // Verifica se o dropdown atual está aberto ou fechado
        if (currentMenu.style.height && currentMenu.style.height !== '0px') {
            // Fechar o menu atual
            currentMenu.style.height = `${currentMenu.scrollHeight}px`; // Define a altura antes de colapsar
            setTimeout(() => {
                currentMenu.style.height = '0'; // Anima o fechamento
            }, 10);
        } else {
            // Abrir o menu atual
            currentMenu.style.height = '0'; // Inicializa em 0 para a animação
            setTimeout(() => {
                currentMenu.style.height = `${currentMenu.scrollHeight}px`; // Anima a abertura
            }, 10);
        }
    });
});