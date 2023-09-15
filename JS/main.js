
// show đăng nhập
        const login = document.querySelector('.js-login')
        const modal = document.querySelector('.js-modal')
        const closelogin = document.querySelector('.js-fa-xmark')
        const modalelement = document.querySelector('.js-modal-element')
        const modalcontainer = document.querySelector('.js-modal-container')

        // Hiển thị modal đăng nhập
        function showlogin() {
            modal.classList.add('open')
        }

        // Ẩn modal đăng nhập
        function closeshow() {
            modal.classList.remove('open')
        }

        // click mở modal
        login.addEventListener('click',showlogin)

        // click đóng modal
        closelogin.addEventListener('click',closeshow)
        modalelement.addEventListener('click',closeshow)

        // ngăn sự nổi bọt (khi click vào form đăng nhập ko bị đóng)
        modalcontainer.addEventListener('click',function(event) {
            event.stopPropagation()
        })
// End show Đăng nhập

// show đăng ký
        const logdk = document.querySelector('.js-logout')
        const modal_dk = document.querySelector('.js-modal-dk')
        const closedk = document.querySelector('.js-fa-xmark-dk')
        const modalelement_dk = document.querySelector('.js-modal-element-dk')
        const modalcontainer_dk = document.querySelector('.js-modal-container-dk')

    // Hiển thị modal đăng ký
        function showlogout() {
            modal_dk.classList.add('open')
        }   

        // Ẩn modal đăng nhập
        function closeout() {
            modal_dk.classList.remove('open')
        }

        // click mở modal
        logdk.addEventListener('click',showlogout)

        // click đóng modal
        closedk.addEventListener('click',closeout)
        modalelement_dk.addEventListener('click',closeout)

        // ngăn sự nổi bọt (khi click vào form đăng nhập ko bị đóng)
        modalcontainer_dk.addEventListener('click',function(event) {
            event.stopPropagation()
        })
// End show Đăng ký

// Ẩn Đăng ký và Đăng Nhập

        const namehide = document.querySelector('.js-header__name-sign ')

        // ẩn thẻ đăng ký và đăng nhập 
        function hidename() {
        namehide.classList.add('header__name-sign-hide')
        namehide.classList.remove('header__name-sign-show')
        }

        login.addEventListener('click',hidename)
        logdk.addEventListener('click',hidename)

        // hiện lại thẻ đăng nhập và đăng ký
        function closehide() {
            namehide.classList.remove('header__name-sign-hide')
            namehide.classList.add('header__name-sign-show')
        }

        closedk.addEventListener('click',closehide)
        closelogin.addEventListener('click',closehide)
        modalelement.addEventListener('click',closehide)
        modalelement_dk.addEventListener('click',closehide)
// End Ẩn Đăng ký và Đăng Nhập

// mở form đăng ký 

        const dangky = document.querySelector('.js-modal-modify-link-item')

        function showdk() {
            modal_dk.classList.add('open')
            modal.classList.remove('open')
        }

        dangky.addEventListener('click',showdk)

// mở form đăng nhập
        const dangnhap = document.querySelector('.js-modal-modify-link-item-dn')

        function showdn() {
            modal.classList.add('open')
            modal_dk.classList.remove('open')
        }

        dangnhap.addEventListener('click',showdn)


// Ẩn Password

        const eye = document.querySelector('.js-fa-eye')
        const eyeslash = document.querySelector('.js-fa-eye-slash')
        function hideye() {
            eye.classList.remove('hide-pass')
            eyeslash.classList.add('hide-pass')
        }

        eyeslash.addEventListener('click',hideye)

        // 
        function showeyelash() {
            eyeslash.classList.remove('hide-pass')
            eye.classList.add('hide-pass')
        }

        eye.addEventListener('click',showeyelash)


// slider changeImage

var index = 1;
changeImage = function() {
    var imgs = ['/img/qc.jpg','/img/qc2.jpg','/img/img-shoes3.jpg'];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index == imgs.length){
        index = 0;
    }
}



const jsbxchevronleft = document.querySelector('.js-bx-chevron-left')
const jsbxchevronright = document.querySelector('.js-bx-chevron-right')
const jssliderimg = document.querySelector('.js-slider-img')


jsbxchevronright.addEventListener('click',changeImage)

jsbxchevronleft.addEventListener('click',function() {
    var imgs = ['/img/qc.jpg','/img/qc2.jpg','/img/img-shoes3.jpg'];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index == imgs.length){
        index = 0;
    }
})

setInterval(changeImage,3500);


// Page

