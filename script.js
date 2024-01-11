const panels = document.querySelectorAll('.panel');
let currentAudio = null;

// Add audio elements for each panel
const audioClips = {
  exploring: new Audio('exploring_theme.mp3'),
  micky: new Audio('micky_theme.mp3'),
  ninja: new Audio('ninja_theme.mp3'),
  oggy: new Audio('oggy_theme.mp3'),
  perman: new Audio('perman_theme.mp3'),
  doraemon: new Audio('doraemon_theme.mp3'),
  chhotaBheem: new Audio('chhota_bheem_theme.mp3'),
  thomas: new Audio('thomas_theme.mp3'),
  frozen: new Audio('frozen_theme.mp3'),
  mrBean: new Audio('mr_bean_theme.mp3'),
  spongeBob: new Audio('spongebob_theme.mp3'),
  tomAndJerry: new Audio('tom_and_jerry_theme.mp3'),
  pokemon: new Audio('pokemon_theme.mp3'),
};

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
    playSound(panel.id);
  });

  panel.addEventListener('dblclick', () => {
    stopSound();
    removeActiveClass();
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

function playSound(panelId) {
  // Pause the currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset to the beginning
  }

  // Play the new audio clip
  if (audioClips[panelId]) {
    audioClips[panelId].play()
      .then(() => console.log(`Playing ${panelId} theme`))
      .catch((error) => console.error(`Error playing ${panelId} theme:`, error));

    currentAudio = audioClips[panelId];
  }
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset to the beginning
    console.log('Music stopped');
  }
}
