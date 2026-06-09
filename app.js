// ===== CONFIGURAÇÕES E DADOS INICIAIS =====
const METAS_ESTUDOS = {
    fase1: { nome: "Fase 1 — Python", meta: 52, atuais: 2.5 },
    fase2: { nome: "Fase 2 — DS Core", meta: 108, atuais: 0 },
    fase3: { nome: "Fase 3 — Machine Learning", meta: 42, atuais: 0 },
    fase4: { nome: "Fase 4 — Sprint Final", meta: 60, atuais: 0 }
};

const ROTINA_SEMANAL = [
    { id: 'seg', dia: "Segunda-feira", treino: "🛌 Descanso / Ergométrica (opcional)" },
    { id: 'ter', dia: "Terça-feira", treino: "🏋️ Treino D — Quadríceps" },
    { id: 'qua', dia: "Quarta-feira", treino: "🏋️ Treino E — Costas e Bíceps" },
    { id: 'qui', dia: "Quinta-feira", treino: "🧘 Pilates (7:00h)" },
    { id: 'sex', dia: "Sexta-feira", treino: "🏋️ Treino F — Glúteo" },
    { id: 'sab', dia: "Sábado", treino: "🏋️ Treino C — Cardio & Core" },
    { id: 'dom', dia: "Domingo", treino: "🚴 Bike (Cedo)" }
];

let appData = {
    estudos: { ...METAS_ESTUDOS },
    treinos: { seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false }
};

// ===== NAVEGAÇÃO DE PÁGINAS =====
function changePage(pageId) {
    // Esconder todas as páginas
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
    // Mostrar a página selecionada
    document.getElementById(`page-${pageId}`).classList.add('active');

    // Atualizar estilo do menu
    document.querySelectorAll('aside nav button').forEach(btn => {
        btn.classList.remove('bg-slate-100', 'text-slate-900');
        btn.classList.add('text-slate-500');
    });
    const activeBtn = document.getElementById(`nav-${pageId}`);
    activeBtn.classList.remove('text-slate-500');
    activeBtn.classList.add('bg-slate-100', 'text-slate-900');

    renderUI(); // Atualiza os dados sempre que muda de página
}

// ===== LÓGICA DE DADOS (LOCAL STORAGE) =====
function loadData() {
    const saved = localStorage.getItem('luizaTrackerData');
    if (saved) {
        appData = JSON.parse(saved);
    }
    renderUI();
}

function saveData() {
    localStorage.setItem('luizaTrackerData', JSON.stringify(appData));
    renderUI();
}

// ===== ESTUDOS =====
function adicionarHorasEstudo() {
    const fase = document.getElementById('select-fase').value;
    const horas = parseFloat(document.getElementById('input-horas').value);
    
    if (!isNaN(horas) && horas > 0) {
        appData.estudos[fase].atuais += horas;
        document.getElementById('input-horas').value = '';
        saveData();
    }
}

function renderEstudos() {
    const container = document.getElementById('lista-fases');
    container.innerHTML = '';
    
    let totalHoras = 0;
    const totalMeta = 262;

    Object.keys(appData.estudos).forEach(key => {
        const fase = appData.estudos[key];
        totalHoras += fase.atuais;
        const percent = Math.min((fase.atuais / fase.meta) * 100, 100).toFixed(1);

        container.innerHTML += `
            <div class="border border-slate-100 rounded-xl p-5 bg-white">
                <div class="flex justify-between items-center mb-2">
                    <h4 class="font-medium text-sm text-slate-800">${fase.nome}</h4>
                    <span class="text-xs font-medium text-slate-500">${fase.atuais}h / ${fase.meta}h</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-1.5">
                    <div class="bg-blue-500 h-1.5 rounded-full" style="width: ${percent}%"></div>
                </div>
            </div>
        `;
    });

    // Atualiza Dashboard
    document.getElementById('dash-total-horas').innerText = totalHoras.toFixed(1);
    const dashPercent = (totalHoras / totalMeta) * 100;
    setTimeout(() => {
        document.getElementById('dash-progress-estudos').style.width = `${Math.min(dashPercent, 100)}%`;
    }, 100);
}

// ===== TREINOS =====
function toggleTreino(id) {
    appData.treinos[id] = !appData.treinos[id];
    saveData();
}

function resetTreinos() {
    if(confirm('Limpar todos os registos de treinos desta semana?')) {
        Object.keys(appData.treinos).forEach(k => appData.treinos[k] = false);
        saveData();
    }
}

function renderTreinos() {
    const container = document.getElementById('workout-list');
    container.innerHTML = '';
    
    let concluidos = 0;

    ROTINA_SEMANAL.forEach(item => {
        const isFeito = appData.treinos[item.id];
        if(isFeito) concluidos++;

        container.innerHTML += `
            <div class="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors cursor-pointer" onclick="toggleTreino('${item.id}')">
                <div class="flex items-center gap-4">
                    <div class="w-6 h-6 rounded border ${isFeito ? 'bg-emerald-500 border-emerald-500 flex items-center justify-center text-white' : 'border-slate-300 bg-white'}">
                        ${isFeito ? '<i class="ph-bold ph-check text-sm"></i>' : ''}
                    </div>
                    <div>
                        <p class="text-sm font-medium ${isFeito ? 'text-slate-400 line-through' : 'text-slate-800'}">${item.dia}</p>
                        <p class="text-xs ${isFeito ? 'text-slate-400' : 'text-slate-500'} mt-0.5">${item.treino}</p>
                    </div>
                </div>
            </div>
        `;
    });

    // Atualiza Dashboard
    document.getElementById('dash-treinos-feitos').innerText = concluidos;
    const dashPercentTreinos = (concluidos / 7) * 100;
    setTimeout(() => {
        document.getElementById('dash-progress-treinos').style.width = `${dashPercentTreinos}%`;
    }, 100);
}

// ===== INICIALIZAÇÃO =====
function renderUI() {
    renderEstudos();
    renderTreinos();
}

loadData();
