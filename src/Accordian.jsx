import React from 'react'

function Accordian() {
  return (
    <div>
      <div className="container my-5">
      <h2 className="text-center mb-4">Learn Web Development Basics</h2>

      <div id="accordion">
        {/* HTML */}
        <div className="card mb-3">
          <div className="card-header p-0" id="headingHtml">
            <button
              className="accordion-button-custom"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHtml"
              aria-expanded="true"
              aria-controls="collapseHtml"
            >
              <i className="fas fa-code me-2"></i> What is HTML?
            </button>
          </div>

          <div
            id="collapseHtml"
            className="collapse show"
            aria-labelledby="headingHtml"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body-custom">
              <p>
                HTML (HyperText Markup Language) is the standard markup language for creating
                web pages. It structures the content on the web, like headings, paragraphs, links,
                images, and other elements.
              </p>
              <p>
                Example tag: <code>{'<p>This is a paragraph</p>'}</code>
              </p>
            </div>
          </div>
        </div>

        {/* CSS */}
        <div className="card mb-3">
          <div className="card-header p-0" id="headingCss">
            <button
              className="accordion-button-custom collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCss"
              aria-expanded="false"
              aria-controls="collapseCss"
            >
              <i className="fab fa-css3-alt me-2"></i> What is CSS?
            </button>
          </div>

          <div
            id="collapseCss"
            className="collapse"
            aria-labelledby="headingCss"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body-custom">
              <p>
                CSS (Cascading Style Sheets) is used to style HTML content. It controls colors,
                layouts, fonts, spacing, animations, and much more.
              </p>
              <p>
                Example rule: <code>{'p { color: blue; font-size: 16px; }'}</code>
              </p>
            </div>
          </div>
        </div>

        {/* JavaScript */}
        <div className="card mb-3">
          <div className="card-header p-0" id="headingJs">
            <button
              className="accordion-button-custom collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseJs"
              aria-expanded="false"
              aria-controls="collapseJs"
            >
              <i className="fab fa-js-square me-2"></i> What is JavaScript?
            </button>
          </div>

          <div
            id="collapseJs"
            className="collapse"
            aria-labelledby="headingJs"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body-custom">
              <p>
                JavaScript is a programming language that enables interactive features on websites,
                such as forms, popups, sliders, animations, and more. It works alongside HTML and CSS.
              </p>
              <p>
                Example: <code>{'document.getElementById("demo").innerHTML = "Hello!"'}</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Accordian