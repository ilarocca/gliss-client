function UserHomePage() {
  return (
    <div>
      <header role="banner">
        <h2>Welcome, username.</h2>
        <h3>Add your first 3 items into your pantry.</h3>
      </header>

      <form>
        <div>
          <label for="item">Item</label>
          <input
            type="text"
            name="item"
            id="item"
            placeholder="rice, chicken, etc."
          />
        </div>

        <select name="item-type" id="js-item-type">
          <option value="grain">Grain</option>
          <option value="meat">Meat</option>
          <option value="fruit">Fruit</option>
          <option value="fish">Fish</option>
          <option value="vegatable">Vegatable</option>
          <option value="baking">Baking</option>
          <option value="sweets">Sweets</option>
          <option value="seasoning">Seasoning</option>
          <option value="sauce">Sauce</option>
          <option value="">Misc</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default UserHomePage;
