import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ConfirmationMessage from "./Confirmation";
import { Link } from "react-router-dom";
import "../../src/styles/styles.css";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  enquiryReason: "",
  enquiryMessage: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  enquiryReason: Yup.string().required("Enquiry reason is required"),
  enquiryMessage: Yup.string().required("Enquiry message is required"),
});

function FormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <section>
      <h1 className="form-title">Know More</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" />
              {errors.name && touched.name && <div>{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="phone">Phone number</label>
              <Field name="phone" />
              {errors.phone && touched.phone && <div>{errors.phone}</div>}
            </div>
            <div>
              <label htmlFor="enquiryReason">Enquiry reason</label>
              <Field name="enquiryReason" as="select">
                <option value="">Select an option</option>
                <option value="General enquiry">General enquiry</option>
                <option value="Product enquiry">Product enquiry</option>
                <option value="Feedback">Feedback</option>
              </Field>
              {errors.enquiryReason && touched.enquiryReason && (
                <div>{errors.enquiryReason}</div>
              )}
            </div>
            <div>
              <label htmlFor="enquiryMessage">Enquiry message</label>
              <Field name="enquiryMessage" as="textarea" />
              {errors.enquiryMessage && touched.enquiryMessage && (
                <div>{errors.enquiryMessage}</div>
              )}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {isSubmitted && <ConfirmationMessage />}
    </section>
  );
}

function Homepage() {
  return (
    <>
      <Navbar />
      <Carousel>
        <div>
          <img
            src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Banner 2"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Banner 1"
          />
        </div>
      </Carousel>
      <AboutUs />

      <FormSection />

      <footer className="footer">
        <Link to="/about-us">About Us</Link>
        <span>Contact information</span>
        <span>Privacy policy</span>
      </footer>
    </>
  );
}

export default Homepage;
