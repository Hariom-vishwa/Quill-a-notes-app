const popUpBtn = document.querySelector(".addNotes"),
  closePopUp = document.querySelector(".closeBtn"),
  newNote = document.querySelector(".newNote"),
  titleInp = document.querySelector("#titleInput"),
  contentInp = document.querySelector("#contentInput"),
  addNote = document.querySelector("#addNote");

let isEditing = false,
  editNote = null;

let updateTime = new Date(),
  date = updateTime.getDate(),
  month = updateTime.getMonth(),
  year = updateTime.getFullYear(),
  monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  upDate = `${monthNames[month]} ${date}, ${year}`;

popUpBtn.addEventListener("click", () => {
  newNote.style.display = "block";
  addNote.textContent = "Add Note";
  isEditing = false;
});

closePopUp.addEventListener("click", () => {
  newNote.style.display = "none";
  titleInp.value = "";
  contentInp.value = "";
});

addNote.addEventListener("click", () => {
  if (titleInp.value == "" || contentInp.value == "") {
    alert("Fill all the required fields.");
  } else {
    if (isEditing) {
      editNote.querySelector("h3").textContent = titleInp.value;
      editNote.querySelector("p").textContent = contentInp.value;
      isEditing = false;
      addNote.textContent = "Add Note";
    } else {
      let note = document.createElement("div");
      note.classList.add("notes");
      note.innerHTML = `
                    <div class="actions">
                        <button id="noteEdit">
                          <i class="ri-edit-line"></i>
                        </button>
                        <button id="noteDelete">
                          <i class="ri-delete-bin-4-line"></i>
                        </button>
                    </div>
                    <h3>${titleInp.value}</h3>
                    <div class="dateTime">${upDate}</div>
                    <p>${contentInp.value}</p>
    `;

      // Deleting specific note

      note.querySelector("#noteDelete").addEventListener("click", () => {
        note.remove();
      });

      // Editing Note Functionality

      note.querySelector("#noteEdit").addEventListener("click", () => {
        titleInp.value = note.querySelector("h3").textContent;
        contentInp.value = note.querySelector("p").textContent;
        newNote.style.display = "block";
        addNote.textContent = "Update Note";
        isEditing = true;
        editNote = note;
      });
      document.querySelector(".notesCont").appendChild(note);
    }

    newNote.style.display = "none";
    titleInp.value = "";
    contentInp.value = "";
  }
});
