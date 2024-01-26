import { Component } from "react";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <section class="contact p-5 mt-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-5 pb-4 mr-auto" dir="rtl">
              <h3 class="text-white mb-5">با ما در ارتباط باشید</h3>
              <form action="" class="contact-form">
                <div class="form-group py-4 my-2">
                  <input
                    type="text"
                    class="form-control my-2 p-2 input"
                    id="name"
                    placeholder="نام"
                  />
                  <label for="name" class="label">
                    نام
                  </label>
                </div>
                <div class="form-group py-4 my-2">
                  <input
                    type="text"
                    class="form-control my-2 p-2 input"
                    id="email"
                    placeholder="ایمیل"
                  />
                  <label for="email" class="label">
                    ایمیل
                  </label>
                </div>
                <div class="form-group py-4 my-2">
                  <input type="checkbox" id="check" />
                  <label for="check" class="text-white">
                    اطلاعیه ها را برایم ارسال کن
                  </label>
                </div>
                <button class="btn btn-block btn-info p-2 submit-button">
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
