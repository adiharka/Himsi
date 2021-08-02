const list = document.querySelectorAll('.thumb-item');
    const modal = document.querySelector('.modal#info-bidang');
    const btnkritik = document.querySelector('#button-kritik');
    const modalform = document.querySelector('.modal#kritik-saran');
    const makestaf = (data) => {
      const a = document.createElement('div')
      a.classList.add('staf');
      const b = document.createElement('img')
      b.setAttribute('src', 'krisar/' + data.img);
      const c = document.createElement('div');
      c.classList.add('staf-text');
      const e = document.createElement('span');
      e.classList.add('name');
      e.innerHTML = data.nama;
      const f = document.createElement('span');
      f.classList.add('title');
      f.innerHTML = data.jabatan;
      c.appendChild(e);
      c.appendChild(f);
      const g = document.createElement('div');
      g.classList.add('angk');
      g.innerHTML = data.angkatan;
      a.appendChild(b);
      a.appendChild(c);
      a.appendChild(g);
      return a
    }
    const show = (modal, data) => {
      modal.querySelector('#nama-bidang').innerHTML = data.nama;
      modal.querySelector('#desc-bidang').innerHTML = data.desc;
      data.staff.forEach(stap => {
        modal.querySelector('.modal-content').appendChild(makestaf(stap))
      })
    }
    let dataselected = {};
    list.forEach(item => {
      item.addEventListener('click', () => {
        modal.classList.add('active');
        modal.querySelector('.modal-content').scrollTop = 0
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelectorAll('.modal-content .staf').forEach(staff => {
          staff.remove();
        })
        switch (item.dataset.bidang) {
          case 'psdm':
            show(modal, data.psdm)
            dataselected = data.psdm
            break;
          case 'ristek':
            show(modal, data.ristek)
            dataselected = data.ristek
            break;
          case 'hublu':
            show(modal, data.hublu)
            dataselected = data.hublu
            break;
          case 'sera':
            show(modal, data.sera)
            dataselected = data.sera
            break;
          case 'akademik':
            show(modal, data.akademik)
            dataselected = data.akademik
            break;
          case 'kestari':
            show(modal, data.kestari)
            dataselected = data.kestari
            break;
          case 'bph':
            show(modal, data.bph)
            dataselected = data.bph
            break;
          case 'media':
            show(modal, data.media)
            dataselected = data.media
            break;
          default:
            break;
        }
      })
    });

    document.querySelectorAll('.close-overlay').forEach(overlay => {
      overlay.addEventListener('click', () => {
        overlay.parentElement.classList.remove('active')
        document.querySelector('body').style.overflowX = 'scroll';
      })
    })
    btnkritik.addEventListener('click', () => {
      setTimeout(() => {
        modal.classList.remove('active');
        modalform.classList.add('active');
        modalform.querySelector('#kritik-bidang').innerHTML = dataselected.nama;
      }, 500)
    })