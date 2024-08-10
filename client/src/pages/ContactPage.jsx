/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import ShopInfo from "../components/Layouts/ShopInfo/ShopInfo";
import useContactForm from "../hooks/useContactForm";
import ContactContext from "../context/contactContext";
import "../styles/contact-page.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";

const ContactPage = () => {
  const { contactSubmitHandler } = useContext(ContactContext);
  const { values, errors, serverError, onChange, onSubmit } =
    useContactForm(contactSubmitHandler);

  useEffect(() => {
    // Define the initMap function globally
    window.initMap = async function initMap() {
      try {
        const initialLat = 40.73061;
        const initialLng = -73.935242;
        const { Map } = await window.google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } =
          await window.google.maps.importLibrary("marker");

        const mapInstance = new Map(document.getElementById("map"), {
          center: { lat: initialLat, lng: initialLng },
          zoom: 12,
          mapId: "DEMO_MAP_ID",
        });

        const marker = new AdvancedMarkerElement({
          map: mapInstance,
          position: { lat: initialLat, lng: initialLng },
          title: "Our address",
        });
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    // Check if the Google Maps script is already present
    const existingScript = document.getElementById("googleMapsScript");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.id = "googleMapsScript";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // If the script is already present, initialize the map directly
      if (window.google && window.google.maps) {
        window.initMap();
      }
    }
  }, []);
  return (
    <main>
      <div className="site-heading">
        <h1 className="heading-title">Contact Us</h1>
      </div>
      <div id="map" className="map"></div>
      <section className="container"></section>
      <ShopInfo />
      {serverError && (
        <div className="alert">
          <h2>{serverError}</h2>
        </div>
      )}

      <form className="contact-form" onSubmit={onSubmit}>
        <h2 className="contact-form-heading">Contact Us</h2>
        <div className="contact-form-wrapper">
          <div className="contact-form-col1">
            <p>
              <label htmlFor="name">Name</label>
              {errors.name && <span className="error">{errors.name}</span>}
              <input
                type="text"
                name="name"
                id="name"
                onChange={onChange}
                value={values?.name}
                className={
                  errors.name
                    ? "error-input"
                    : "" || serverError
                    ? "error-input"
                    : ""
                }
              />
            </p>
            <p>
              <label htmlFor="email">E-Mail</label>
              {errors.email && <span className="error">{errors.email}</span>}
              <input
                type="email"
                name="email"
                id="email"
                onChange={onChange}
                value={values?.email}
                className={
                  errors.email
                    ? "error-input"
                    : "" || serverError
                    ? "error-input"
                    : ""
                }
              />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
              <textarea
                name="message"
                id="message"
                onChange={onChange}
                value={values?.message}
                className={
                  errors.message
                    ? "error-input"
                    : "" || serverError
                    ? "error-input"
                    : ""
                }
              />
            </p>
            <button type="submit" className="btn-1">
              Send
            </button>
          </div>
          <div className="contact-form-col2">
            <ul className="col-list">
              <li className="col-item">
                <FaMapMarkerAlt /> 3838 Railroad Ave Long Island City, NY 11101
              </li>
              <li className="col-item">
                <FaPhoneSquareAlt /> +0123456789123
              </li>
              <li className="col-item">
                <FaEnvelope /> audiophile@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </form>
    </main>
  );
};

export default ContactPage;
