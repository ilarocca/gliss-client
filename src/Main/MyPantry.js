function MyPantry() {
  return (
    <main role="main">
      <header role="banner">
        <h2>username's Pantry</h2>
      </header>

      <form>
        <div>
          <label for="item">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder="rice, chicken, etc."
          />
        </div>

        <button type="submit">Get Recipes</button>
      </form>

      <div class="food-items">
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

        <label>
          <input
            type="radio"
            data-jplist-control="radio-buttons-sort"
            data-path=".title"
            data-group="group1"
            data-order="asc"
            data-type="text"
            data-name="sort1"
            name="top-panel-sort"
            checked
          />
          Date Added
        </label>
        <label>
          <input
            type="radio"
            data-jplist-control="radio-buttons-sort"
            data-path=".title"
            data-group="group1"
            data-order="asc"
            data-type="text"
            data-name="sort1"
            name="top-panel-sort"
            checked
          />
          Category
        </label>

        <label>
          <input
            type="radio"
            data-jplist-control="radio-buttons-sort"
            data-path=".title"
            data-group="group1"
            data-order="asc"
            data-type="text"
            data-name="sort1"
            name="top-panel-sort"
            checked
          />
          Alphebetical
        </label>

        <ul>
          <li>
            <h3>Steak</h3>
            <p>Category: Meat</p>
            <p>11/30/20</p>

            <form>
              <button>Edit</button>
              <button>Delete</button>
              <button>+</button>
            </form>
          </li>

          <li>
            <h3>Olive Oil</h3>
            <p>Category: Misc</p>
            <p>11/30/20</p>
            <form>
              <button>Edit</button>
              <button>Delete</button>
              <button>+</button>
            </form>
          </li>

          <li>
            <h3>Pasta</h3>
            <p>Category: Grain</p>
            <p>11/28/20</p>
            <form>
              <button>Edit</button>
              <button>Delete</button>
              <button>+</button>
            </form>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default MyPantry;
