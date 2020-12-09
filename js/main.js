"use strict";
//Tabs
let tab = document.querySelectorAll('.tabs-title');

tab.forEach(function(item){
    item.addEventListener('click', function(){
        let currentTab = document.querySelector(`.tab-content[data-tab-content="${item.dataset.tab}"]`);

        document.querySelector('.tab-content.content-active').classList.remove('content-active');
        document.querySelector('.tabs-title.active').classList.remove('active');

        currentTab.classList.add('content-active');
        item.classList.add('active');
    });
});