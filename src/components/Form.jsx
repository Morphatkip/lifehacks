import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_c4ffe0i",
      "template_1zbjf8v",
      e.target,
      "user_Vo1b9I0xWvGxDGP75KIsk"
    );
    toast("success", { position: toast.POSITION.BOTTOM_CENTER });
  }
  return (
    <div className="container" style={{ backgroundColor: "olivedrab" }}>
      <div
        className="container border"
        style={{
          marginTop: "50px",
          width: "50%",
          backgroundImage:
            "url(https://mcdn.wallpapersafari.com/medium/55/73/ghY4rc.jpg)",
          backgroundPosition: "centre",
          backgroundSize: "cover",
        }}
      >
        <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
        <form
          className="row"
          style={{ margin: "25px 85px 75px 100px" }}
          onSubmit={sendEmail}
        >
          <label> Name</label>
          <input type="text" name="name" />

          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />

          <label>Message</label>
          <textarea name="message" rows="4" className="form-control"></textarea>
          <input
            type="submit"
            value="Send"
            className="form-control btn btn-primary"
            style={{ marginTop: "30px" }}
          />
        </form>
      </div>
    </div>
  );
};
export default Form;
