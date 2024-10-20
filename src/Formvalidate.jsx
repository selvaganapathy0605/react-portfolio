import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser';



const schema = yup.object().shape({
    fullname: yup.string().required('Name is Required*').min(3, 'Name must contain minimum 3 characters*').max(20, 'Name must contain maximum 20 characters*'),
    email: yup.string().email('Please enter the valid email*').required('Email is requires*'),
    message: yup.string().required('Message is requires*').min(2, 'Message must contain minimum 2 characters*')
})
function Formvalidate() {
    const succesMessage = document.querySelector('#mess')
    const closeLine = document.querySelector('#closeLine')

    function CloseMess(){
        closeLine.addEventListener('click',()=>{
            succesMessage.style.display = 'none'
        })

        succesMessage.addEventListener('click',()=>{
            succesMessage.style.display = 'none'
        })
    }


    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(schema),
            mode: 'onChange'
        },
    )
    
    const form = useRef();
    const sendEmail = (e) => {
        
        emailjs
        .sendForm('service_cq0yemi', 'template_00xkyzf', form.current, {
            publicKey: 'Ve5XXwAlXgAZb2OHT',
        })
        .then(
            () => {
                    succesMessage.style.display = 'flex'
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <div className="footer__form" data-aos="fade-up">
                <div id="mess" onClick={CloseMess}>
                    <span><i className="ri-verified-badge-line"></i></span>
                    <h4>Message submitted successfully!</h4>
                    <span id="closeLine"><i className="ri-close-line"></i></span>
                </div>
                <form ref={form} onSubmit={handleSubmit(() => {
                    sendEmail()
                    reset()
                })}>
                    <div className="input__row">
                        <div className="input__box">
                            {errors?.fullname && <div className='error'>{errors.fullname.message}</div>}
                            <input type="text" placeholder="Your Name" name='name' id="name" {...register('fullname')} />
                        </div>
                        <div className="input__box">
                            {errors?.email && <div className='error'>{errors.email.message}</div>}
                            <input type="email" placeholder="Your Email" name='email' id="email" {...register('email')} />
                        </div>
                    </div>
                    <div className="input_row">
                        {errors?.message && <div className='error'>{errors.message.message}</div>}
                        <textarea placeholder="Your Message" name='message' id="message"{...register('message')}></textarea>
                    </div>
                    <button className="btn btn__primary" id="button">Send Message</button>
                </form >
            </div>
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
        </>
    )
}

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_cq0yemi', 'template_00xkyzf', form.current, {
//         publicKey: 'Ve5XXwAlXgAZb2OHT',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

export default Formvalidate
