import React from "react";
// import "./Location.css";

function Location() {
  return (
    <>
      <section>
        <div
          className="contact-right"
          style={{
            marginLeft: "20%",
            marginTop: "5%",
            padding: "20px",
            backgroundColor: "#e6ccff",
            width: "550px",
            borderRadius: "15px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
          }}
        >
          <h3> Reach Us </h3>
          <table
            className="data"
            style={{
              width: "25%",
              borderCollapse: "collapse",
              marginTop: "20px"
            }}
          >
            <tr>
              <td style={{ padding: "10px" }}> Email : </td>
              <td style={{ padding: "10px" }}>
                {" "}
                <a href="mailto:contactus@anarghyacomm.in">
                  contactus@postofficecomm.in
                </a>{" "}
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px" }}> Phone : </td>
              <td style={{ padding: "10px" }}> +91-040-6793 2204 </td>
            </tr>

            <tr>
              <td style={{ padding: "10px" }}> Address:</td>
              <td style={{ padding: "10px" }}>
                near the gangama temple road No.36, <br />
                post office Andhra pradesh-500033
              </td>
            </tr>
          </table>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.555661573299!2d79.4167106!3d13.6444375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4ae3101f01f3%3A0xa5364add6c7aa155!2sTirupati%20North%20Post%20Office!5e0!3m2!1sen!2sin!4v1597414879482!5m2!1sen!2sin"
            width="450"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Location;
