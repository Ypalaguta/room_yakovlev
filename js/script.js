const handleScroll = (ev) => {
        let mainItem = document.querySelector('#menu-main'), bottomItem = document.querySelector('#menu-bottom'),
            mainClassName = mainItem.className, bottomClassName = bottomItem.className,
            scrollValue = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollValue < document.querySelector('.face-img').offsetHeight) {
            if (mainClassName.includes('active')) {
                mainItem.className = mainClassName.replace(' active', '');
            }
            if (!bottomClassName.includes('inactive')) {
                bottomClassName += ' inactive';
                bottomItem.className = bottomClassName;
            }
        } else if(scrollValue > bottomItem.offsetTop) {
            if (mainClassName.includes('active')) {
                mainItem.className = mainClassName.replace(' active', '');
            }
            if (bottomClassName.includes('inactive')) {
                bottomItem.className = bottomClassName.replace(' inactive', '');
            }
        } else {
            if (!mainClassName.includes('active')) {
                mainClassName += ' active';
                mainItem.className = mainClassName;
            }
            if (!bottomClassName.includes('inactive')) {
                bottomClassName += ' inactive';
                bottomItem.className = bottomClassName;
            }
        }
    },
    toggleStages = ev => {
        const stagesBlock = $('.project-stages-list');
        let height = ((stagesBlock.height()) ? 0 : 1);
        if(height) stagesBlock.find('li').each((n,e)=>{height+=e.offsetHeight})
        console.log(TweenLite.to(stagesBlock, 1, {height}));
    },
    toggleCompositions = ev => {
    //to calc el height, we need to calc all their li items
        const compositionsBlock = $('.project-composition-list');
        let height = ((compositionsBlock.height()) ? 0 : 1);
        console.log(height)
        if(height) compositionsBlock.find('li').each((n,e)=>{height+=e.offsetHeight})
        console.log(height)
        console.log(TweenLite.to(compositionsBlock, 1, {height}));
    },
    dictionary = {

    },
    _ = word => {
    return dictionary[word] || word;
    };

$(document).ready(() => {
    $('*[data-text]').each((n,e)=>{
        $(e).html(_($(e).data('text')))
    })
    $('body')
        .on('click', '.go-top', ev => window.scrollBy(0, -99999))
        .on('click', '#btn-stages', toggleStages)
        .on('click', '#btn-composition', toggleCompositions)
        .on('click', '.contacts-click', ()=>{$('.contacts-toggle').removeClass('hidden'); $('#contacts').addClass('hidden');})
        .on('click', '#contacts', ()=>{$('.contacts-toggle').removeClass('hidden'); $('#contacts').addClass('hidden');})
    $(window).on('scroll', handleScroll)

    $('#bottom-slick').slick({
        dots: true,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1
    });
})