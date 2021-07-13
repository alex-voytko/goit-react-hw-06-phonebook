import types from './contacts-types';

const addContact = data => ({
    type: types.ADD,
    payload: { ...data },
});

export default { addContact };
