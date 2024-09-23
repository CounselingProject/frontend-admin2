import React from 'react';

const PostForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // 제출 처리 로직 추가
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>제목:</label>
                <input type="text" name="title" required />
            </div>
            <div>
                <label>내용:</label>
                <textarea name="content" required></textarea>
            </div>
            <button type="submit">등록하기</button>
        </form>
    );
};

export default PostForm;
