
const RadioInput = () => {
    return (
        <center>
            <fieldset>
                <div id="category-radio-buttons">
                    <div className="radio">
                        <input type="radio" id="create-category" name="category-crud-options" value="create" />
                        <label htmlFor="create-category">Create new Category</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="update-category" name="category-crud-options" value="update" />
                        <label htmlFor="update-category">Update existing Category</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="delete-category" name="category-crud-options" value="delete" />
                        <label htmlFor="delete-category">Delete Category</label>
                    </div>
                </div>
            </fieldset>
        </center>
    );
}
export default RadioInput;