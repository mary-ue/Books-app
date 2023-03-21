import { DivComponent } from "../../common/div-component";
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
      <div class="search__wrapper">
        <input class="search__input" type="text" value="${this.state.searchQuery ? this.state.searchQuery : ''}" placeholder="Найти книгу или автора..."/>
        <img src="/static/search.svg" alt"Иконка поиска"/>
      </div>
      <button aria-label="Искать">
        <img src="/static/search-white.svg" alt="Иконка поиска"/>
      </button>
    `;
    return this.el;
  }
}