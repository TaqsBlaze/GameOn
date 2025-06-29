 /* particlesJS.load(@dom-id, @path-json, @callback (optional) ); */
 document.addEventListener('DOMContentLoaded', () => {
    particlesJS.load('particles-js', 'particlesjs-config.json', function() {
        console.log('particles.js config loaded');
    });

    const downloadButtons = [
        document.getElementById('downloadBtnNav'),
        document.getElementById('downloadBtnHero'),
        document.getElementById('downloadBtnCta'),
        document.getElementById('downloadBtnWindows'),
        document.getElementById('downloadBtnLinux')
    ];

    downloadButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                // In a real application, this would trigger a file download or redirection.
                // For this demo, we'll just show an alert or a temporary message.
                console.log('Download button clicked!');
                if (btn.id === 'downloadBtnWindows') {
                    console.log('Windows download initiated');
                    window.location.href = 'https://downloads.mafaro.co.zw/GameOn_Setup_1.0.0.exe'; // Replace with actual download link
                } else if (btn.id === 'downloadBtnLinux') {
                    console.log('Linux download initiated');
                    window.location.href = 'https://downloads.mafaro.co.zw/linux-unpacked.zip';
                } else {
                    window.location.href = 'https://downloads.mafaro.co.zw/GameOn_Setup_1.0.0.exe'; // Default download link
                }
            });
        }
    });
});