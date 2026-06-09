// Configurações e Metas
const META_ESTUDO_HORAS = 262;

// Estado inicial da aplicação
let appData = {
    horasEstudadas: 2.5, // Valor inicial com base na tua folha Excel
    treinosConcluidos: {} // Formato: { "Segunda": true, "Terça": false }
};

// Rotina base (inspirada na tua folha de treinos)
const rotinaFitness = [
    { dia: "Segunda", treino: "Descanso / Ergométrica" },
    { dia: "Terça", treino: "Treino D (Quadríceps)" },
    { dia: "Quarta", treino: "Treino E (Costas e Bíceps)" },
    { dia: "Quinta", treino: "Pilates (7:00h)" },
    { dia: "Sexta", treino: "Treino F (Glúteo)" },
    { dia: "Sábado", treino: "Treino C (Cardio & Core)" },
    { dia: "Domingo", treino: "Bike Cedo" }
];

// Carregar dados guardados no localStorage ao iniciar a página
function loadData() {
    const savedData = localStorage.getItem('trackerData');
    if (savedData) {
        appData = JSON.parse(savedData);
    }
    updateDashboard();
}

// Guardar dados no localStorage
function saveData() {
    localStorage.setItem('trackerData', JSON.stringify(appData));
}

// Atualizar interface gráfica
function updateDashboard() {
    // Atualizar Estudos
    const progressPercentage = (appData.horasEstudadas / META_ESTUDO_HORAS) * 100;
    document.getElementById('study-progress-bar').style.width = `${Math.min(progressPercentage, 100)}%`;
    document.getElementById('study-progress-text').innerText = `${progressPercentage.toFixed(1)}%`;
    document.getElementById('total-hours').innerText = appData.horasEstudadas;

    // Atualizar Treinos
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = ''; // Limpar lista

    rotinaFitness.forEach(item => {
        const isCompleted = appData.treinosConcluidos[item.dia] || false;
        
        const div = document.createElement('div');
        div.className = `flex items-center justify-between p-3 rounded-lg border ${isCompleted ? 'bg-emerald-50 border-emerald-100' : 'border-gray-100'}`;
        
        div.innerHTML = `
            <div class="flex flex-col">
                <span class="text-sm font-medium ${isCompleted ? 'text-emerald-700 line-through' : 'text-gray-700'}">${item.dia}</span>
                <span class="text-xs ${isCompleted ? 'text-emerald-500' : 'text-gray-500'}">${item.treino}</span>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" ${isCompleted ? 'checked' : ''} onchange="toggleWorkout('${item.dia}')">
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
        `;
        workoutList.appendChild(div);
    });
}

// Funções de Interação
function addStudyHours() {
    const input = document.getElementById('study-hours');
    const hours = parseFloat(input.value);
    
    if (!isNaN(hours) && hours > 0) {
        appData.horasEstudadas += hours;
        saveData();
        updateDashboard();
        input.value = ''; // Limpar o campo
    }
}

function toggleWorkout(dia) {
    appData.treinosConcluidos[dia] = !appData.treinosConcluidos[dia];
    saveData();
    updateDashboard();
}

// Inicializar aplicação
loadData();
