import React from 'react';

function Footer() {
  return (
    <div className="mt-3">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: '#45526e' }}
      >
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Text Utils
                </h6>
                <p>
                TextUtils is your go-to solution for quick and efficient text manipulation. Whether you're counting words, converting cases, or removing extra spaces — we've got you covered. Designed for students, developers, and content creators alike.
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2020 Copyright:
                  <a className="text-white" href="textutils.com/"> textutils.com</a>
                </div>
              </div>

            
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
