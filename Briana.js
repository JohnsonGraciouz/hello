// Rising text observer
const riseObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("rise");
    }
  });
  riseObserver.observe(document.querySelector("p"));

  // Heading observer
const headingObserver = new IntersectionObserver((entries) => {
    document.querySelector("h1").classList.toggle("enabled", !entries[0].isIntersecting);
  });
  headingObserver.observe(document.querySelector("#headingTrigger"));

  // Briana observer
const BrianaObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("startCrawl");
    }
},
{ threshold: 1 }
);
BrianaObserver.observe(document.querySelector("#Briana"));