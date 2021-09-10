import "./App.css";

import { Formik } from "formik";
import ContactForm from "./components/ContactForm";
import * as Yup from "yup";

function App() {
  const ErrorSchema = Yup.object().shape({
    username: Yup.string()
      .required("Name is required")
      .min(2, "too Short")
      .max(12, "Too Long"),
    age: Yup.number()
      .typeError("Age must be a number")
      .integer("must be an integer")
      .required("Required")
      .min(18, "You must be at least 18 years")
      .max(60, "You must be at less than 60 years"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Not a Phone number"
      )
      .required("Required"),
    message: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });
  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Contact Form</h1>

          <Formik
            initialValues={{
              username: "",
              age: "",
              email: "",
              phone: "",
              message: "",
            }}
            onSubmit={(value, { resetForm }) => {
              console.log(value);
              resetForm();
            }}
            validationSchema={ErrorSchema}
            component={ContactForm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
