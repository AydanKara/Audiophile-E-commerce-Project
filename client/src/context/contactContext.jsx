/* eslint-disable react/prop-types */
import { createContext } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const contactSubmitHandler = async (contactData) => {
    // Handle the contact form submission
    // For example, send contactData to an API
    console.log(contactData);
  };

  const values = {
    contactSubmitHandler,
  };

  return (
    <ContactContext.Provider value={values}>{children}</ContactContext.Provider>
  );
};

ContactContext.displayName = "ContactContext";

export default ContactContext;

/* // Define your handler function
 */
