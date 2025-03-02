import { Swiper, SwiperSlide } from "swiper/react";
import PreparingPortfolio from "./PreparingPortfolio";

const technologyStack = [
  {
    id: 1,
    icon: "/images/html_icon.svg",
    name: "HTML5"
  },
  {
    id: 2,
    icon: "/images/css_icon.svg",
    name: "CSS3"
  },
  {
    id: 3,
    icon: "/images/scss_icon.svg",
    name: "SASS/SCSS"
  },
  {
    id: 4,
    icon: "/images/javascript_icon.svg",
    name: "Javascript"
  },
  {
    id: 5,
    icon: "/images/jquery_icon.svg",
    name: "JQuery"
  },
  {
    id: 6,
    icon: "/images/typescript_icon.svg",
    name: "Typescript"
  },
  {
    id: 7,
    icon: "/images/react_icon.svg",
    name: "React Vite"
  },
  {
    id: 8,
    icon: "/images/vuetify_icon.svg",
    name: "Vuetify3"
  }
];

const portfolioList = [
  {
    id: 1,
    thumbnail: "what_movie_thumbnail.png",
    url: "https://what-movie-ten.vercel.app/",
    name: "What Movie?",
    description: "영화 정보 사이트"
  },
  {
    id: 2,
    thumbnail: "",
    url: "",
    name: "",
    description: ""
  }
];

const ProfileContainer = () => {
  return (
    <div className="profile-container">
      <div className="profile">
        <div className="profile-box">
          <span className="profile-img-box">
            <img src="/images/profile.gif" alt="프로필 이미지" />
          </span>
          <div>
            <h5 className="title">Contact</h5>
            <ul className="profile-list">
              <li>
                <p className="name">김대식</p>
              </li>
              <li>
                <p className="email">ds500033@naver.com</p>
              </li>
              <li>
                <p className="phone">010-3813-1159</p>
              </li>
            </ul>
            <div className="my-link">
              <a
                href="https://github.com/tosioB"
                target="_blank"
                className="github-btn"
              >
                GitHub
              </a>
              <a
                href="https://pyrite-index-771.notion.site/157a7149aa5080579c66e95f67cb9f19"
                target="_blank"
                className="notion-btn"
              >
                Notion
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-detail">
        {/* 기술스택 */}
        <div className="skill">
          <h5 className="title">Skills & Tools</h5>
          <ul className="skill-list">
            {technologyStack.map((item) => {
              return (
                <li key={item.id}>
                  <span className="icon-box">
                    <img src={item.icon} />
                  </span>
                  <p className="name">{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />

        {/* 경력사항 */}
        <div className="career">
          <h5 className="title">Career</h5>
          <ul className="career-list">
            <li>
              <p className="company">
                <span>- IEA</span>
                <span className="employment-period">2021.07 ~ 2024.05</span>
              </p>
              <p className="history">
                다양한 고객사의 웹 퍼블리싱 구축 및 운영을 담당하며, 사용자
                경험과 접근성을 고려한 웹 환경을 구현
              </p>
            </li>
          </ul>
        </div>
        <hr />

        {/* 포트폴리오 */}
        <div className="portfolio">
          <h5 className="title">Portfolio</h5>
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              1800: {
                slidesPerView: 4
              },
              1440: {
                slidesPerView: 3
              },
              512: {
                slidesPerView: 2
              }
            }}
          >
            {portfolioList.map((portfolio) =>
              portfolio.url ? (
                <SwiperSlide key={portfolio.id}>
                  <a href={portfolio.url}>
                    <img
                      src={`/images/${portfolio.thumbnail}`}
                      alt={portfolio.name}
                    />
                    <div className="portfolio-detail">
                      <p className="name">{portfolio.name}</p>
                      <p className="description">{portfolio.description}</p>
                    </div>
                  </a>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={portfolio.id}>
                  <PreparingPortfolio />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
