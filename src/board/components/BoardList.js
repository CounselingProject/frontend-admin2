import React, { useState } from 'react';
import SearchForm from './SearchForm';

// 예시 데이터
const exampleBoardData = [
    { bid: 'counseling', bName: '상담 게시판', active: true, listOrder: 0 },
    { bid: 'review', bName: '상담 일지', active: true, listOrder: 1 },
    { bid: 'notice', bName: '공지사항', active: true, listOrder: 2 },
];

const BoardList = () => {
    const [boardData, setBoardData] = useState(exampleBoardData);
    const [searchParams, setSearchParams] = useState({ sopt: 'ALL', skey: '' });

    const handleSearch = (searchData) => {
        const { sopt, skey } = searchData;
        setSearchParams(searchData);

        // 필터링 로직
        const filteredData = exampleBoardData.filter((board) => {
            if (sopt === 'ALL') {
                return Object.values(board).some(value => 
                    String(value).toLowerCase().includes(skey.toLowerCase())
                );
            }
            return String(board[sopt]).toLowerCase().includes(skey.toLowerCase());
        });

        setBoardData(filteredData);
    };

    return (
        <div>
            <SearchForm onSearch={handleSearch} searchParams={searchParams} />
            <table className="table_rows">
                <thead>
                    <tr>
                        <th>게시판 ID</th>
                        <th>게시판 이름</th>
                        <th>사용여부</th>
                        <th>진열가중치</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {boardData.length > 0 ? (
                        boardData.map((board) => (
                            <tr key={board.bid}>
                                <td>{board.bid}</td>
                                <td>{board.bName}</td>
                                <td>{board.active ? '사용' : '사용안함'}</td>
                                <td>{board.listOrder}</td>
                                <td>
                                    <button onClick={() => handleEdit(board.bid)}>수정</button>
                                    <button onClick={() => handleDelete(board.bid)}>삭제</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">조회된 게시글이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// 수정 및 삭제 핸들러 추가
const handleEdit = (bid) => {
    console.log(`게시글 ${bid} 수정 클릭`);
    // 수정 페이지로 이동하는 로직 추가 가능
};

const handleDelete = (bid) => {
    console.log(`게시글 ${bid} 삭제 클릭`);
    // 삭제 처리 로직 추가 가능
};

export default BoardList;
