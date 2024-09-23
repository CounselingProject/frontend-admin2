import React from 'react';

const BoardList = ({ boardData }) => {
    return (
        <table className="table_rows">
            <thead>
                <tr>
                    <th>게시글 ID</th>
                    <th>게시글 제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>관리</th>
                </tr>
            </thead>
            <tbody>
                {boardData && boardData.length > 0 ? (
                    boardData.map((board) => (
                        <tr key={board.bid}>
                            <td>{board.bid}</td>
                            <td>{board.bName}</td>
                            <td>{board.writer}</td>
                            <td>{new Date(board.createdAt).toLocaleDateString()}</td>
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
    );
};

// 수정 및 삭제 핸들러 추가 (필요시 수정)
const handleEdit = (bid) => {
    console.log(`게시글 ${bid} 수정 클릭`);
    // 수정 페이지로 이동하거나 수정 로직 추가
};

const handleDelete = (bid) => {
    console.log(`게시글 ${bid} 삭제 클릭`);
    // 삭제 처리 로직 추가
};

export default BoardList;
