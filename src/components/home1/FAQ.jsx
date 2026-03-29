import React from 'react';

const faqData = [
  {
    question: "How does the design consultation process work?",
    answer: "Once you fill out our consultation form, our design team connects with you to understand your space, style preferences, and budget. We then share a personalized design proposal or schedule a call to discuss your project in detail."
  },
  {
    question: "Do you take up complete turnkey interior projects?",
    answer: "Yes! We handle everything from concept design and 3D visualization to furniture, materials, lighting, and execution. You get a fully finished, move-in-ready space designed just for you."
  },
  {
    question: "Can I book a design consultation even if my home is still under construction?",
    answer: "Absolutely. In fact, starting early helps us plan layouts, electrical points, and furniture placement efficiently, saving time and cost during execution."
  },
  {
    question: "What's the minimum budget you take up projects for?",
    answer: "Our design and execution services typically start at **₹5 lakh onwards** for smaller spaces (like 1BHKs). However, we tailor every project according to scale, design requirements, and material choices."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "On average, **4 to 12 weeks**, depending on the project size and scope. We'll provide a detailed timeline once the design concept and site details are finalized."
  },
  {
    question: "Do you offer only design or also execution?",
    answer: "We offer both **design-only packages** (for clients outside Hyderabad or who already have contractors) and **end-to-end turnkey solutions** (design + materials + on-site execution)."
  },
  {
    question: "Can you design homes outside Hyderabad?",
    answer: "Yes! We offer virtual design services pan-India. Our team coordinates designs, layouts, and 3D visuals online, ensuring smooth implementation with your local vendor or contractor."
  },
  {
    question: "What makes Einri Living different from other interior design firms?",
    answer: "At Einri Living, we blend **art, greenery, and emotion** into functional design. Every home we create feels warm, personal, and truly yours, not just \"well-decorated.\" We believe in spaces that tell your story."
  }
];

function FAQ() {
  return (
    <section className="tc-awards-style1">
      <div className="container">
        <div className="awards-content">
          <div className="title mb-80 text-center">
            <h3 className="fsz-45 fw-600 mb-30 wow">Frequently Asked Questions</h3>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="accordion wow fadeInUp slow" id="accordionFAQ">
                {faqData.map((faq, i) => (
                  <div key={i} className="accordion-item">
                    <div className="accordion-header" id={`heading${i}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${i}`}
                        aria-expanded="false"
                        aria-controls={`collapse${i}`}
                      >
                        <h3 className="fsz-23 fw-400">{faq.question}</h3>
                        <i className="la la-angle-down ms-auto fsz-20 accordion-icon"></i>
                      </button>
                    </div>
                    <div
                      id={`collapse${i}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFAQ"
                      aria-labelledby={`heading${i}`}
                    >
                      <div className="accordion-body">
                        <div className="text" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

