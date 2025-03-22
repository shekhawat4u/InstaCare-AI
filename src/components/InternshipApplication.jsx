import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

const InternshipApplication = () => {
  const navigate = useNavigate();
  const [resumeLink, setResumeLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    internshipType: "",
    duration: "",
    startDate: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    university: "",
    graduationYear: "",
    experience: "",
    github: "",
    portfolio: "",
    linkedin: "",
    coverLetter: "",
    referral: "",
    whyJoin: "",
    availability: "",
    projectIdea: "",
    agreeToFee: false,
  });

  const [errors, setErrors] = useState({});

  const durationOptions = [
    { value: "3-months", label: "3 Months" },
    { value: "6-months", label: "6 Months" },
    { value: "12-months", label: "12 Months" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const internshipOptions = [
    { value: "frontend-developer", label: "Frontend Developer" },
    { value: "backend-developer", label: "Backend Developer" },
    { value: "fullstack-developer", label: "Fullstack Developer" },
    { value: "mobile-app-developer", label: "Mobile App Developer" },
    { value: "ai-ml-engineer", label: "AI/ML Engineer" },
    { value: "ui-ux-designer", label: "UI/UX Designer" },
    { value: "data-scientist", label: "Data Scientist" },
    { value: "security-engineer", label: "Security Engineer" },
    { value: "cloud-engineer", label: "Cloud Engineer" },
    { value: "devops-engineer", label: "DevOps Engineer" },
    { value: "blockchain-developer", label: "Blockchain Developer" },
    { value: "game-developer", label: "Game Developer" },
    { value: "technical-content-writer", label: "Technical Content Writer" },
    { value: "seo-specialist", label: "SEO Specialist" },
    { value: "multimedia-editor", label: "Multimedia Editor" },
    { value: "embedded-systems-engineer", label: "Embedded Systems Engineer" },
    {
      value: "digital-marketing-specialist",
      label: "Digital Marketing Specialist",
    },
    { value: "3D-artist", label: "3D Artist" },
    {
      value: "illustrator-&-graphic-designer",
      label: "Illustrator & Graphic Designer",
    },
  ];

  const validateForm = () => {
    const newErrors = {};
  
    // List all required fields from formData
    const requiredFields = [
      "internshipType",
      "duration",
      "startDate",
      "firstName",
      "lastName",
      "email",
      "phone",
      "education",
      "graduationYear",
      "whyJoin"
    ];
  
    // Check each required field in formData
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() +
          field.slice(1).replace(/([A-Z])/g, " $1")
        } is required`;
      }
    });
  
    // Check resumeLink separately since it's not in formData
    if (!resumeLink) {
      newErrors.resumeLink = "Resume link is required";
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
  
    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const SubmitButton = ({ isSubmitting }) => (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`bg-gradient-to-r from-blue-500 to-purple-500 
        ${
          isSubmitting
            ? "opacity-50 cursor-not-allowed"
            : "hover:from-blue-600 hover:to-purple-600 transform hover:scale-105"
        }
        text-white font-medium py-2 px-6 rounded-lg transition-all duration-200`}
    >
      {isSubmitting ? "Submitting..." : "Submit Application"}
    </button>
  );
  
  SubmitButton.propTypes = {
    isSubmitting: PropTypes.bool.isRequired
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
  
    
    try {
      // Validate Google Drive resume link
      if (!resumeLink.startsWith("https://drive.google.com/")) {
        alert("Please enter a valid Google Drive link.");
        setIsSubmitting(false);
        return;
      }
  
      // Validate form fields
      const isValid = validateForm();
      
      if (!isValid) {
        const firstError = document.querySelector(".error-message");
        firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
        setIsSubmitting(false);
        return;
      }
  
      // Prepare form data with specific fields
      const applicationData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        resumeUrl: resumeLink,
        coverLetter: formData.coverLetter,
        internshipType: formData.internshipType,
        duration: formData.duration,
        startDate: formData.startDate,
        education: formData.education,
        university: formData.university,
        graduationYear: formData.graduationYear,
        experience: formData.experience,
        github: formData.github,
        portfolio: formData.portfolio,
        linkedin: formData.linkedin,
        whyJoin: formData.whyJoin,
        referral: formData.referral,
        agreeToFee: formData.agreeToFee
      };
  
      // Check if the API URL is defined
      if (!import.meta.env.VITE_REACT_APP_BASE_URL) {
        throw new Error('API URL is not defined in environment variables');
      }
  
      // Make the API call
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/apply`,
        applicationData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
     // Handle successful responses
     if ([200, 201].includes(response.status)) {
      setTimeout(() => {
        toast.success("Application submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }, 100); 
      navigate("/internships");
      return;
    }

    // Handle unexpected success status codes
    throw new Error(`Unexpected response status: ${response.status}`);

  } catch (error) {
    // Log full error details for debugging
    console.error("Form submission error:", {
      name: error.name,
      message: error.message,
      response: error.response,
      request: error.request,
      config: error.config,
      stack: error.stack
    });

    // Determine user-friendly error message
    let errorMessage = "An error occurred while submitting your application.";
    
    if (error.name === 'AxiosError') {
      if (error.code === 'ECONNABORTED') {
        errorMessage = "The request timed out. Please try again.";
      } else if (error.response) {
        // Server responded with error
        console.error("Server error response:", {
          status: error.response.status,
          data: error.response.data,
          headers: error.response.headers
        });

        switch (error.response.status) {
          case 400:
            errorMessage = error.response.data.message || 
                         "Please check your submission details.";
            break;
          case 401:
            errorMessage = "You need to log in again before submitting.";
            break;
          case 403:
            errorMessage = "You don't have permission to submit this application.";
            break;
          case 404:
            errorMessage = "The submission endpoint was not found.";
            break;
          case 422:
            errorMessage = error.response.data.message || 
                         "Some fields in your submission need correction.";
            break;
          case 429:
            errorMessage = "Too many submissions. Please wait a moment and try again.";
            break;
          case 500:
            errorMessage = "Server error. Please try again later.";
            break;
          default:
            errorMessage = error.response.data.message || 
                         error.response.data.error || 
                         errorMessage;
        }
      } else if (error.request) {
        // Request made but no response received
        console.error("Network error - no response:", error.request);
        errorMessage = "No response received from server. Please check your internet connection.";
      }
    } else if (error.message.includes('API URL')) {
      errorMessage = "System configuration error. Please contact support.";
    }

    alert(errorMessage);
    
    // If it's a validation error, scroll to the relevant field
    if (error.response?.status === 422 && error.response.data.field) {
      const errorField = document.querySelector(`[name="${error.response.data.field}"]`);
      errorField?.scrollIntoView({ behavior: "smooth", block: "center" });
    }

  } finally {
    setIsSubmitting(false);
  }
};

  const InternshipSelection = () => (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 mb-8">
      <h2 className="text-xl font-semibold text-purple-400 mb-4">
        Internship Details
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {/* Internship Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Internship Type <span className="text-red-500">*</span>
          </label>
          <select
            name="internshipType"
            value={formData.internshipType}
            onChange={handleInputChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
            required
          >
            <option value="">Select Internship Type</option>
            {internshipOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.internshipType && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.internshipType}
            </p>
          )}
        </div>

        {/* Duration Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Duration <span className="text-red-500">*</span>
          </label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
            required
          >
            <option value="">Select Duration</option>
            {durationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.duration && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.duration}
            </p>
          )}
        </div>

        {/* Preferred Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Preferred Start Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          {errors.startDate && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.startDate}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const formSections = [
    {
      title: "Personal Information",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          required: true,
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
        },
        {
          name: "phone",
          label: "Phone Number",
          type: "tel",
          required: true,
        },
      ],
    },
    {
      title: "Education",
      fields: [
        {
          name: "education",
          label: "Highest Education",
          type: "select",
          options: ["High School", "Bachelor's", "Master's", "PhD", "Other"],
          required: true,
        },
        {
          name: "university",
          label: "University/Institution",
          type: "text",
          required: true,
        },
        {
          name: "graduationYear",
          label: "Graduation Year",
          type: "number",
          min: new Date().getFullYear() - 10,
          max: new Date().getFullYear() + 5,
          required: true,
        },
      ],
    },
    {
      title: "Professional Information",
      fields: [
        {
          name: "experience",
          label: "Years of Experience",
          type: "select",
          options: ["No experience", "< 1 year", "1-2 years", "2+ years"],
          required: true,
        },
        {
          name: "github",
          label: "GitHub Profile",
          type: "url",
          placeholder: "https://github.com/username",
        },
        {
          name: "portfolio",
          label: "Portfolio Website",
          type: "url",
          placeholder: "https://yourportfolio.com",
        },
        {
          name: "linkedin",
          label: "LinkedIn Profile",
          type: "url",
          placeholder: "https://linkedin.com/in/username",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Apply for{" "}
            {formData.internshipType
              ? internshipOptions.find(
                  (opt) => opt.value === formData.internshipType
                )?.label
              : "an Internship"}
          </span>
        </h1>
        <p className="text-gray-400 mb-8">
          Fill out the form below to apply for the internship position
        </p>

        <InternshipSelection />

        <form onSubmit={handleSubmit} className="space-y-8">
          {formSections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <h2 className="text-xl font-semibold text-purple-400 mb-4">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.fields.map((field) => (
                  <div
                    key={field.name}
                    className={field.type === "textarea" ? "sm:col-span-2" : ""}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      {field.label}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                        required={field.required}
                      >
                        <option value="">Select {field.label}</option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                        required={field.required}
                        min={field.min}
                        max={field.max}
                      />
                    )}
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1 error-message">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Information Section */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-purple-400 mb-4">
              Additional Information
            </h2>

            {/* Resume Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Resume/CV <span className="text-red-500">*</span>
              </label>
              <label className="block text-gray-300 font-medium mb-2">
                Google Drive Resume Link:
              </label>
              <input
                type="text"
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
                placeholder="Paste your Google Drive link here"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            {/* Cover Letter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                rows={4}
                value={formData.coverLetter}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                placeholder="Tell us why you're interested in this position..."
              />
            </div>

            {/* Why Join Us */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Why do you want to join our internship program?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="whyJoin"
                rows={4}
                value={formData.whyJoin}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                placeholder="Share your motivation and goals..."
                required
              />
              {errors.whyJoin && (
                <p className="text-red-500 text-sm mt-1 error-message">
                  {errors.whyJoin}
                </p>
              )}
            </div>

            {/* Referral */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                How did you hear about us?
              </label>
              <select
                name="referral"
                value={formData.referral}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
              >
                <option value="">Select an option</option>
                <option value="linkedin">LinkedIn</option>
                <option value="github">GitHub</option>
                <option value="friend">Friend/Colleague</option>
                <option value="search">Search Engine</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Fee Details Section */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-purple-400 mb-4">
              Internship Fee
            </h2>
            <p className="text-gray-300 mb-4">
              Some of our internship programs require a minimal fee to cover
              mentorship, project resources, and certification. Please ensure
              you understand the applicable fee before proceeding.
            </p>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreeToFee"
                checked={formData.agreeToFee}
                onChange={handleInputChange}
                className="w-5 h-5 text-purple-500 border-gray-600 rounded"
              />
              <span className="text-gray-300">
                I understand and agree to the internship fee policy.
              </span>
            </label>
            {errors.agreeToFee && (
              <p className="text-red-500 text-sm mt-1 error-message">
                {errors.agreeToFee}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
          <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InternshipApplication;
