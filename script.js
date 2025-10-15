// Interactive button functionality
let clickCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('testButton');
    const countDisplay = document.getElementById('clickCount');

    if (button && countDisplay) {
        button.addEventListener('click', function() {
            clickCount++;
            countDisplay.textContent = `클릭 횟수: ${clickCount}`;
            
            // Add animation effect
            button.style.animation = 'none';
            setTimeout(() => {
                button.style.animation = '';
            }, 10);

            // Show encouraging messages
            if (clickCount === 10) {
                alert('🎉 10번 클릭 달성! 계속해보세요!');
            } else if (clickCount === 50) {
                alert('🏆 50번 클릭! 대단해요!');
            } else if (clickCount === 100) {
                alert('👑 100번 클릭! 챔피언입니다!');
            }
        });
    }

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Console welcome message
    console.log('%c🚀 SandBox 테스트베드에 오신 것을 환영합니다!', 
        'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%c자유롭게 코드를 실험하고 테스트하세요!', 
        'color: #764ba2; font-size: 14px;');
});

// Example function for testing
function testFunction() {
    console.log('테스트 함수가 실행되었습니다!');
    return '테스트 성공!';
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { testFunction };
}
