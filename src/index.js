gsap.registerPlugin(ScrollTrigger);

const tabs = document.querySelectorAll(".tab");
const images = document.querySelectorAll(".tab-image");

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".why-bpmp",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
  },
});

tabs.forEach((tab, i) => {
  const image = images[i];
  const prevImage = images[i - 1];
  const prevTab = tabs[i - 1];

  tl1
    .addLabel("step" + i)
    .to(
      tab,
      {
        opacity: 1,
        duration: 0.5,
        background: "white",
        ease: "power2.out",
      },
      "+=0.3"
    )
    .to(image, { opacity: 1, duration: 1, ease: "power2.out" }, "<");

  if (prevImage) {
    tl1.to(prevImage, { opacity: 0, duration: 1 }, "<");
  }

  if (prevTab) {
    tl1.to(
      prevTab,
      {
        opacity: 0.5,
        duration: 0.5,
      },
      "<"
    );
  }
});

// --- THIS IS THE UPDATED CLICK HANDLER ---

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    // 1. Get the time of the label (the start of the transition)
    const labelTime = tl1.labels["step" + i];

    // fade-in animation (duration: 0.5s) is complete.
    const targetTime = labelTime + 0.8;

    // 3. Make sure our targetTime doesn't exceed the timeline's total duration
    const safeTime = Math.min(targetTime, tl1.duration());

    // 4. Calculate the progress (0 to 1) at this new "safeTime"
    const targetProgress = safeTime / tl1.duration();

    // 5. Get the ScrollTrigger instance
    const st = tl1.scrollTrigger;

    // 6. Calculate the final scroll position based on the new progress
    const scrollPos = st.start + (st.end - st.start) * targetProgress;

    // 7. Scroll smoothly to that position
    window.scrollTo({
      top: scrollPos,
      behavior: "smooth",
    });
  });
});
