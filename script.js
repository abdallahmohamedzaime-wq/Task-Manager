// Tâches affichées au démarrage de l'application 
const tasks = [ 
  { title: "Préparer le cours DevOps", done: true }, 
  { title: "Corriger les TP", done: false }, 
  { title: "Préparer la séance 2", done: false } 
]; 
  
const list = document.getElementById("task-list"); 
const form = document.getElementById("task-form"); 
const input = document.getElementById("task-input"); 
  
// Affiche toutes les tâches dans la page 
function render() { 
  list.innerHTML = ""; 
  tasks.forEach(function (task, index) { 
    const item = document.createElement("li"); 
  
    const box = document.createElement("input"); 
    box.type = "checkbox"; 
    box.checked = task.done; 
    box.addEventListener("change", function () { 
      tasks[index].done = box.checked; 
      render(); 
    }); 
  
    const label = document.createElement("span"); 
    label.textContent = task.title;
       if (task.done) { 
      label.className = "done"; 
    } 
  
    item.appendChild(box); 
    item.appendChild(label); 
    list.appendChild(item); 
  }); 
} 
  
// Ajoute une tâche lorsque le formulaire est envoyé 
form.addEventListener("submit", function (event) { 
  event.preventDefault(); 
  const title = input.value.trim(); 
  if (title === "") { 
    return; 
  } 
  tasks.push({ title: title, done: false }); 
  input.value = ""; 
  render(); 
}); 
  
render();