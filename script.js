$(document).ready(function () {
  // get query string from url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // get value
  const namaparam = urlParams.get('n');
  let audio = new Audio('sound/weak.mp3');
  let nama = '';

  if (nama) {
    nama = namaParam;
  } else {
    nama = 'Sayang';
  }
  let stringTyped = nama + '.. <br>Selalu semangatt yaa!!';

  $('.typedd').hide();

  Swal.fire({
    html: 'Haloo ' + nama + ', Apa kabar??',
    imageUrl: 'img/gif/9cute.gif',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    confirmButtonText: 'Baikk',
    denyButtonText: 'Engga :(',
    showDenyButton: true,
  }).then((value) => {
    audio.play();
    if (value.isConfirmed) {
      swalOk2();
    } else {
      swalNo2();
    }
  });

  function swalOk2() {
    let timerInterval;
    Swal.fire({
      html: nama + ', Selamat hari valentine yaa..',
      imageUrl: 'img/gif/2cute.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 7500,
      timerProgress: true,
      showConfirmButton: false,
      didOpen: () => {
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      swalOk3();
    });
  }

  function swalOk3() {
    let timerInterval;
    Swal.fire({
      html: 'Aku beruntung bgtt selalu ada kamu dihari-hari ku..',
      imageUrl: 'img/gif/3cute.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 7500,
      timerProgress: true,
      showConfirmButton: false,
      didOpen: () => {
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      swalOk4();
    });
  }

  function swalOk4() {
    let timerInterval;
    Swal.fire({
      html:
        nama + ', Setiap detik sama kamu itu jadi momen yang nganuu bangett :D',
      imageUrl: 'img/gif/4cute.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 8000,
      timerProgress: true,
      showConfirmButton: false,
      didOpen: () => {
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      swalOk5();
    });
  }

  function swalOk4() {
    let timerInterval;
    Swal.fire({
      html:
        nama + ', makasih ya.. udah jadi sumber kebahagiaan dalam hidup aku.',
      imageUrl: 'img/gif/5cute.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 8000,
      timerProgress: true,
      showConfirmButton: false,
      didOpen: () => {
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      $('.typedd').show();
      typeText();
    });
  }

  function swalNo2() {
    let timerInterval;
    Swal.fire({
      html: nama + ', Kenapaa?? Cerita sini!!',
      imageUrl: 'img/gif/7cute.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 7500,
      timerProgress: true,
      showConfirmButton: false,
      didOpen: () => {
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      swalNo3();
    });
  }

  function swalNo3() {
    let timerInterval;
    Swal.fire({
      html:
        nama +
        ', Aku percaya kamu pasti bisa melewati ini. Kamu kuat dan tangguh.',
      imageUrl: 'img/gif/5cute.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 7500,
      timerProgress: true,
      showConfirmButton: false,
      didOpen: () => {
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      swalNo4();
    });
  }

  function swalNo4() {
    let timerInterval;
    Swal.fire({
      html: 'Uuuu sini sini... Kamu itu orang paling kuat yang aku kenal. Kamu bisa ngadepin apapun!!',
      imageUrl: 'img/gif/3cute.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 7500,
      timerProgress: true,
      showConfirmButton: false,
      didOpen: () => {
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      swalNo5();
    });
  }

  function swalNo5() {
    let timerInterval;
    Swal.fire({
      html: 'Semangat pokoknya mahh!!',
      imageUrl: 'img/gif/1cute.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 7500,
      timerProgress: true,
      showConfirmButton: false,
      didOpen: () => {
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      $('.typedd').show();
      typeText();
    });
  }

  function typeText() {
    let typed = new Typed('#typed', {
      strings: [stringTyped],
      typeSpeed: 100,
    });
  }
});
