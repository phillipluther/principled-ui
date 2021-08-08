export const KB_NAV_CLASS = 'kb-active';
const KB_ACTIVE_KEYS = [
  'Tab',
];

// gets tripped when any component pulls this in so the listeners don't stack
let isInitialized = false;

export default function handleKeyboardNav() {
  if ((typeof window === 'undefined') || isInitialized) {
    console.log('NOT INITIALIZING');
    return;
  }

  function activateKeyboardNav({ key }) {
    if (KB_ACTIVE_KEYS.includes(key)) {
      window.addEventListener('mousedown', deactivateKeyboardNav);
      window.removeEventListener('keydown', activateKeyboardNav);

      document.body.classList.add(KB_NAV_CLASS);

      console.log('Activating KB');
    }
  }

  function deactivateKeyboardNav() {
    window.removeEventListener('mousedown', deactivateKeyboardNav);
    window.addEventListener('keydown', activateKeyboardNav);

    document.body.classList.remove(KB_NAV_CLASS);

    console.log('Deactivating KB');
  }

  // starts disabled
  deactivateKeyboardNav();
  isInitialized = true;
}
