// Sélection des éléments du DOM
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Fonction pour ajouter une nouvelle tâche
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Veuillez entrer une tâche !");
        return;
    }

    // Création de l'élément <li>
    const li = document.createElement('li');
    li.className = 'task-item';

    // Création de la case à cocher
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    
    // Événement pour barrer/griser la tâche lorsqu'on coche la case
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    // Création du texte de la tâche
    const span = document.createElement('span');
    span.textContent = taskText;

    // Assemblage des éléments
    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);

    // Réinitialisation du champ de saisie
    taskInput.value = "";
}

// Écouteur d'événement sur le bouton d'ajout
addBtn.addEventListener('click', addTask);

// Permettre l'ajout aussi en appuyant sur la touche "Entrée"
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Gestion des cases à cocher pour les tâches déjà présentes par défaut dans le HTML
document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const li = checkbox.closest('.task-item');
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });
});