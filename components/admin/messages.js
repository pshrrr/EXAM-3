import React, { useEffect, useState } from "react";
import axios from "axios";

function Messages() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-earth-62986.herokuapp.com/messages")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  async function deleteMessage(id) {
    try {
      await axios
        .delete(`https://sheltered-earth-62986.herokuapp.com/messages/${id}`)
        .then((response) => {
          console.log(response);
          window.setTimeout(function () {
            location.reload();
          }, 1500);
        });
    } catch (error) {
      console.log(error);
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((message) => (
          <li className="message-li" key={message.id}>
            <p> From : {message.name}</p>
            <p> Message : {message.message} </p>
            <p>Email : {message.email}</p>
            <button className="btn-3" onClick={() => deleteMessage(message.id)}>
              {" "}
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default Messages;
