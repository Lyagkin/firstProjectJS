function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  const tabsContent = document.querySelectorAll(tabsContentSelector);
  const tabsParent = document.querySelector(tabsParentSelector);
  const tabs = document.querySelectorAll(tabsSelector);

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
      item.classList.add("fade");
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showActiveTabContent(i = 0) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabsContent[i].classList.add("fade");

    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showActiveTabContent();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showActiveTabContent(i);
        }
      });
    }
  });
}

export default tabs;
