/*
# vue-todolist

Esercizio di oggi: **Vue To Do List**

nome repo: **vue-todolist**

Descrizione:
Rifare l’esercizio della to do list fatto in classe.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

**MILESTONE 1**

Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

**MILESTONE 2**

Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**

Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

**Bonus:**

1. se il todo ha meno di 5 caratteri esporre un messaggio di errore;
2. cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa);
3. eliminare il todo solo se è stato svolto, altrimenti esporre un messaggio di errore;

================================================================================================

**Pseudocode**

1. Creare un array di oggetti, ogni oggetto ha due proprietà: "text, done" (il done è un booleano);
2. stampare ogni item su html;
3. itero gli oggetti dell'array direttamente nell'HTML;
4. attraverso un oggetto, collego il v-model al input text per raccogliere il nuovo task e pusharlo nei tasks;
5. per inserire i nuovi task, non solo al click, aggiungo un evento al keyup di enter; 
6. creo la classe nel css per barrare i todo completati e lo saranno soltanto quando 'done' diventerà true;
7. creo un toggle al click sul text per stabilire il valore booleano al click e lo collego al binding della classe done;
8. all'evento click del cestino elimino il task corrispondente;
9. creo una funzione che elimina il task durante l'evento click

*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      //1.
      tasks: [
        {
          text: "fare la spesa",
          done: false,
        },
        {
          text: "comprare il libro del signore degli anelli",
          done: false,
        },
        {
          text: "mettere a posto i rubinetti di casa",
          done: false,
        },
        {
          text: "comprare dei fiori a mia moglie",
          done: false,
        },
      ],

      newTask: {
        text: "",
        done: false,
      },
    };
  },
  methods: {

addNewTask() {
    this.tasks.push(this.newTask);
},

eliminateTask() {
    this.tasks.splice(this.index, 1);
}
    
  },
  mounted() {
    console.log("Prova");
  },
}).mount("#data");
