let inputImg = document.getElementById('input-image')
let img = document.getElementById('img')

let inputVideo = document.getElementById('input-video')
let video = document.getElementById('video')

let inputAudio = document.getElementById('input-audio')
let audio = document.getElementById('audio')


inputImg.addEventListener('change', (e) => {
    const file = e.target.files[0]

    if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = (e) => {
            img.src = e.target.result
        }
    } else {
        alert('please enter Image')
    }
})

inputVideo.addEventListener('change', (e) => {
    const file = e.target.files[0]

    if (file.type.startsWith('video/')) {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = (e) => {
            video.src = e.target.result
            video.autoplay = true;
            video.controls = true;
        }
    } else {
        alert('please enter Video')
    }
})

inputAudio.addEventListener('change', (e) => {
    const file = e.target.files[0]

    if (file.type.startsWith('audio/')) {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = (e) => {
            audio.src = e.target.result
            audio.autoplay = true;
            audio.controls = true;
        }
    } else {
        alert('please enter Audio')
    }
})