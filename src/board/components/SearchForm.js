// components/SearchForm.js
import React from 'react';

const SearchForm = ({ onSearch, searchParams }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchData = Object.fromEntries(formData);
    onSearch(searchData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_grp">
        <select name="sopt" defaultValue={searchParams.sopt}>
          <option value="ALL">통합검색</option>
          <option value="bid">게시판 ID</option>
          <option value="NAME">작성자</option>
          <option value="SUBJECT">제목</option>
          <option value="CONTENT">내용</option>
        </select>
        <input type="text" name="skey" defaultValue={searchParams.skey} placeholder="검색어" />
      </div>
      <button type="submit" className="btn">검색하기</button>
    </form>
  );
};

export default SearchForm;
