async function getDataForId(id) {
    try {
        const response = await fetch('https://apidata.mos.ru/v1/datasets/893/rows?api_key=353e7e0b-c871-4768-b454-45edf006d983&$filter=global_id'+id);

        console.log(response.status); // Выводит статус-код HTTP-ответа

        if (!response.ok) {
            throw new Error('Ошибка при запросе данных');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
const searchParams = new URLSearchParams(window.location.search);
const playgroundId = searchParams.get('id');
const postsData = getDataForId(playgroundId);


const mainInfo = document.querySelector(".mainInfo");

const globalIdElement = document.createElement('p');
const namePlaygroundElement = document.createElement('p');
const addressElement = document.createElement('p');
console.log(postsData)
globalIdElement.textContent = "Глобальный id: " + postsData.global_id;
namePlaygroundElement.textContent = "Название площадки: " + postsData.Cells.NameWinter;
addressElement.textContent = "Адрес: " + postsData.Cells.AdmArea + ' ' + postsData.Cells.District + ' ' + postsData.Cells.Address;

mainInfo.appendChild(globalIdElement);
mainInfo.appendChild(namePlaygroundElement);
mainInfo.appendChild(addressElement);
console.log(playgroundId)
