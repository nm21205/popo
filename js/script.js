// popo/js/script.js

// 프런트 버튼
const inside_buttons = document.querySelectorAll(".front_1 button");

inside_buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent; // 버튼의 텍스트를 가져옴
        console.log(buttonText); // 콘솔에 버튼 텍스트 출력

        // 버튼 클릭 시 애니메이션 효과
        button.style.transform = "scale(0.9)"; // 클릭 시 크기를 줄임
        setTimeout(() => {
            button.style.transform = "scale(1)"; // 0.7초 후 원래 크기로 돌아감
        }, 700);

        // 추가적인 동작을 여기에 추가할 수 있습니다.
        switch (buttonText) {
            case "국내여행":
                // 국내여행 관련 작업
                break;
            case "해외여행":
                // 해외여행 관련 작업
                break;
            case "호텔":
                // 호텔 관련 작업
                break;
            case "테마/크루즈":
                // 테마/크루즈 관련 작업
                break;
            case "항공":
                // 항공 관련 작업
                break;
            case "렌터카":
                // 렌터카 관련 작업
                break;
            default:
                console.log("알 수 없는 버튼");
        }
    });
        // hover 상태를 유지하기 위한 이벤트 리스너 추가
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.2)"; // hover 시 크기를 키움
        });
    
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)"; // 마우스가 떠날 때 원래 크기로 돌아감
        });
    });

// 푸터 토글 버튼


    document.addEventListener("DOMContentLoaded", function() {
        // 모든 ul 요소 선택
        const uls = document.querySelectorAll('.bottom > ul');
    
        // GSAP 애니메이션 적용
        uls.forEach((ul, index) => {
            gsap.from(ul, {
                duration: 1, // 애니메이션 지속 시간
                y: 50, // 아래에서 위로 이동 (50px)
                opacity: 0, // 처음에는 투명하게 시작
                ease: "power1.out", // 이징 효과
                scrollTrigger: {
                    trigger: ul, // 트리거 요소
                    start: "top 80%", // 화면의 80% 지점에서 시작
                    toggleActions: "play none none reverse", // 스크롤 시 애니메이션 재생 및 되감기
                    once: true // 한 번만 애니메이션 실행
                }
            });
        });
                // 위쪽 화살표 아이콘 클릭 이벤트
                const scrollToTopButton = document.querySelector('.footer_top a i.fa-angle-up');
    
                scrollToTopButton.addEventListener('click', function(event) {
                    event.preventDefault(); // 기본 링크 동작 방지
                    gsap.to(window, {
                        duration: 0.2, // 애니메이션 지속 시간
                        scrollTo: 0, // 스크롤 위치 (페이지 맨 위)
                        ease: "power1.out" // 이징 효과
                    });
                });

        
            });

          


            const toggleActions = document.querySelector('.toggle');
const talkpage = document.querySelector('.talkpage');

toggleActions.addEventListener('click', function() {
    // talkpage가 보이지 않을 때
    if (talkpage.style.display === 'none' || talkpage.style.display === '') {
        talkpage.style.display = 'block'; // 먼저 display를 block으로 설정
        gsap.fromTo(talkpage, {
            opacity: 0,
            y: -20 // 위에서 아래로 나타나게
        }, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "power1.out"
        });
    } else {
        gsap.to(talkpage, {
            duration: 0.3,
            opacity: 0,
            y: -20, // 위로 사라지게
            ease: "power1.in",
            onComplete: function() {
                talkpage.style.display = 'none'; // 애니메이션이 끝난 후 display를 none으로 설정
            }
        });
    }
});

talkpage.addEventListener('mouseleave', function() {
    gsap.to(talkpage, {
        duration: 0.3,
        opacity: 0,
        y: -20, // 위로 사라지게
        ease: "power1.in",
        onComplete: function() {
            talkpage.style.display = 'none'; // 애니메이션이 끝난 후 display를 none으로 설정
        }
    });
});


