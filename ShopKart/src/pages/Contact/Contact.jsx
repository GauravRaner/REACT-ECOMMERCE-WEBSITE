import React, { useState } from 'react'
import './Contact.css'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase/FirebaseAuth';
import toast from 'react-hot-toast';

const Contact = () => {


  const [userContact, setUserContact] = useState({ username: "", email: "", message: "" })

  const handleChange = (e) => {
    setUserContact({ ...userContact, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userContact.username || !userContact.email || !userContact.message) {
      toast.error("all fields are required");
    } else {
      try {
        await addDoc(collection(db, "usersFeedback"), {
          Name: userContact.username,
          Email: userContact.email,
          Message: userContact.message
        });
        toast.success( `Thank You for ${userContact.username} your feedback`);
        setUserContact({
          username:"",
          email:"",
          message:""
        });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  
  
  return (
    <>

      <section className="feedback-section">
        <div className="contact">
          <div className="content">
            <h2>Contact Us</h2>

            <div className="form">
              <div className="inputBox">
                <input type="text" required name="username" autoComplete="off" value={userContact.username} onChange={handleChange} /> <i>Name</i>
              </div>

              <div className="inputBox">
                <input type="email" required name="email" autoComplete="off" value={userContact.email} onChange={handleChange} /> <i>Email</i>
              </div>

              <div className="inputBox">
                <input type="text" className='msg' required name="message" autoComplete="off" value={userContact.message} onChange={handleChange} /> <i>Message</i>
              </div>

              <div className="links">
                {" "}
              </div>

              <div className="inputBox">
                <input type="submit" value="submit" onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact