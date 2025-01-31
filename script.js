const popUpBtn = document.querySelector(".addNotes"),
  closePopUp = document.querySelector(".closeBtn"),
  newNote = document.querySelector(".newNote"),
  titleInp = document.querySelector("#titleInput"),
  contentInp = document.querySelector("#contentInput"),
  addNote = document.querySelector("#addNote");

popUpBtn.addEventListener("click", () => {
  newNote.style.display = "block";
});

closePopUp.addEventListener("click", () => {
  newNote.style.display = "none";
});

addNote.addEventListener("click", () => {
if(titleInp.value=="" || contentInp.value==""){
  alert("Fill all the required fields.")
}
else{
  let note = document.createElement("div");
  note.classList.add("notes");
  note.innerHTML = `
                    <div class="actions">
                        <button id="noteEdit"><i class="ri-edit-line"></i></button>
                        <button id="noteDelete"><i class="ri-delete-bin-4-line"></i></button>
                    </div>
                    <h3>${titleInp.value}</h3>
                    <div class="dateTime"></div>
                    <p>${contentInp.value}</p>
    `;

  document.querySelector(".notesCont").appendChild(note);
  newNote.style.display = "none";
  titleInp.value="";
  contentInp.value=""
}
});

document.getElementById("noteDelete").addEventListener("click", (e)=>{
if(e.target.tagName == "button"){
  e.target.parentElement.remove()
}
})

