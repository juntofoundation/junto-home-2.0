<template>
  <div class="confirmSubscriptionHeader">
    <!-- backdrop -->
    <div class="confirmSubscriptionHeader__content">
      <h2 class="confirmSubscriptionHeader__title">Almost there!</h2>
      <h3 class="confirmSubscriptionHeader__subtitle">
        Check your email to confirm your subscription and your spot on our
        waitlist.
      </h3>

      <!-- Link to crowdfunding page when ready -->
      <!-- <a class="removelink" href="/" target="blank">
        <div class="confirmSubscriptionHeader__action">
          <img
            src="../../../assets/images/junto-home-2.0__flame.png"
            alt=""
            class="confirmSubscriptionHeader__action--icon"
          />
          <p class="confirmSubscriptionHeader__action--text">Learn More</p>
        </div>
      </a> -->
    </div>
  </div>
</template>



 <!-- Facebook Pixel Code -->
  <script>
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "1560885634300148");
fbq("track", "PageView");
</script>
  <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1560885634300148&ev=PageView&noscript=1" /></noscript>
  <!-- End Facebook Pixel Code -->