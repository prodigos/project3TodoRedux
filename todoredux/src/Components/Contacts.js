import React, { useState } from "react";

const Contacts = () => {

  const [contacts, setContacts] = useState([]);

  const inputTextHandler = (e) => {
    setContacts(e.target.value)

  }


  return (
    <form className="contacts">
      <input type="text" onChange={inputTextHandler}/>
      <input type="text" onChange={inputTextHandler}/>
      <input type="text" onChange={inputTextHandler}/>
      <button type="submit" value="submit" placeholder="submit">Submit</button>
    </form>
  );
};

export default Contacts;
