// Blog slider
const figOne = document.querySelector(".fig-one");
const figTwo = document.querySelector(".fig-two");
const figThree = document.querySelector(".fig-three");

figTwo.addEventListener("click", () => {
  mutator(figOne, figTwo);
});

figThree.addEventListener("click", () => {
  mutator(figOne, figThree);
});

const mutator = (item1, item2) => {
  let idx1 = item1.getAttribute("data-id");
  let idx2 = item2.getAttribute("data-id");
  // IMAGES
  let img1 = item1.querySelector("img");
  let img2 = item2.querySelector("img");

  // CONTENT
  let blogPara = item1.querySelector(".blog-para");
  let blogTitle = item1.querySelector(".blog-title");
  let blogLink = item1.querySelector("a");
  blogPara.innerHTML = blogs[idx2].para;
  blogTitle.innerHTML = blogs[idx2].title;
  blogLink.setAttribute(
    "href",
    `/pages/blogs/${blogs[idx2].title.replace(/\s+/g, "-").toLowerCase()}.html`
  );
  img1.setAttribute("src", blogs[idx2].img);
  img2.setAttribute("src", blogs[idx1].img);
  item1.setAttribute("data-id", idx2);
  item2.setAttribute("data-id", idx1);
};

const blogs = {
  1: {
    para: "The popularity of TikTok spread like wildfire with 1 billion monthly active users to date. ",
    title: "Why You Should Do TikTok For Your Business Right Here Right Now",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/01_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  2: {
    para: "Social media is constantly evolving and producing new opportunities to build a deeper connection with the audience.",
    title: "Social Media Trends To Watch Out For In 2022",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/02_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  3: {
    para: "In an attempt to stave off and even put a stop to spam, hate speech, threats, abuse, and other unwelcome remarks, the platform is giving users",
    title: "Twitter has finally launched its reply-limiting feature",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/07_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },

  4: {
    para: "A Google My Business profile is essential for local SEO. It’s free to set up and will enable you to appear in local search results for",
    title: "Why Google My Business is Very Important",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/04_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  5: {
    para: "Social media – and effective use of video in social media channels – is an opportunity that no marketer should miss to grow reach and",
    title: "Effective Social Media Video Content",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/05_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  6: {
    para: "Here’s an answer I sent to one of my students in Massachusetts: – If you want to verify a brand on Facebook and Instagram you need to:",
    title: "How to verify your Facebook and Instagram page",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/06_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  7: {
    para: "With TikTok seemingly outperforming Instagram in recent months, the latter is now getting the show on the road to stay ahead of the game",
    title: "Instagram has launched its Reels feature",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/03_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  8: {
    para: "Brands are being forced to ditch in-person events, workshops, seminars, and conferences due to following safety and health protocols",
    title: "How can brands evolve their marketing amid Covid-19",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/08_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
};
