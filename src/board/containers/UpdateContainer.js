'use client';
import React, { useLayoutEffect} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';

const UpdateContainer = ({ params }) => {
    const { setMenuCode, setSubMenuCode } = getCommonActions();

    const { bid } = params;

    useLayoutEffect(() => {
        setMenuCode("board");
        setSubMenuCode(bid ? "update" : "register");
    }, [setSubMenuCode, setMenuCode, bid]);
    
    return <h1>게시판 등록/수정</h1>
};

export default React.memo(UpdateContainer);