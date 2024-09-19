import { useFormik } from "formik";
import { useState } from "react";
import { signUpSchema } from "../schema/index";
import Lock from "../assets/Lock.webp";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      setIsSubmitted(true);
      setSubmittedData(values);
      action.resetForm();
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen absolute  w-full bg-slate-600">
      {isSubmitted ? (
        <div className="p-8 md:p-12 bg bg-white rounded-2xl">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Registration Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            We appreciate your registration! Here are your account details:
          </p>
          <div className="space-y-4">
            <div>
              <strong>Name:</strong> {submittedData.name}
            </div>
            <div>
              <strong>Email:</strong> {submittedData.email}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-600 mb-4">
              Nice to meet you!{" "}
            </h1>
            <p className="text-slate-500 font-bold mb-8">
              Start Your Journey with Us!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-2 block w-full px-4 py-2 rounded-md shadow-sm border ${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-2 focus:ring-orange-500`}
                />
                {errors.name && touched.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* User Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-2 block w-full px-4 py-2 rounded-md shadow-sm border ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-2 focus:ring-orange-500`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* User Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-2 block w-full px-4 py-2 rounded-md shadow-sm border ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-2 focus:ring-orange-500`}
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* User Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-2 block w-full px-4 py-2 rounded-md shadow-sm border ${
                    errors.confirm_password && touched.confirm_password
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-2 focus:ring-orange-500`}
                />
                {errors.confirm_password && touched.confirm_password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirm_password}
                  </p>
                )}
              </div>

              {/* User Submit Button */}
              <div className="flex items-center justify-between mt-6">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-orange-600"
                >
                  Register using Gmail?
                </a>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md shadow-lg transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!isValid}
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-800 font-semibold"
              >
                Sign In now
              </a>
            </p>
          </div>

          <div className="hidden md:block">
            <img
              src={Lock}
              alt="Login"
              className=" h-screen w-screen object-center rounded-lg"
            />
          </div>

          <footer class="bg-gray-200 text-slate-600 py-4 rounded-lg cursor-pointer">
            <div class="container mx-auto text-center">
              <p class="text-sm">Created by Sonu Kumar</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Form;
