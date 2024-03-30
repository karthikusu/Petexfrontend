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
                <a href="mailto:contactpetsheaven@gmail.com">
                  contactpetsheaven@gmail.com
                </a>{" "}
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px" }}> Phone : </td>
              <td style={{ padding: "10px" }}> +91-040-675432 7878 </td>
            </tr>

            <tr>
              <td style={{ padding: "10px" }}> Address :</td>
              <td style={{ padding: "10px" }}>
                20-2-472/10 near Sairam Colony, <br />
                Vijaya Nagar Colony, Kukatpalli, <br />
                Telangana 500024
              </td>
            </tr>
          </table>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/place/Kukatpally+Housing+Board+Colony,+Kukatpally,+Hyderabad,+Telangana/@17.4906319,78.3684699,15z/data=!4m6!3m5!1s0x3bcb91b5be1f29c3:0xf5af71d23e422328!8m2!3d17.4833526!4d78.3870668!16s%2Fg%2F1tgq52qt?entry=ttu"
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
