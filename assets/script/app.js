const observer = new IntersectionObserver(entries => {
  console.log("masup 09")
  entries.forEach(entry => {
    console.log("masup 1 " + entry.intersectionRatio);
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('show-state');
      // entry.target.classList.remove('hide-state');
	  } else {
      // entry.target.classList.remove('show-state');
      // entry.target.classList.add('hide-state');
    }

    // We're not intersecting, so remove the class!
  });
});



document.querySelectorAll('.hide-state').forEach((element)=> observer.observe(element));
document.querySelectorAll('.hide-l').forEach((element)=> observer.observe(element));
document.querySelectorAll('.hide-r').forEach((element)=> observer.observe(element));
