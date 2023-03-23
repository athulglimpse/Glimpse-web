let container = document.getElementById("share__container");
container.innerHTML = `
<div class="share_wrap">
    <a href="https://www.facebook.com/sharer/sharer.php?u=${
      window.location.href
    }" target="_blank">
    <img
        class="share_link-x"
        src="https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/share/fb.svg"
        alt="fb-link"
    />
    </a>
    <a href="https://twitter.com/share?url=${encodeURIComponent(
      `${window.location.href}`
    )}" target="_blank">
    <img
        class="share_link"
        src="https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/share/Twitter.svg"
        alt="twitter-link"
    />
    </a>
    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${
      window.location.href
    }" target="_blank">
    <img
        class="share_link"
        src="https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/share/linkedin.svg"
        alt="linkedin-link"
    />
    </a>
    <a onclick="copyToClipboard()" href="javascript:void(0)">
    <img
        class="share_link"
        src="https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/share/links.svg"
        alt="links-link"
    />
    </a>
</div>
`;

const copyToClipboard = async () => {
  const { ClipboardItem } = window;
  const linkCopiedText = document.getElementById("link-copied")
  const type = "text/plain";
  const blob = new Blob([`${window.location.href}`], {
    type,
  });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data).then(
    function () {
      console.log("copied");
      linkCopiedText.style.opacity = "1"
      setTimeout(()=>{
        linkCopiedText.style.opacity = "0"
      },2000)
    },
    function () {
      console.log("failed");
    }
  );
};
