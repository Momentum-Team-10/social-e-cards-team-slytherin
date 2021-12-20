import React, { useState } from "react";
import "../Login.css";


export default function Login() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Login
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Please Log In</h2>
            <form>
                <div>
                <label>Username </label>
                <input
                type="text"
                id="username"
                // value={username}
                // onChange={(event) => setUsername(event.target.value)}
                />
               </div>
               
               <div>
               <label>Password </label>
                <input
                type="password"
                id="password"
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
                />
                </div>

                <div>
                <button type="submit">Log In</button>
                </div>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}


