function getData() {
    const response = fetch('https://apidata.mos.ru/v1/datasets/893/rows?api_key=353e7e0b-c871-4768-b454-45edf006d983&$top=1');
    console.log(response);
    const data = response.json();
    return data;
  }
  //https://jsonplaceholder.typicode.com/posts
  //https://apidata.mos.ru/v1/datasets/893/rows?api_key=353e7e0b-c871-4768-b454-45edf006d983
  async function main() {
    const postsData = await getData();
    let currentPage = 1;
    let rows = 10;

    function displayList( arrData, rowPerPage, page){
        const postsEl = document.querySelector('.posts');
        postsEl.innerHTML = ""
        page--;

        const start = rowPerPage*page;
        const end = start+rowPerPage;
        const paginatedData = arrData.slice(start,end);

        paginatedData.forEach((el) => {
            const postEl = document.createElement("div");
            postEl.classList.add("post");
            postEl.innerText = `${el.global_id}`;
            postsEl.appendChild(postEl);
        })

        
    }

    function displayPagination(arrData, rowPerPage){
        const paginationEl = document.querySelector('.pagination');
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const ulEl = document.createElement("ul");
        ulEl.classList.add('pagination__list');
        for(let i = 0; i< pagesCount; i++){
            const liEl = displayPaginationBtn(i + 1);
            ulEl.appendChild(liEl);
        }
        paginationEl.appendChild(ulEl);
    }

    function displayPaginationBtn(page){
        const liEl = document.createElement("li");
        liEl.classList.add('pagination__item');
        liEl.innerText = page;

liEl.addEventListener('click', () =>{
    currentPage = page;
    displayList(postsData, rows, currentPage);
})

        return liEl;
    }

    displayList(postsData,rows, currentPage);
    displayPagination(postsData,rows);
}
getData()
  .then(data => {
    console.log(data);
    // Обработка данных
  })
  .catch(error => {
    console.error(error);
  });
main();