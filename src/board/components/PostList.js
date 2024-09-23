import React from 'react';

const PostList = ({ searchParams }) => {
    // 실제 게시글 데이터 패칭 로직 추가 필요
    return (
        <table className="table_rows">
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>관리</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="5">조회된 게시글이 없습니다.</td>
                </tr>
            </tbody>
        </table>
    );
};

export default PostList;
