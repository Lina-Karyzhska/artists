document.querySelector('.copy').addEventListener('click', function () { 
            let copyText = document.querySelector('.media__copytext');
            copyText.select();
            document.execCommand('copy');
            copyText.blur();
            document.querySelector('.media__hint').classList.add('media__hint_show');
            setTimeout(() => {
                document.querySelector('.media__hint').classList.remove('media__hint_show')
            }, 1500)
        })