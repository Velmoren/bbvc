export const languageSelectModule = () => {
  const select = document.querySelector(".language-select > .language-select__list");


  if (select) {
    const listItems = select.querySelectorAll("li");

    select.addEventListener("click", () => {
      select.classList.toggle("open");
    });
  
    listItems.forEach((item) => {
      const link = item.querySelector('a')
      
      if (link) {
        link.addEventListener('click', (event) => {
          if (item.classList.contains('active')) {
            event.preventDefault()
          }
        })
      }
  
      item.addEventListener("click", (event) => {
        const language = item.dataset.language;
        listItems.forEach((i) => {
          i.classList.remove("active");
  
          if (i.dataset.language === language) {
            i.classList.add("active");
          }
        });
      });
    });
  }
};
