const add = document.querySelector("#add");
const newTodo = document.querySelector("#newTodo");
const section = document.querySelector("section");
const chk = document.querySelector(".chk");

const handleAdd = () => {
  const text = newTodo.value;

  if (text == "") return;

  newTodo.value = "";

  let wrapper = document.createElement("div");
  wrapper.classList.add("todo");

  let chkbox = document.createElement("input");
  chkbox.type = "checkbox";
  chkbox.classList.add("chk");

  chkbox.addEventListener("change", (e) => {
    const span = e.target.nextElementSibling;
    if (e.target.checked) {
      span.classList.add("done");
    } else {
      span.classList.remove("done");
    }
  });

  let span = document.createElement("span");
  span.textContent = text;

  wrapper.appendChild(chkbox);
  wrapper.appendChild(span);

  section.appendChild(wrapper);
};

add.addEventListener("click", handleAdd);
newTodo.addEventListener("keydown", (e) => {
  if (e.key == "Enter") handleAdd();
});

chk.addEventListener("change", (e) => {
  const span = e.target.nextElementSibling;
  if (e.target.checked) {
    span.classList.add("done");
  } else {
    span.classList.remove("done");
  }
});

const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  const done = document.querySelectorAll(".done");

  Array.from(done).forEach((el) => {
    if (el.parentElement.classList.contains("hidden")) {
      el.parentElement.classList.remove("hidden");
    } else {
      el.parentElement.classList.add("hidden");
    }
  });
});
