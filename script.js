/* COUNTDOWN */
const countdownEl = document.getElementById("countdown");

if (countdownEl) {
    const newYear = new Date("January 1, 2026 00:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = newYear - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        countdownEl.innerHTML =
            `${days}d ${hours}h ${mins}m ${secs}s`;
    }, 1000);
}

/* SONG DATA */
const songs = {
    1: {
        title: "யேகோவா தேவனுக்கு",
        lyrics: `யேகோவா தேவனுக்கு ஆயிரம் நாமங்கள்
எதைச் சொல்லி பாடிடுவேன்
கர்த்தாதி கர்த்தர் செய்த நன்மைகள் ஆயிரம்
கரம் தட்டி பாடிடுவேன் x 2

யெகோவா ஷாலோம் யெகோவா ஷம்மா
யெகோவா ரூவா யெகோவா ரஃப்பா x 2

யேகோவா தேவனுக்கு ஆயிரம் நாமங்கள்
எதைச் சொல்லி பாடிடுவேன்
கர்த்தாதி கர்த்தர் செய்த நன்மைகள் ஆயிரம்
கரம் தட்டி பாடிடுவேன் x 2


1. எல்ரோயிக்கு அல்லேலூயா
என்னை நீரே கண்டீரையா
ஏக்கம் எல்லாம் தீர்த்தீரையா
நான் தாகத்தோடு வந்தபோது
ஜீவத்தண்ணீர் எனக்குத் தந்து
தாகமெல்லாம் தீர்த்தீரையா x 2


2. எல்ஷடாயும் நீங்க தாங்க
சர்வ வல்ல தேவனாக
என்னை என்றும் நடத்துனீங்க
எபிநேசரும் நீங்க தாங்க
உதவி செய்யும் தேவனாக
என்னை என்றும் தாங்குவீங்க x 2`
    },
    2: {
        title: "காப்பார் உன்னைக்",
        lyrics: `காப்பார் உன்னைக் காப்பார்
காத்தவர் காப்பார்
இன்னும் இனிமேலும் காத்திடுவார்
கலங்காதே மனமே காத்திடுவார் x 2

1. கண்டுன்னை அழைத்தவர் கரமதைப்பார்
உன்னைக் கைவிடாதிருப்பார்
ஆண்டுகள் தோறும் உனக்கவர் அளித்த
ஆசிகளை எண்ணிப்பார்
எண்ணிப்பார் எண்ணிப்பார் எண்ணிப்பார்
என்றும் அதை எண்ணிப்பார்

2. வீழ்ச்சியில் விழித்துன்னை மீட்பவரும்
இகழ்ந்துவிடாது சேர்ப்பவரும்
சிற்சில வேளையில்
சிட்சையினாலுன்னைக் கிட்டியிழுப்பவரும்
ஜெயமும், கனமும், சுகமும்
உனக்கென்றும் அளிப்பவரே

3. ஆதரவாய் பல ஆண்டுகளில் பரன்
அடைக்கலமாயிருந்தார்
காதலுடனவர் கைப்பணி செய்திட
கனிவுடன் ஆதரித்தார்
தரித்தார் தரித்தார் தரித்தார்
பரிசுத்தத்தில் அலங்கரித்தார்`
    },
    3: {
        title: "கர்த்தர் கிருபை என்றுமுள்ளது",
        lyrics: `கர்த்தர் கிருபை என்றுமுள்ளது
என்றென்றும் மாறாதது
ஆண்டுகள் தோறும் ஆண்டவர் கிருபை
ஆண்டு நடத்திடுதே

கர்த்தர் நல்லவர்
நம் தேவன் பெரியவர்
பெரியவர், பரிசுத்தர் கிருபைகள் நிறைந்தவர்
உண்மையுள்ளவர்

1. கடந்த ஆண்டு முழுவதும் நம்மை
கரத்தைப் பிடித்து நடத்தினாரே
தகப்பன் பிள்ளையை சுமப்பது போல
தோளில் சுமந்து நடத்தினாரே

2. வியாதி படுக்கை மரண நேரம்
பெலனற்ற வேளையில் தாங்கினாரே
விடுதலை தந்தார் பெலனும் ஈந்தார்
சாட்சியாய் நம்மை நிறுத்தினாரே

3. சோதனை நம்மை சூழ்ந்திட்ட நேரம்
வலக்கரத்தால் நம்மை தேற்றினாரே
வார்த்தையை அனுப்பி நம்மோடு பேசி
தைரியப்படுத்தி நடத்தினாரே

4. கண்ணீர் கவலையாவையும் போக்க
கர்த்தர் இயேசு வருகின்றாரே
கலங்கிட வேண்டாம் பயப்பட வேண்டாம்
அவரோடு நாமும் பறந்து செல்வோம்`
    },
    4: {
        title: "எந்தன் கன்மலையானவரே",
        lyrics: `எந்தன் கன்மலையானவரே
என்னை காக்கும் தெய்வம் நீரே
வல்லமை மாட்சிமை நிறைந்தவரே
மகிமைக்கு பாத்திரரே

ஆராதனை உமக்கே(4)

1. உந்தன் சிறகுகளின் நிழலில்
என்றென்றும் மகிழச் செய்தீர்
தூயவரே என் துணையாளரே
துதிக்குப் பாத்திரரே — ஆராதனை

2. எந்தன் பெலவீன நேரங்களில்
உம் கிருபை தந்தீரைய்யா
இயேசு ராஜா என் பெலனானீர்
எதற்கும் பயமில்லையே — ஆராதனை

3. எந்தன் உயிருள்ள நாட்களெள்லாம்
உம்மை புகழ்ந்து பாடிடுவேன்
ராஜா நீர் செய்த நன்மைகளை
எண்ணியே துதித்திடுவேன் — ஆராதனை`
    },
    5: {
        title: "புதிய ஆண்டுக்குள்",
        lyrics: `புதிய ஆண்டுக்குள் என்னை நடத்தும்
புதிய கிருபையால் என்னை நிரப்பும்
புது கிருபை தாரும் தேவா
புது பெலனை தாரும் தேவா

1. ஆரம்பம் அற்பமானாலும்
முடிவு சம்பூர்ணமாம்
குறைவுகள் நிறைவாகட்டும் – எல்லாம்
வறட்சி செழிப்பாகட்டும் – என்

2. வெட்கத்திற்கு பதிலாக
(இரட்டிப்பு) நன்மை தாரும் தேவா
கண்ணீருக்குப் பதிலாக – எந்தன்
களிப்பைத் தாரும் தேவா – ஆனந்த

3. சவால்கள் சந்தித்திட
(இன்று) உலகத்தில் ஜெயமெடுக்க
உறவுகள் சீர்பொருந்த – குடும்ப
சமாதானம் நான் பெற்றிட – மனதில்`
    }
};

