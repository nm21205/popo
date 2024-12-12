// popo/js/script.js

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
});