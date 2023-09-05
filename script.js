
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");

const openModalImages = document.querySelectorAll(".openModalImg");

openModalImages.forEach(image => {
  image.addEventListener("click", function() {
    const desc = this.getAttribute("data-desc");
    const imgSrc = this.getAttribute("data-img");
    
    modalImage.src = imgSrc;
    modalDescription.textContent = desc;
    modal.style.display = "block";
  });
});

document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
});


// modal logic:

// Citation: https://css-tricks.com/snippets/css/typewriter-effect/
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
      var period = elements[i].getAttribute('data-period');
      var toRotate = elements[i].getAttribute('data-type');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};





const data = [
  {
    img: "res/img/MOSAIC.png",
    desc: "Mosaic-fyer (python, numpy)",
    link: "https://github.com/aReebok/mosaifyer"
  },
  {
    img: "res/demo/bp_demo.gif",
    desc: "AWS Textract GUI",
    link: "https://gist.github.com/aReebok/0736d2f89dd3fe044db8ecbba6fc3449"
  },
  {
    img: "res/img/scm-gif.gif",
    desc: "C Lang interpreter for Scheme",
    link: "https://github.com/aReebok/scheme-interepreter-in-c"
  },
  {
    img: "res/img/my-doodle.jpg",
    desc: "Description 4",
    link: "https://github.com/project1"
  },
  {
    img: "res/img/my-doodle.jpg",
    desc: "Description 5",
    link: "https://github.com/project2"
  },
  {
    img: "res/img/my-doodle.jpg",
    desc: "Description 6",
    link: "https://github.com/project3"
  }
];

openModalImages.forEach((image, index) => {
  image.addEventListener("click", function() {
    const desc = data[index].desc;
    const link = data[index].link;
    const imgSrc = data[index].img;

    modalDescription.innerHTML = `<p>${desc}  |   <a href="${link}" target="_blank">GitHub</a></p> `;
    modalImage.src = imgSrc;
    modal.style.display = "block";
  });
});

document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
});
