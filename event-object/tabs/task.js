const tabs = [...document.querySelectorAll('.tab')];
const tabsContent = [...document.querySelectorAll('.tab__content')];

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        tabs.forEach(function(tab) {
            tab.classList.remove('tab_active');
        });
        this.classList.add('tab_active');
        tabsContent.forEach(function(tab) {
            tab.classList.remove('tab__content_active')
        });
        tabsContent[i].classList.add('tab__content_active');
    })
}