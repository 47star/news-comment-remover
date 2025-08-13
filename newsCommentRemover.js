const observer = new MutationObserver(() => {
  const cbox = document.querySelector("#cbox_module");
  if (cbox !== undefined) {
    cbox.remove();
    observer.disconnect();
  }
});

observer.observe(
  document.body, 
  {
    childList: true, 
    subtree: true,
  },
);
