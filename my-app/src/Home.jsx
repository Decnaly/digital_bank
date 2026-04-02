import React from "react";
import background from "../images/bg-intro-desktop.svg?url";
import mockup from "../images/image-mockups.png";
import icon_budgeting from "../images/icon-budgeting.svg";
import icon_onboarding from "../images/icon-onboarding.svg";
import icon_api from "../images/icon-api.svg";
import icon_online from "../images/icon-online.svg";
import confetti from "../images/image-confetti.jpg";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import bg_mobile from "../images/bg-intro-mobile.svg?url";

function Home() {
  const articles = [
    {
      img: confetti,
      alt: "Confetti",
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees.",
      text: "The world is getting smaller, and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
    },
    {
      img: currency,
      alt: "Currency",
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money.",
      text: "Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you ... "
    },
    {
      img: restaurant,
      alt: "Restaurant",
      author: "By Wilson Hutton",
      title: "Take your Digitalbank card wherever you go.",
      text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even ... "
    },
    {
      img: plane,
      alt: "Plane",
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: "After a lot of hardwork by the whole team, we're excited to launch our closed Beta. it's easy to request an invite through ..."
    }
  ];

  const features = [
    {
      img: icon_online,
      alt: "Online Banking",
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finance wherever you are."
    },
    {
      img: icon_budgeting,
      alt: "Budgeting",
      title: "Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    {
      img: icon_onboarding,
      alt: "Onboarding",
      title: "Onboarding",
      text: "We don't do branches. Open your account in minutes online and start taking controls of your finances right away."
    },
    {
      img: icon_api,
      alt: "API Access",
      title: "API Access",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
  ];

  return (
    <main className="relative top-0 left-0 w-full h-full">
      <div className="overflow-hidden hidden lg:block">
        <img
          src={background}
          alt="Background"
          className="absolute -top-[170px] -right-[300px] w-[80%] object-cover -z-10"
        />
      </div>
      <div className="overflow-hidden block lg:hidden">
        <img
          src={bg_mobile}
          alt="Background Mobile"
          className="absolute  w-[100%] object-cover -z-10 -top-[100px] "
        />
      </div>
      <section
        className="flex flex-col-reverse lg:flex lg:flex-row items-center justify-between  bg-no-repeat p-6 lg:p-20 m-2 max-h-screen max-w-screen  bg-right-top bg-contain
      "
      >
        <div>
          <h1 className=" text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
            Next generation <br /> digital banking
          </h1>
          <p className="text-gray-500 mb-6">
            Take your financial life online. Your Digitalbank account <br />{" "}
            will be a one-stop-shop for spending, saving, <br /> budgeting,
            investing, and much more.
          </p>
          <button className="bg-gradient-to-t from-[#2CBBC2] to-[#31CF6D] text-white px-4 py-2 rounded-lg">
            Request Invite
          </button>
        </div>
        <div className="relative lg:relative w-[110%] -top-[80px] lg:w-[65%] lg:-top-[30px] lg:-right-[210px] lg:block">
          <img src={mockup} alt="Intro" />
        </div>
      </section>
      <section className="flex flex-col p-6 lg:p-20 m-2  max-w-screen">
        <div>
          <h1 className="text-5xl font-semibold text-gray-800 mb-6">
            Why choose Digitalbank?
          </h1>
          <p className="text-gray-500 mb-6">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br /> Control your finances like never before.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between gap-10">
          {features.map((feature, index) => (
            <div key={index} className="">
              <img className="p-2 m-2" src={feature.img} alt={feature.alt} />
              <div className="p-1 m-2">
                <h1 className="text-2xl font-semibold text-gray-600 mb-6">
                  {feature.title}
                </h1>
                <p className="text-gray-500 mb-6 mt-4">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col p-6 lg:p-20 m-2  max-w-screen">
        <div>
          <h1 className="text-5xl font-semibold text-gray-700 mb-6">
            Latest Articles
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row gap-6  m-2">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col w-[100%] lg:[30%] gap-6">
              <div><img className="w-full h-[200px] object-cover rounded" src={article.img} alt={article.alt} /></div>
              <div>
                <p className="px-4 py-2 text-gray-500 text-[12px]">{article.author}</p>
                <h3 className="px-4 py-1 text-gray-700 text-[20px]">{article.title}</h3>
                <p className="px-4 py-1 text-gray-500 mb-6 mt-4">{article.text}</p>
              </div>
            </div> 
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
