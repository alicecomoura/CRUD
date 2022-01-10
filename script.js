const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal')
        .classList.remove('active')
} 

/* const tempClient = {  //tempory client
    name: 'Alice',
    email: 'Alice@gmail.com',
    cellphone: '125488759',
    city: 'Rio de Janeiro'
} */

const getLocalStorage = () => JSON.parse(localStorage.getItem('database_client')) ?? []
const setLocalStorage = (databaseClient) => localStorage.setItem('database_client', JSON.stringify(databaseClient))

// CRUD -create read update delete

const deleteClient = (index) => {
    const databaseClient = readClient()
    databaseClient.splice(index, 1)
    setLocalStorage(databaseClient)
}

const updateClient = (index, client) => {
    const dataBaseClient = readClient()
    dataBaseClient[index] = client
    setLocalStorage(dataBaseClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const databaseClient = getLocalStorage()
    databaseClient.push(client)
    setLocalStorage(databaseClient)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = '')
}

const saveClient = () => {
    if (isValidFields()) {
        const client = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            cellphone: document.getElementById('cellphone').value,
            city: document.getElementById('city').value,
        }
        createClient(client)
        updateTable()
        closeModal()
    }
}

const createRow = (client) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.cellphone}</td>
        <td>${client.city}</td>
        <td>
            <button type="button" class="button green">editar</button>
            <button type="button" class="button red">excluir</button>
        </td>
    `

    document.querySelector('#table-client>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#table-client>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const databaseClient = readClient()
    clearTable()
    databaseClient.forEach(createRow)
}

updateTable()


// Events

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('save')
    .addEventListener('click', saveClient)