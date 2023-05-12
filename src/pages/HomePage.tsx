function HomePage() {
    return (
        <section>
            <header className='text-2xl mb-5'>HOME</header>
            <div className='text-sm'>
                <p className='mb-2'>안녕하세요! 다음 문제 나갑니다.</p>
                <ul className='list-decimal pl-4 break-all leading-5'>
                    <li>page 구성 : home, event, login</li>
                    <li>event page는 로그인한 사용자만 접근</li>
                    <li>인증 구현은 https://firebase.google.com/products/auth?authuser=0&hl=ko <br/>(provider 2개 이상)</li>
                    <li>UI 동일하게 구현, 리액트 라우터 , context은 필수 사용, 나머지는 개취</li>
                    <li>배포는 https://vercel.com/</li>
                </ul>
            </div>
        </section>
    );
}

export default HomePage;