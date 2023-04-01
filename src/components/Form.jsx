import React, { useContext } from 'react';
import { MianContext } from '../context/context';

const Form = () => {
  const { search, setSearch } = useContext(MianContext);

  return (
    <div className="container pt-5 w-50">
      <form>
        <input
          type="text"
          placeholder="Blog Name"
          className="form-control"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Form;