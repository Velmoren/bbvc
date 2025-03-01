export const languageSelectModule = () => {
  const selects = document.querySelectorAll(".language-select > .language-select__list");

  selects.forEach(select => {
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
  })

  window.addEventListener('click', (event) => {
    if (!event.target.closest('.language-select')) {
      selects.forEach(select => {
        select.classList.remove("open");
      })
    }
  })
  window.addEventListener('resize', () => {
    console.log('asdasd');
    
    selects.forEach(select => {
      select.classList.remove("open");
    })
  })
};
