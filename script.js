'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

// CRUD -create read update delete

const tempClient = {  //tempory client
    name: 'Rafa',
    email: 'rafa@gmail.com',
    celphone: '125488759',
    city: 'Rio de Janeiro'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('database_client')) ?? []
const setLocalStorage = (databaseClient) => localStorage.setItem('database_client', JSON.stringify(databaseClient))

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


// Events

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)