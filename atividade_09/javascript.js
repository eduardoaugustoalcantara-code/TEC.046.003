const demoId = document.getElementById("demo");
demoId.style.border = '2px solid purple';
demoId.textContent = 'mudei o texto pelo id';
demoId.style.backgroundColor = "black"
demoId.style.color = "white";

const catClass = document.getElementsByClassName("categoria");
for (i = 0; i < catClass.length; i++) {
catClass[i].style.border = '2px dotted orange';
catClass[i].style.backgroundColor= 'orange';
}
const tag = document.getElementsByTagName("article");
for (i = 0; i < tag.length; i++)
    tag[i].style.border = "2px dotted blue";

const queryID = document.querySelector('#demo-query');
queryID.style.border = '1px solid red';

const demoQuery = 
    document.querySelectorAll(".demo-query-all");
demoQuery.forEach(query => {
    query.style.border = '1px solid green';

});
