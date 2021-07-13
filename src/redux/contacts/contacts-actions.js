import types from './contacts-types';

const addContact = (name, number, id) => ({
    type: types.ADD,
    payload: { name, number, id },
});
const removeContact = contactId => ({
    type: types.REMOVE,
    payload: contactId,
});
export default { addContact, removeContact };
