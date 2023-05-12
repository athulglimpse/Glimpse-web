const blog = {
  1: {
    para: "The popularity of TikTok spread like wildfire with 1 billion monthly active users to date. ",
    title: "Why You Should Do TikTok For Your Business Right Here Right Now",
    img: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/01_topic.webp",
    date: "April 18, 2022",
    author: "Hashim Riyan",
    authorImg: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/HASHIM.png",
  },
  2: {
    para: "Social media is constantly evolving and producing new opportunities to build a deeper connection with the audience.",
    title: "Social Media Trends To Watch Out For In 2022",
    img: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/02_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
    authorImg: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/Ariane.png",
  },
  3: {
    para: "With TikTok seemingly outperforming Instagram in recent months, the latter is now getting the show on the road to",
    title: "Instagram has launched its Reels feature",
    img: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/03_topic.webp",
    date: "April 14, 2021",
    author: "Rayan Tarraf",
    authorImg: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/Rayan.png",
  },
  4: {
    para: "A Google My Business profile is essential for local SEO. It’s free to set up and will enable you to appear in ",
    title: "Why Google My Business is Very Important",
    img: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/04_topic.webp",
    date: "April 2, 2021",
    author: "Rayan Tarraf",
    authorImg: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/Rayan.png",
  },
  5: {
    para: "Social media – and effective use of video in social media channels – is an opportunity that no marketer ",
    title: "Effective Social Media Video Content",
    img: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/05_topic.webp",
    date: "August 27, 2022",
    author: "Simone Bangera",
    authorImg: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/SIMONE.png",
  },
  6: {
    para: "Here’s an answer I sent to one of my students in Massachusetts: – If you want to verify a brand on Facebook",
    title: "How to verify your Facebook and Instagram page",
    img: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/06_topic.webp",
    date: "April 18, 2022",
    author: "Ariane Magante",
    authorImg: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/Ariane.png",
  },
  7: {
    para: "In an attempt to stave off and even put a stop to spam, hate speech, threats, abuse, and other unwelcome remarks",
    title: "Twitter has finally launched its reply-limiting feature",
    img: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/07_topic.webp",
    date: "March 10, 2023",
    author: "Fiana Carlos",
    authorImg: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/FIA.png",
  },
  8: {
    para: "Brands are being forced to ditch in-person events, workshops, seminars, and conferences due to following safety",
    title: "How can brands evolve their marketing amid Covid-19",
    img: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/08_topic.webp",
    date: "December 22, 2021",
    author: "Fiana Carlos",
    authorImg: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/FIA.png",
  },
  // 9: {
  //   para: "One of the most notable ways in which AI is changing influencer marketing is through the use of machine learning algorithms",
  //   title: "How AI is revolutionising influencer marketing",
  //   img: "",
  //   date: "January 22, 2023",
  //   author: "Hashim Riyan",
  //   authorImg: "https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/Ariane.png",
  // },
};
// BLOG CARD
console.log(Object.keys(blog));
let blog_collection = document.querySelector(".blog-collections");
blog_collection.innerHTML = Object.keys(blog)
  .map(
    (id) =>
      `
  <div class="blog-card__container">
    <div class="blog-image__wrap">
      <img
        src=${blog[id].img}
        alt="${blog[id].title}"
      />
    </div>
    <div class="topic_wrap">
      <div class="topic-author_wrap">
        <div class="author-img">
          <img
            src='${blog[id].authorImg}'
            alt="author image"
          />
        </div>
        <div class="author-info_wrap">
          <p class="author-name">${blog[id].author}</p>
          <small class="topic-date">${blog[id].date}</small>
        </div>
      </div>
      <hr />
      <a href="/pages/blog/${id}-${blog[id].title
        .replace(/\s+/g, "-")
        .toLowerCase()}.html" class="topic-info_wrap">
      
        <h2 class="topic_title gradient-text">
            ${blog[id].title}        
        </h2>
            
        <small class="topic_desc">
          ${blog[id].para}...
        </small>
      </a>
      <img
        src="https://d3i7ke5fj3tp7c.cloudfront.net/images/blog/blog-dedicated/menu.svg"
        alt="menu icon"
        class="menu-icon"
      />
    </div>
  </div>
`
  )
  .join(" ");
