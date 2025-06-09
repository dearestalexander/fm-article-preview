// const shareButton = document.getElementById('share-btn');
const shareButtonKLX = document.getElementById('share-btn-klx');
const shareButtonWR = document.getElementById('share-btn-wr');
const shareButtonCRF = document.getElementById('share-btn-crf');
const shareButtonEXC = document.getElementById('share-btn-exc');

const shareMenuKLX = document.getElementById('share-menu-klx');
const shareMenuWR = document.getElementById('share-menu-wr');
const shareMenuCRF = document.getElementById('share-menu-crf');
const shareMenuEXC = document.getElementById('share-menu-exc');

const shareTriangleKLX = document.getElementById('share-triangle-klx');
const shareTriangleWR = document.getElementById('share-triangle-wr');
const shareTriangleCRF = document.getElementById('share-triangle-crf');
const shareTriangleEXC = document.getElementById('share-triangle-exc');



shareButtonKLX.addEventListener('click', function() {
    if (shareMenuKLX.classList.contains('hidden')) {
      shareMenuKLX.classList.remove('hidden');
      shareTriangleKLX.classList.remove('hidden');
    } else {
      shareMenuKLX.classList.add('hidden');
      shareTriangleKLX.classList.add('hidden');
    }
});

shareButtonWR.addEventListener('click', function() {
    if (shareMenuWR.classList.contains('hidden')) {
      shareMenuWR.classList.remove('hidden');
      shareTriangleWR.classList.remove('hidden');
    } else {
      shareMenuWR.classList.add('hidden');
      shareTriangleWR.classList.add('hidden');
    }
});

shareButtonCRF.addEventListener('click', function() {
    if (shareMenuCRF.classList.contains('hidden')) {
      shareMenuCRF.classList.remove('hidden');
      shareTriangleCRF.classList.remove('hidden');
    } else {
      shareMenuCRF.classList.add('hidden');
      shareTriangleCRF.classList.add('hidden');
    }
});

shareButtonEXC.addEventListener('click', function() {
    if (shareMenuEXC.classList.contains('hidden')) {
      shareMenuEXC.classList.remove('hidden');
      shareTriangleEXC.classList.remove('hidden');
    } else {
      shareMenuEXC.classList.add('hidden');
      shareTriangleEXC.classList.add('hidden');
    }
});