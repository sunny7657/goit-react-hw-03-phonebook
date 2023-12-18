export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      placeholder="Find contact"
      onChange={onChange}
      value={value}
    ></input>
  </label>
);
