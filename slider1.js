$(() => {
    const images = ['tarla.jpg', 'shefeq.jpg', 'payiz.jpg' , 'park.jpg' , 'okean.jpg', 'lale.jpg', 'kenquru.jpg', 'ay.jpg', 'eynek.jpg', 'baliqci.jpg']
    const w = $(window).width()
    const slider = $("#slider")
    let x = 0
    slider
        .css({ position: 'relative' })
        .click(function(e) {
            if ( e.pageX > w / 2 ) change(1)
            else change(-1)
        })
        .append(`<div id="slide"></div>`)
        .append(`<div id="thumb"></div>`)
        .append(`<div id="load"></div>`)
    const slide = $("#slide")
    const load = $("load")
    slide.css({
        width: '100%',
        height: '100%'
    })
    const thumb = $("#thumb")
    thumb
        .css({
            position: 'absolute',
            bottom: 0,
            width: '100%',
            textAlign: 'center'
        })
    images.forEach(img => thumb.append(`<img src="img/${img}" />`))
    $("#thumb>img")
        .css({
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '2px solid #fff',
            boxShadow: '0 0 2px #000',
            margin: '5px',
            cursor: 'pointer'
        })
        .click(function(e) {
            e.stopPropagation()
            x = $(this).index()
            change(0)
        })

        

    let timer = setTimeout(change, 0, 0)

    function change(dir = 1) {
        clearTimeout(timer)
        x += dir
        if(x > images.length - 1) x = 0
        if(x < 0) x = images.length - 1
        slide
            .fadeOut(300, () => {
                slide
                    .css({ background: `url('img/${images[x]}') center/cover`})
                    .fadeIn(300, () => {
                        slider.css({ background: `url('img/${images[x]}') center/cover`})
                    })
            })
        
                        
            
        timer = setTimeout(change, 3000)
    }

})



// $(()=>{
//     const path = '../img/'
//     // const img = ['7.jpg', '3.jpg', '8.jpg', '5.jpg', '1.jpg', '2.jpg', '4.jpg', '6.jpg']
//     const img = ['tarla.jpg', 'shefeq.jpg', 'payiz.jpg' , 'park.jpg' , 'okean.jpg', 'lale.jpg', 'kenquru.jpg', 'ay.jpg', 'eynek.jpg', 'baliqci.jpg']
//     let width = $("body").width()
//     let x = 0
//     const slider = $("#slider")
//     slider
//         .css({
//             position: 'relative',
//             height: '500px',
//             boxShadow: '0 0 10px #333',
//             overflow: 'hidden'
//         })
//         .append(`<div id="slide"></div>`)
//         .append(`<div id="thumb"></div>`)
//         .append(`<div id="load"></div>`)
//         .click((e)=>{
//             if(e.pageX > width / 2) change(1)
//             else change(-1) 
//         })
    
//     const slide = $("#slide")
//     const thumb = $("#thumb")
//     const load = $("#load")
//     load.css({
//         position:'absolute',
//         height: '10px',
//         width: 0,
//         background:'rgba(255,255,255,.7)'

//     })
//     slide.css({
//         position: ' absolute', 
//         height: '100%',
//         width: '100%'
//     })
//     img.forEach(image => {
//         thumb.append(`<img src="${path}${image}" alt="">`)
//     } )

//     thumb.css({
//         position: ' absolute', 
//         width: '100%',
//         bottom: 0,
//         display: 'flex',
//         justifyContent: 'center'
//     })
//     $("#thumb>img")
//         .css({
//             width: '30px',
//             height: '30px',
//             objectFit: 'cover',
//             borderRadius: '50%',
//             border: '1px solid #fff',
//             boxShadow: '0 0 5px #333',
//             margin: '5px'
//         })
//         .click(function(e){
//             e.stopPropagation();
//             x = $(this).index()
//             change(0)
//         })

//     let timer = setTimeout(change, 0, 0);

//     function change(dir) {
//         clearTimeout(timer)
//         x += dir
//         if (x < 0) x = img.length - 1
//         if (x > img.length - 1) x = 0

//         slide
//             .css({
//                 left: dir * 100 + '%', 
//                 background: `url('${path}${img[x]}') center/cover` 
//             })
//             .animate({
//                 left: 0
//             }, 500, () => {
                
//                 slider.css({ background: `url('${path}${img[x]}') center/cover` })
                
//                 load
//                     .css({width:0})
//                     .stop()
//                     .animate({

//                         width:'100%'
//                     },3000)
//             })
            
//         timer = setTimeout(change, 3000, 1);
//     }
// })