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
    para: "With TikTok seemingly outperforming Instagram in recent months, the latter is now getting the show on the road to",
    title: "Instagram has launched its Reels feature",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/03_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  4: {
    para: "A Google My Business profile is essential for local SEO. It’s free to set up and will enable you to appear in ",
    title: "Why Google My Business is Very Important",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/04_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  5: {
    para: "Social media – and effective use of video in social media channels – is an opportunity that no marketer ",
    title: "Effective Social Media Video Content",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/05_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  6: {
    para: "Here’s an answer I sent to one of my students in Massachusetts: – If you want to verify a brand on Facebook",
    title: "How to verify your Facebook and Instagram page",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/06_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  7: {
    para: "In an attempt to stave off and even put a stop to spam, hate speech, threats, abuse, and other unwelcome remarks",
    title: "Twitter has finally launched its reply-limiting feature",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/07_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
  8: {
    para: "Brands are being forced to ditch in-person events, workshops, seminars, and conferences due to following safety",
    title: "How can brands evolve their marketing amid Covid-19",
    img: "https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/08_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
  },
};
// BLOGS CARD
console.log(Object.keys(blogs));
let blogs_collection = document.querySelector(".blog-collections");
blogs_collection.innerHTML = Object.keys(blogs)
  .map(
    (id) =>
      `
  <div class="blog-card__container">
    <div class="blog-image__wrap">
      <img
        src=${blogs[id].img}
        alt="blog 1"
      />
    </div>
    <div class="topic_wrap">
      <div class="topic-author_wrap">
        <div class="author-img">
          <img
            src='https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/Ariane.png'
            alt="author image"
          />
        </div>
        <div class="author-info_wrap">
          <p class="author-name">Ariane Magante</p>
          <small class="topic-date">${blogs[id].date}</small>
        </div>
      </div>
      <hr />
      <a href="/pages/blogs/${blogs[id].title
        .replace(/\s+/g, "-")
        .toLowerCase()}.html" class="topic-info_wrap">
      
        <h2 class="topic_title gradient-text">
            ${blogs[id].title}        
        </h2>
            
        <small class="topic_desc">
          ${blogs[id].para}...
        </small>
      </a>
      <img
        src="https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/blog/blog-dedicated/menu.svg"
        alt="menu"
        class="menu-icon"
      />
    </div>
  </div>
`
  )
  .join(" ");
