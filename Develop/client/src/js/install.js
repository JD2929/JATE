const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;

  document.getElementById('buttonInstall').style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element

butInstall.addEventListener('click', async () => {
    // Check if the deferredPrompt is available
    if (deferredPrompt) {
      // Show the installation prompt to the user
      deferredPrompt.prompt();
      // Wait for the user's choice (installation or cancel)
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the installation');
      } else {
        console.log('User canceled the installation');
      }
      // Reset the deferredPrompt variable
      deferredPrompt = null;
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) =>  {
    console.log('PWA installed successfully');
   
  });
