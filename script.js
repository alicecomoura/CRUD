const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal')
        .classList.remove('active')
} 

const tempClient = {  //tempory client
    name: 'Rafa',
    email: 'rafa@gmail.com',
    celphone: '125488759',
    city: 'Rio de Janeiro'
}

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

// user 

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = '')
}

const saveClient = () => {
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('name').value,
            email: document.getElementById('email').value,
            celphone: document.getElementById('celphone').value,
            city: document.getElementById('city').value,
        }
        createClient(client)
        closeModal()
    }
}


// Events

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('save')
    .addEventListener('click', saveClient)