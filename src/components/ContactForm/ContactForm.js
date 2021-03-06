import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contacts-actions';

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    state = {
        name: '',
        id: '',
        number: '',
    };
    inputName = event => {
        const { value, name } = event.currentTarget;
        this.setState({
            [name]: value,
            id: shortId.generate(),
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        const nameValue = event.currentTarget[0].defaultValue;
        this.props.onSubmit(this.state);
        console.log(this.state);
        this.reset();
    };
    reset = () => {
        this.setState({ name: '', id: '', number: '' });
    };
    render() {
        const { handleSubmit, inputName } = this;
        const { id, name, number } = this.state;
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={id} className="label name">
                        Name
                    </label>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        id={id}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов."
                        required
                        onChange={inputName}
                        value={name}
                    />
                    <label htmlFor={id} className="label number">
                        Number
                    </label>
                    <input
                        className="input"
                        type="tel"
                        name="number"
                        id={id}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={inputName}
                        value={number}
                    />
                    <button type="submit">Add contact</button>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: data => dispatch(contactsActions.addContact(data)),
    };
};

export default connect(null, mapDispatchToProps)(ContactForm);
