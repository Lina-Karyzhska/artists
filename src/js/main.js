document.querySelector('.copy').addEventListener('click', function () { 
            let copyText = document.querySelector('.about-us__copytext');
            copyText.select();
            document.execCommand('copy');
            copyText.blur();
            document.querySelector('.about-us__hint').classList.add('about-us__hint_show');
            setTimeout(() => {
                document.querySelector('.about-us__hint').classList.remove('about-us__hint_show')
            }, 1500)
            
        })