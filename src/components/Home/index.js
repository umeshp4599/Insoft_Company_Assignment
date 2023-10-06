// Write your JS code here
import './index.css'
// import {FaBeer} from 'react-icons/fa'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarker,
  FaAngleRight,
  FaEyeSlash,
} from 'react-icons/fa'

const Home = () => (
  <div className="home-container">
    <div>
      <div className="first-row">
        <div className="first-row-1">
          <h1>BE A SMART STUDENT</h1>
          <p>SchoolAura Is A Smart Education Platform</p>
          <div>
            <div className="row1">
              <img src="https://schoolaura.com/Content/new_assets/images/header/header-girl-icon.png" />

              <div className="card">
                <h1 className="hed">Entrance Exam</h1>
                <button className="but">Exam</button>
                <br />
                <button className="but">Courses</button>
                <p>
                  Read More
                  <span>
                    <FaAngleRight />
                  </span>
                </p>
              </div>
              <div className="card">
                <h1 className="hed">COMPETITIVE Solution</h1>
                <button className="but">Exam</button>
                <br />
                <button className="but">Courses</button>
                <p>
                  Read More
                  <span>
                    <FaAngleRight />
                  </span>
                </p>
              </div>
              <div className="card">
                <h1 className="hed">KG - 12TH SCHOOL</h1>
                <button className="but">Exam</button>
                <br />
                <button className="but">Courses</button>
                <p>
                  Read More
                  <span>
                    <FaAngleRight />
                  </span>{' '}
                </p>
              </div>
              <div className="card">
                <h1 className="hed">TUTOR SOLUTION</h1>
                <button className="but">Find Tutors</button>
                <br />
                <button className="but">Become Tutor</button>
                <div>
                  <p>
                    Read More
                    <span>
                      <FaAngleRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://schoolaura.com/Content/new_assets/images/header/user-img.png"
            alt="boy1"
            className="imgboy"
          />
          <div className="login">
            <h1>Student Login</h1>
            <p className="pra">Mobile Number or Key</p>
            <input />
            <p className="pra">Student Password</p>
            <input />
            <br />
            <FaEyeSlash />
            <br />
            <button className="button1" type="button">
              Login
            </button>
            <div className="login-blw">
              <div className="login-blw1">
                <p>Forgot Password</p>
              </div>
              <div>
                <p>Create Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div>
          <img
            src="https://schoolaura.com/Content/new_assets/images/banner-2/Clip.png"
            alt="img"
          />
        </div>
        <div>
          <h1>Why Online Study With SchoolAura</h1>
          <p>
            The world is changing for the better. Because of the advancement of
            technology, geek minds have grown tired of doing more work, and
            carrying books, notebooks and how much to buy books?
          </p>
          <br />
          <p>
            Solution: Now you can find a simple solution with schoolaura. In
            these days almost everyone has a Smartphone, Tab or Laptop. So just
            open your device and start your study from anywhere anytime while
            you are travelling, sitting in the park, and etc.
          </p>
          <br />
          <p>
            Now Use your time and gain knowledge in every second and Use your
            device for right things not for waste your time
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://schoolaura.com/Content/new_assets/images/banner-2/Layer-20.png"
          alt="students-bunch"
        />
      </div>
      <div>
        <h1>
          PROVIDE <br />
          BEST EDUCATIONAL
        </h1>
      </div>
      <div className="third-row">
        <h1>
          BENEFITS OF SCHOOLAURA <br />
          FOR STUDENT
        </h1>
        <div>
          <div className="third-row1">
            <div className="third-row1-1">
              <h1>Task Activities</h1>
              <p>
                Daily assignments and tasks can be easily completed through
                online availability of information. Subject wise homework can be
                submitted online which helps students to finish their tasks
                online.
              </p>
            </div>
            <div className="third-row1-1">
              <h1>Exam Results</h1>
              <p>
                Exam and assessment results of each individual student can be
                seen. The report cards will be generated online for each
                individual student.
              </p>
            </div>
            <div className="third-row1-1">
              <h1>Notice Updates</h1>
              <p>
                The necessary announcements and updates will reach to the
                students and parents quickly.
              </p>
            </div>
          </div>
          <div className="third-row1">
            <div className="third-row1-1">
              <h1>Monitoring</h1>
              <p>
                All the essential academic and administrative tasks can be
                easily monitored, such as students profile, exam results, fee
                details, transportation details etc.
              </p>
            </div>
            <div className="third-row1-1">
              <h1>Connectivity</h1>
              <p>
                When all the information is available online, and is shared
                regularly with parents and students transparency will be
                maintained.
              </p>
            </div>
            <div className="third-row1-1">
              <h1>Planning & Sharing</h1>
              <p>
                It becomes important nowadays for students to share their
                thoughts and ideas, SchoolAura Smart Education Platform will
                provide you a perfect stage to showcase and share your brilliant
                ideas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fourth-row">
        <div>
          <img
            src="https://schoolaura.com/Content/new_assets/images/school_aura_app.jpg"
            alt="easy-access"
            className="easy-access"
          />
        </div>
        <div>
          <h1>Easy to Access with Mobile APP</h1>
          <p>
            If you're looking for easily accessible resources for your
            classroom, then you're in the right place. Online learning with the
            Android app is very easy to access. That's why we've hand-curated
            the School Aura free app and website. Easy to use and learn!
          </p>
          <br />
          <p>
            To learn online, you need to be reasonably comfortable with Smart
            Mobile Phone, Tab, Laptops, and the internet. The advantage of
            learning online via an android app is that you can pause the
            video/audio whenever you need to take notes or simply absorb what
            has been said. Another fantastic feature of online learning is that
            you can re-listen to different parts as needed, which is something
            you can't do in a live lecture!
          </p>
          <br />
          <button>Download Now</button>
        </div>
      </div>
      <div className="fifth-row">
        <div>
          <h1>
            Benefits of <br />
            Online Education
          </h1>

          <hr />
          <p>
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study. It's especially
            beneficial for students who aren't as self-sufficient or who are
            used to the traditional educational model of "teacher and class."
          </p>
          <ul>
            <li>Time and Location Flexibility</li>
            <li>Find Unlimited Course Category</li>
            <li>No Need to Carry Books</li>
            <li>Get Access in any mobile, Tab, Laptop with your credential</li>
            <li>Use your time when you are traveling, Outing and free time</li>
            <li>Exam Practice before exam</li>
          </ul>
        </div>
        <div>
          <img src="https://schoolaura.com/Content/new_assets/images/spreading/spreading.png" />
        </div>
      </div>
      <div className="six-row">
        <img
          src="https://schoolaura.com/Content/new_assets/images/spreading/Clip.png"
          alt="course-details"
        />
      </div>
      <div className="seventh-row">
        <div>
          <img
            src="https://schoolaura.com/Content/new_assets/images/happy-clients/client.png"
            alt="spreading"
          />
        </div>
        <div>
          <h1>
            We <br />
            ARE SPREADING
          </h1>
          <hr />
          <div>
            <div className="seventh-row">
              <div className="seventh-row">
                <div>
                  <img src="https://schoolaura.com/Content/new_assets/images/happy-clients/client-1.png" />
                </div>
                <div>
                  <h1>108+</h1>
                  <p>Happy School</p>
                </div>
              </div>
              <div className="seventh-row">
                <div>
                  <img src="https://schoolaura.com/Content/new_assets/images/happy-clients/client-2.png" />
                </div>
                <div>
                  <h1>58030+</h1>
                  <p>Students</p>
                </div>
              </div>
            </div>
            <div className="seventh-row">
              <div className="seventh-row">
                <div>
                  <img src="https://schoolaura.com/Content/new_assets/images/happy-clients/client-3.png" />
                </div>
                <div>
                  <h1>5360+</h1>
                  <p>Happy Parents</p>
                </div>
              </div>
              <div className="seventh-row">
                <div>
                  <img src="https://schoolaura.com/Content/new_assets/images/happy-clients/client-4.png" />
                </div>
                <div>
                  <h1>10+</h1>
                  <p>Happy Tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="eight-row">
        <div className="eight-row-1">
          <iframe
            width="600"
            height="340"
            src="https://ak.picdn.net/shutterstock/videos/1054733276/preview/stock-footage-the-girl-walks-through-the-meadow-in-thick-high-grass-and-her-hand-touches-the-tops-of-the-ears-in.webm"
            title="Embedded youtube"
          />
        </div>

        <div>
          <h1>
            VISIT OUR CAMPUS <br />
            WITH IMAGE GALLERY
          </h1>
          <hr />
          <p>
            Even slightly believable. If you are going use a passage of Lorem
            Ipsum need
          </p>
          <h1>OR WATCH WITH VIDEO</h1>
          <button>
            <i className="fas fa-play">PLAY NOW </i>
          </button>
        </div>
      </div>
      <div className="ninth-row">
        <div className="ninth-row-1">
          <div className="ninth-row-3">
            <h1 className="heading-color">About US</h1>
            <p className="para-links">
              SchoolAura Smart Education <br />
              Platform is a step towards making
              <br />
              learning better and effective for the <br />
              students and help to acheiving
              <br /> their goals.
            </p>
          </div>
          <div className="ninth-row-3">
            <h1 className="heading-color">Quick Links</h1>
            <ol>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">About Us</p>
              </li>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">Benefits</p>
              </li>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">Blogs</p>
              </li>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">Testimonials</p>
              </li>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">Features</p>
              </li>
            </ol>
          </div>
          <div className="ninth-row-3">
            <h1 className="heading-color">Help & Support</h1>
            <ol>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">Services</p>
              </li>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">Support</p>
              </li>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">Terms & condition</p>
              </li>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">Privacy Policy</p>
              </li>
              <li className="listrow">
                <FaAngleRight className="para-links1" />
                <p className="para-links">Sitemap</p>
              </li>
            </ol>
          </div>
          <div className="ninth-row-3">
            <h1 className="heading-color">Follow Us</h1>
            <div className="ninth-row-3-1">
              <div className="img5">
                <img src="https://schoolaura.com/Content/new_assets/images/footer-icon/fb.png" />
              </div>
              <div>
                <img src="https://schoolaura.com/Content/new_assets/images/footer-icon/insta.png" />
              </div>
            </div>
            <div className="ninth-row-3-1">
              <div className="img5">
                <img src="https://schoolaura.com/Content/new_assets/images/footer-icon/twitter.png" />
              </div>
              <div>
                <img src="https://schoolaura.com/Content/new_assets/images/footer-icon/whatsapp.png" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="ninth-row-1">
            <div className="ninth-row-2">
              <div className="icon">
                <FaPhoneAlt className="icon1" />
              </div>
              <div>
                <h1 className="heading-color">CaLL US</h1>
                <p className="para-color">+91-9540349392</p>
              </div>
            </div>
            <div className="ninth-row-2">
              <div className="icon">
                <FaEnvelope className="icon1" />
              </div>
              <div>
                <h1 className="heading-color">MAIL US</h1>
                <p className="para-color">contact@schoolaura.com</p>
              </div>
            </div>
            <div className="ninth-row-2">
              <div className="icon">
                <FaMapMarker className="icon1" />
              </div>
              <div>
                <h1 className="heading-color">Office Address</h1>
                <p className="para-color1">
                  E 44/3, Pocket D, Okhla Phase II, Okhla <br /> Industrial
                  Area, New Delhi, Delhi 110020,
                  <br /> India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tenth-row">
        <div>
          <p>2021 © SchoolAura. All Right Reserved</p>
        </div>
        <div>
          <p>
            Design & Development by
            <span className="span1"> Insoftlink Software </span>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Home
