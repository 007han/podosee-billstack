import "../styles/globals.css";

export function Welcome() {
  const welcomeText = "포도씨에 오신것을 환영합니다.";
  const chooseCompanyText = "소속을 선택해주세요!";
  return (
    <div className="welcome">
      {welcomeText}
      <p>{chooseCompanyText}</p>
    </div>
  );
}
