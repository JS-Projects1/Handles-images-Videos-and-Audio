let inputImg = document.getElementById('input-image')
let img = document.getElementById('img')

let inputVideo = document.getElementById('input-video')
let video = document.getElementById('video')

let inputAudio = document.getElementById('input-audio')
let audio = document.getElementById('audio')

let btnRecord = document.getElementById('button-recorder')
let record = document.getElementById('recorder')

let mediaRecorder;
let isRecorder = false
let audioChunks = []




inputImg.addEventListener('change', (e) => {
    const file = e.target.files[0]

    if (file.type.startsWith('image/')) {
        // const reader = new FileReader()
        // reader.readAsDataURL(file)

        // reader.onload = (e) => {
        //     img.src = e.target.result
        // }
        const imgUrl = URL.createObjectURL(file);
        img.src = imgUrl

    } else {
        alert('please enter Image')
    }
})

inputVideo.addEventListener('change', (e) => {
    const file = e.target.files[0]

    if (file.type.startsWith('video/')) {
        const videoUrl = URL.createObjectURL(file)
        video.src = videoUrl
        video.autoplay = true;
        video.controls = true;
    } else {
        alert('please enter Video')
    }
})

inputAudio.addEventListener('change', (e) => {
    const file = e.target.files[0]

    if (file.type.startsWith('audio/')) {
        const audioUrl = URL.createObjectURL(file)
        audio.src = audioUrl
        audio.autoplay = true;
        audio.controls = true;
    } else {
        alert('please enter Audio')
    }
})

btnRecord.addEventListener('click', async () => {
    if (!isRecorder) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            mediaRecorder = new MediaRecorder(stream)

            mediaRecorder.ondataavailable = (event) => audioChunks.push(event.data)

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' })
                const recordUrl = URL.createObjectURL(audioBlob)
                record.src = recordUrl
                audioChunks = []
            }

            mediaRecorder.start()
            isRecorder = true
            btnRecord.textContent = 'Stop Record'
        } catch (error) {
            alert('يرجى السماح بالوصول إلى الميكروفون.');
        }
    } else {
        mediaRecorder.stop()
        isRecorder = false
        btnRecord.textContent = 'Start Record'
    }
})


