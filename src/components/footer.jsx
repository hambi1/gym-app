import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF);

const Footer = () => {
  return (
    <footer class="bg-dark px-5" dir="rtl">
      <div class="container-fluid">
        <div class="row text-light py-4">
          <div class="col-lg-4 col-sm-6">
            <h5 class="pb-3">درباره ما</h5>
            <p class="lh-1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
          </div>
          <div class="col-lg-2 col-sm-6">
            <h5 class="pb-3">صفحات</h5>
            <ul class="list-unstyled">
              <li>
                <p class="footer-link">خانه</p>
              </li>
              <li>
                <p class="footer-link">افتخارات</p>
              </li>
              <li>
                <p class="footer-link">گالری</p>
              </li>
              <li>
                <p class="footer-link">مربی ها</p>
              </li>
              <li>
                <p class="footer-link">پلن ها</p>
              </li>
              <li>
                <p class="footer-link">ارتباط با ما</p>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-6">
            <h5 class="pb-3"> کمک میخواهید ؟</h5>
            <ul class="list-unstyled">
              <li>
                <p class="footer-link">پشتیبانی</p>
              </li>
              <li>
                <p class="footer-link">مشاوره تغذیه</p>
              </li>
              <li>
                <p class="footer-link">برنامه لاغری</p>
              </li>
              <li>
                <p class="footer-link">اطلاعیه ها</p>
              </li>
              <li>
                <p class="footer-link">oxygen@email.com</p>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-sm-6">
            <h5 class="pb-3">درباره ما</h5>
            <p class="lh-1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
            <form action="" class="mb-3">
              <div class="input-group">
                <input class="form-control" placeholder="ایمیل" type="text" />
                <div class="input-group-append">
                  <button class="btn btn-danger text-white">ارسال</button>
                </div>
              </div>
            </form>
            <ul class="list-inline">
              <li class="list-inline-item">
                <FontAwesomeIcon icon="fa-facebook-f" />
                <i class="fab fa-facebook fa-2x text-primary"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-instagram fa-2x text-danger"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-twitter fa-2x text-info"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-youtube fa-2x text-danger"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
