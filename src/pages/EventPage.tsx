import React from 'react';
import {useAuthContext} from "../context/AuthContext";
import { SlLike } from "react-icons/sl";

function EventPage() {
    const auth = useAuthContext();
    return (
        <section className=''>
            <header className='text-2xl mb-5'>Event</header>
            <div className='text-sm leading-5'>
                아 저는 귀찮아서 이메일을 못 뿌려요!<br/>
                깃허브 데이터 파싱해야되서!<br/>
                로그인한 사용자의 이메일도 출력해 보세요~<br/>
            </div>
            <div className='text-5xl  mt-10'>
                <SlLike className='m-auto'/>
            </div>
        </section>
    );
}

export default EventPage;