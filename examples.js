class HelloWorld extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("span");
    wrapper.textContent = "Hello world!";

    shadow.appendChild(wrapper);
  }
}

customElements.define("hello-world", HelloWorld);

class WithChildren extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    wrapper.innerHTML = this.innerHTML;

    shadow.appendChild(wrapper);
  }
}

customElements.define("with-children", WithChildren);

class FavoriteButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const button = document.createElement("button");
    button.textContent = "❤";
    button.setAttribute("aria-label", "favorite");

    const style = document.createElement("style");
    style.textContent = `
      button {
        background-color: #237c3a;
        border: none;
        border-radius: 2px;
        color: white;
        font: inherit;
        font-size: 1.125rem;
        padding: 0.25em 0.75em;
        transition: all 100ms ease-in-out;
      }
      
      button:focus, button:hover {
        color: #efa639;
        transform: scale(1.075);
      }
  `;

    shadow.appendChild(button);
    shadow.appendChild(style);
  }
}

customElements.define("favorite-button", FavoriteButton);

class SimpleCounter extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    this.count = 0;

    const wrapper = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "+1";
    wrapper.appendChild(button);

    const span = document.createElement("span");
    span.textContent = this.count;
    wrapper.appendChild(span);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      this.count++;
      span.textContent = this.count;
    });

    shadow.appendChild(wrapper);
  }
}

customElements.define("simple-counter", SimpleCounter);
