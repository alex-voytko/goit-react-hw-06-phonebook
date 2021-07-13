import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ContactList = ({ contacts, onRemove }) => {
    return (
        <>
            <ul className="contact-list">
                {contacts.map(({ id, name, number }) => (
                    <li key={id} id={id}>
                        <p className="text-name">{name}</p>
                        <p className="text-number">{number}</p>
                        <button
                            className="btn-delete"
                            onClick={() => onRemove(id)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//     onRemove: PropTypes.func.isRequired,
// };
const mapStateToProps = state => ({
    contacts: state.contacts.items,
});
const mapDispatchToProps = dispatch => ({
    onRemove: () => null,
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
