import { useState } from 'react';
import { useForm } from "react-hook-form";


import classes from './styles/NewUserForm.module.css';


function NewUserForm(props) {

    const [popup, setPopup] = useState(false);
    const [message, setMessage] = useState('')

    const toggleModal = () => {
        setPopup(!popup);
    };

    if(popup) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            email: ""
        },
        shouldUseNativeValidation: true 

        });



    const onSubmit = (inputData) => {
        const url = "/api/v1/new-user?" + 
                    "token=seYtfXcOCMNcv96yehlq";

        const content = {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({email: inputData.email})
                        }
       
        fetch(url, content).then((response) => {
            setMessage('');
            return response.json();
        }).then((data) => {
            setMessage(data.message);
        });

        setValue('email', '');
        toggleModal();
      }


    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.box}>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            type="email"
                            {
                            ...register('email',
                            {required : "Please enter your email"})
                            }
                        />
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.actions}>
                        <button>Get API Token</button>
                    </div>
                </div>
            </form>
            {
            popup && (
            <div className={classes.modal}>
                <div onClick={toggleModal} className={classes.overlay}></div>
                    <div className={classes.modalContent}>
                        <h2>Message</h2>
                        <p>
                            {message}
                        </p>
                        
                        <button className={classes.closeModal} onClick={toggleModal}>
                        CLOSE
                        </button>
                        
                </div>
            </div>)
            
            }
        </div>
      );

}


export default NewUserForm;
