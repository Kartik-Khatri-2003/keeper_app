let body = document.querySelector("body");
let btn = document.querySelector("button");
/* let note = document.querySelector("#note"); */



btn.addEventListener("click", () => {
    let note = document.createElement("div");
    let txtarea = document.createElement("textarea");
    let dlt = document.createElement("button");

    txtarea.classList.add("txtarea");
    note.classList.add("note");
    dlt.classList.add("dltBtn");

    body.appendChild(note);
    note.appendChild(txtarea);
    note.appendChild(dlt);

    // Focus on the newly created textarea
    txtarea.focus();

    dlt.innerHTML = "delete note";
    dlt.onclick = (e) => {
        let parentNote = e.target.parentElement;
        parentNote.remove();
    };
});