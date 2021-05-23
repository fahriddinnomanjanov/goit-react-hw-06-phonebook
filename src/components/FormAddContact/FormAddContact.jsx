import { Component } from 'react';
import { initialState } from "./initialState";
import { fields } from './fields';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import styles from "./FormAddContact.module.css";

class FormAddContact extends Component {
    state = {...initialState}
    

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { onSubmit } = this.props;
        onSubmit(this.state);
        this.reset()
    }

    reset = () => {
        this.setState({ name: '', number: ''  });
    }


    render() {
        console.log(this.state);
        const { handleChange, handleSubmit } = this;
        const { name, number } = this.state;        
        return (
            <>
                <h2 className={styles.title}>Phonebook</h2>
                <form onSubmit={handleSubmit} className={styles.form} >
                    <div className={styles.content}>
                        <h2 className={styles.formTitle}>Name</h2>
                        <input className={styles.input} onChange={handleChange} {...fields.inputName}
                        value={name}/>
                    </div>

                    <div className={styles.content}>
                        
                        <h2 className={styles.formTitle}>Number</h2>
                        <input className={styles.input} onChange={handleChange} {...fields.inputNumber}
                            value={number}
                        />
                    </div>
                    <button className={styles.button}>add contacts</button>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (state) => dispatch(phonebookActions.addContacts(state))
})

export default connect(null, mapDispatchToProps)(FormAddContact);