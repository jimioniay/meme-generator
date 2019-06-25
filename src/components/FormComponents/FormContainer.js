import React from 'react';

const FormContainer = ({ no, handleChange, handleFetchMeme }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="memes">Number of Memes</label>
        <input
          type="number"
          name="no"
          id="no"
          className="form-control"
          placeholder="Number of Memes"
          aria-describedby="helpId"
          value={no}
          onChange={handleChange}
          min="1"
          max="5"
        />
        <small id="helpId" className="text-muted">
          Help text
        </small>
        <br />
        <button
          className="btn btn-success"
          type="submit"
          onClick={handleFetchMeme}
        >
          Fetch Meme(s)
        </button>
      </div>
      <div className="lead">Nooo: {no}</div>
    </div>
  );
};

export default FormContainer;