function openSong(id) {
    const titleEl = document.getElementById("songTitle");
    const lyricsEl = document.getElementById("songLyrics");
    const modal = document.getElementById("modal");

    titleEl.innerText = songs[id].title;
    lyricsEl.innerText = songs[id].lyrics;
    modal.classList.add('open');

    // Focus for accessibility
    modal.setAttribute('aria-hidden', 'false');
    // prevent background scroll on mobile
    document.documentElement.style.overflow = 'hidden';
}

function closeSong() {
    const modal = document.getElementById("modal");
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
}

// Close modal when clicking outside content or pressing Escape
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    if (!modal) return;

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSong();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSong();
    });

    // Song list delegated click handler with brief animation before opening modal
    const list = document.querySelector('.song-list');
    if (list) {
        list.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if (!li || !list.contains(li)) return;
            const id = li.dataset.id;
            if (!id) return;

            // add quick tap animation class
            li.classList.add('clicked');

            // ensure the animation is visible briefly (120ms), then open modal
            setTimeout(() => {
                li.classList.remove('clicked');
                openSong(Number(id));
            }, 120);
        });

        // keyboard activation (Enter / Space)
        list.addEventListener('keydown', (e) => {
            const li = e.target.closest('li');
            if (!li || !list.contains(li)) return;
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                li.click();
            }
        });
    }
});

/* =========================
   PLAYLIST PAGE BEHAVIOR
   - Accept YouTube playlist or video URLs
   - Add to list, click to play in iframe, or load entire playlist
========================= */
document.addEventListener('DOMContentLoaded', () => {
    // legacy playlist controls removed in simplified UI
});

// Simple Play button handler for the default playlist (when page uses single Play button)
document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    const player = document.getElementById('ytPlayer');
    if (!playBtn || !player) return;

    playBtn.addEventListener('click', () => {
        const listId = playBtn.dataset.playlist;
        if (!listId) return;

        // Construct embed URL with Safari-friendly params
        // playsinline=1 helps keep playback inline on iOS/Safari
        const embedUrl = `https://www.youtube.com/embed/videoseries?list=${listId}&rel=0&autoplay=1&playsinline=1`;
        player.src = embedUrl;
        player.setAttribute('allow', 'autoplay; encrypted-media; fullscreen; picture-in-picture');
        player.scrollIntoView({ behavior: 'smooth' });

        // Safari on some platforms blocks autoplay even after a user gesture.
        // As a fallback, if Safari is detected, open YouTube in a new tab so user can play there.
        const ua = navigator.userAgent || '';
        const isSafari = /Safari/.test(ua) && !/Chrome|CriOS|FxiOS|Edg\//.test(ua);
        if (isSafari) {
            // small delay to allow inline player to initialize; if user needs, they can use the Open in YouTube button
            setTimeout(() => {
                // nothing forced here — keep as non-intrusive fallback; user can tap Open in YouTube if playback doesn't start
            }, 800);
        }
    });
});
