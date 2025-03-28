const textElement = document.getElementById('animatedText');
const textContent = "I'm Full Stack Developer!";
const duration = (textContent.length) * 100; // Tổng thời gian cho hiệu ứng (ms)
const breakDuration = 1000; // Thời gian delay giữa các ký tự (ms)
const totalIndex = textContent.length - 1;

function animateText() {
    textElement.innerHTML = textContent.split('').map((char, index) =>
        `<span style="--index: ${index}; --total-index: ${totalIndex};">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    // Thêm class `show` để bắt đầu hiệu ứng appear
    textElement.classList.add('show');

    // Xoá hiệu ứng sau khi hoàn thành để lặp lại
    setInterval(() => {
        textElement.classList.toggle('show');
        textElement.classList.toggle('hide');
    }, duration + breakDuration);
}

// Bắt đầu animation lần đầu tiên
animateText();
